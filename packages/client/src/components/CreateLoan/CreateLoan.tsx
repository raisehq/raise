import React, { useState, useEffect, useContext, useMemo } from 'react';
import { BrowserView } from 'react-device-detect';
import AppContext from '../AppContext';
import { numeralFormat } from '../../commons/numeral';
import { UI, getLoanAction } from './CreateLoan.Response';
import {
  Header,
  Divider,
  LoanContainer,
  LoanBox,
  LoanDescription,
  SideInfo,
  InputError,
  LoanInputLabel,
  LoanForm,
  SliderWrapper,
  CreateLoanSection,
  CreateLoanRow,
  CreateLoanColumn,
  SectionTitle,
  ControlLabel,
  CreateLoanDescription
} from './CreateLoan.styles';
import {
  MIN_AMOUNT_OPTIONS,
  MIN,
  MAX,
  AMOUNT_DEFAULT,
  TERM_DEFAULT,
  TERM_AUCTION_DEFAULT,
  MIN_PERCENT_DEFAULT,
  SLIDER_MIN_APR,
  SLIDER_MAX_APR,
  MIN_APR_DEFAULT,
  MAX_APR_DEFAULT,
  MARKS
} from './constants';
import {
  formatAmount,
  calculateRepaymentAmount,
  calculateNetLoan,
  calculateSystemFees,
  calculateTotalInterest,
  calculateTermFromSecondsToMonths,
  calculateMinAmount,
  calculateAPRFromMIR,
  calculateMIRFromAPR
} from './calculations';
import Slider from '../Slider';
import { getMonths } from '../../commons/months';
import { getLoanAuctionIntervalArray } from '../../commons/months';
import useLoanDispatcher from '../../hooks/useLoanDispatcher';
import { COINS, CREATE_LOAN_DEFAULT_COIN } from '../../commons/constants';
import InputNumber from '../commons/InputControl/InputNumber';
import GroupButton from '../commons/ButtonControl/GroupButton';
import CheckboxControl from '../commons/CheckboxControl';
import SelectControl from '../commons/SelectControl';

const COIN_DEFAULT = CREATE_LOAN_DEFAULT_COIN;

const CreateLoan = () => {
  const {
    web3Status: { network }
  }: any = useContext(AppContext);

  const [stage, setStage] = useState(UI.Confirm);
  const loanDispatcher = useLoanDispatcher();
  const [amountValidation, setAmountValidation] = useState({
    error: false,
    msg: ''
  });
  const [termsCond, setTermsCond] = useState(false);
  const [minAPR, setMinAPR] = useState(MIN_APR_DEFAULT);
  const [maxAPR, setMaxAPR] = useState(MAX_APR_DEFAULT);
  const [minPercent, setMinPercent] = useState(MIN_PERCENT_DEFAULT);
  const [loan, setLoan] = useState({
    amount: AMOUNT_DEFAULT,
    tokenAddress: COIN_DEFAULT.address,
    term: TERM_DEFAULT,
    auctionTerm: TERM_AUCTION_DEFAULT,
    minMir: parseFloat((MIN_APR_DEFAULT / 12).toString()),
    maxMir: parseFloat((MAX_APR_DEFAULT / 12).toString()),
    accept: false,
    minAmount: calculateMinAmount(AMOUNT_DEFAULT, MIN_PERCENT_DEFAULT)
  });
  const [selectedMonth, setSelectedMonth] = useState(TERM_DEFAULT);

  const [coins, setCoins] = useState([]);
  const [selectedCoinType, setSelectedCoinType] = useState(COIN_DEFAULT.name);
  const [selectedCoinIndex, setSelectedCoinIndex] = useState<any>(0);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<any>(2);

  const monthOptions = useMemo(() => getMonths(network), [network]);
  const loanAuctionIntervalArray = useMemo(() => getLoanAuctionIntervalArray(network), [network]);
  useEffect(() => {
    const coinsArrays: any = COINS.map(item => ({
      text: item.name,
      value: item.name,
      key: item.key,
      icon: item.icon
    }));
    setCoins(coinsArrays);
    setSelectedCoinType(coinsArrays[0].text);
    setSelectedCoinIndex(coinsArrays[0].key);
  }, []);

  useEffect(() => {
    const { amount: currentAmount, term: termSeconds, minMir, maxMir } = loan;
    const term = calculateTermFromSecondsToMonths(termSeconds);
    if (currentAmount && minMir && maxMir && term) {
      setMinAPR(calculateAPRFromMIR(minMir));
      setMaxAPR(calculateAPRFromMIR(maxMir));
    }
  }, [loan]);

  const onSetAmount = ({ floatValue }) => {
    const minAmount = calculateMinAmount(floatValue, minPercent);
    setLoan({
      ...loan,
      amount: floatValue,
      minAmount: loan.accept ? minAmount : floatValue
    });
  };

  const onSetTerm = (e, data) => {
    setSelectedMonth(data.value);
    setLoan({ ...loan, term: data.value });
  };

  const onSetTermAuction = option => () => {
    //setSelectedLoanAuction(option);
    const auctionTerm = loanAuctionIntervalArray.find(item => item.value === option);
    setSelectedMonthIndex(auctionTerm && auctionTerm.key);
    setLoan({ ...loan, auctionTerm: option });
  };

  const onSetCoinAmount = option => () => {
    setSelectedCoinType(option);
    const coin = COINS.find(item => item.name === option);
    setSelectedCoinIndex(coin ? coin.key : 0);
    const addressCoin: any = coin ? coin.address : null;

    setLoan({ ...loan, tokenAddress: addressCoin });
  };

  const onSetMIR = minMir => maxMir => setLoan({ ...loan, minMir, maxMir });

  const onToggleAccept = () => setLoan({ ...loan, accept: !loan.accept });

  const onMinAmount = (e, data) => {
    setMinPercent(data.value);
    setLoan(l => {
      const minAmount = calculateMinAmount(l.amount, data.value);
      return { ...l, minAmount };
    });
  };

  const onInterestChange = valuesArray => {
    const minApr = parseFloat(valuesArray[0]);
    const maxApr = parseFloat(valuesArray[1]);
    const minMir = calculateMIRFromAPR(minApr);
    const maxMir = calculateMIRFromAPR(maxApr);

    setMinAPR(minApr);
    setMaxAPR(maxApr);
    onSetMIR(minMir)(maxMir);
  };

  const onSave = async () => {
    setStage(UI.Waiting);
    try {
      await loanDispatcher.deploy(
        loan.minAmount,
        loan.amount,
        loan.minMir,
        loan.maxMir,
        loan.term,
        loan.accept,
        loan.auctionTerm,
        loan.tokenAddress
      );
      setStage(UI.Success);
    } catch (error) {
      console.error(
        '[LOAN DISPACHER]',
        ` MinAmount: ${loan.minAmount} Amount: ${loan.amount} Mir: ${loan.maxMir} Term: ${
          loan.term
        } Accept: ${loan.accept.toString()} `,
        error
      );
      setStage(UI.Error);
    }
  };

  const onRetry = async () => {
    setStage(UI.Confirm);
    setAmountValidation({
      error: false,
      msg: ''
    });
    setMinAPR(MIN_APR_DEFAULT);
    setMaxAPR(MAX_APR_DEFAULT);
    setMinPercent(MIN_PERCENT_DEFAULT);
    setLoan({
      amount: AMOUNT_DEFAULT,
      tokenAddress: COIN_DEFAULT.address,
      term: TERM_DEFAULT,
      auctionTerm: TERM_AUCTION_DEFAULT,
      minMir: parseFloat((MIN_APR_DEFAULT / 12).toString()),
      maxMir: parseFloat((MAX_APR_DEFAULT / 12).toString()),
      accept: false,
      minAmount: calculateMinAmount(AMOUNT_DEFAULT, MIN_PERCENT_DEFAULT)
    });
    setTermsCond(false);

    //Reseting control values to default in case of create a new loan without refreshing the screen
    onSetTermAuction(TERM_AUCTION_DEFAULT)();
    onSetTerm(null, { value: TERM_DEFAULT });
  };

  const onBlur = e => {
    const currentValue = loan.amount;
    setAmountValidation({
      error: currentValue < MIN || currentValue > MAX,
      msg: `Can not be ${currentValue < MIN ? `less than ${MIN} DAI` : `more than ${MAX} DAI`}`
    });
  };

  const onToggleTerms = () => {
    const toggleTerms = !termsCond;
    setTermsCond(toggleTerms);
  };

  const values = {
    loan,
    selectedCoinType,
    numberAmount: loan.amount,
    amountValidation,
    formattedAmount: formatAmount(loan.amount),
    repaymentAmount: calculateRepaymentAmount(
      loan.amount,
      loan.maxMir,
      calculateTermFromSecondsToMonths(loan.term)
    ),
    netLoan: calculateNetLoan(loan.amount),
    systemFees: calculateSystemFees(loan.amount),
    totalInterest: calculateTotalInterest(
      loan.amount,
      loan.maxMir,
      calculateTermFromSecondsToMonths(loan.term)
    ),
    termsCond
  };
  const methods = { onSave, onRetry, onToggleTerms };

  return (
    <LoanContainer>
      <LoanForm>
        <CreateLoanSection>
          <CreateLoanRow>
            <SectionTitle as="h2">How much would you like to borrow?</SectionTitle>
          </CreateLoanRow>
          <CreateLoanRow>
            <CreateLoanColumn>
              <ControlLabel>Enter the amount</ControlLabel>
              <InputNumber
                id="input-amount"
                value={loan.amount}
                onValueChange={onSetAmount}
                onBlur={onBlur}
                fmt={numeralFormat}
              />
            </CreateLoanColumn>
            <CreateLoanColumn>
              <ControlLabel>Select the cryptocurrency</ControlLabel>
              <GroupButton
                options={coins}
                withIcon={true}
                onClick={onSetCoinAmount}
                selectedIndex={selectedCoinIndex}
              />
            </CreateLoanColumn>
            <LoanInputLabel>
              {amountValidation.error ? <InputError>{amountValidation.msg}</InputError> : ''}
            </LoanInputLabel>
          </CreateLoanRow>
          <CreateLoanRow>
            <CheckboxControl
              onChange={onToggleAccept}
              label="I accept a lower amount than the requested if the auction don’t achieve the target"
            />
          </CreateLoanRow>

          {loan.accept && (
            <>
              <CreateLoanColumn>
                <ControlLabel>Please select how much less:</ControlLabel>
                <SelectControl
                  value={minPercent}
                  onChange={onMinAmount}
                  placeholder="Select"
                  options={MIN_AMOUNT_OPTIONS}
                />
              </CreateLoanColumn>
              <ControlLabel>
                Minimum amount: {formatAmount(loan.minAmount)} {selectedCoinType}
              </ControlLabel>
            </>
          )}
        </CreateLoanSection>
        <BrowserView>
          <Divider />
        </BrowserView>
        <CreateLoanSection>
          <CreateLoanRow>
            <SectionTitle as="h2">Loan Auction</SectionTitle>
          </CreateLoanRow>
          <CreateLoanRow>
            <CreateLoanDescription>
              Select how long do you want for your loan auction to be open.
            </CreateLoanDescription>
          </CreateLoanRow>
          <CreateLoanRow>
            <GroupButton
              options={loanAuctionIntervalArray}
              onClick={onSetTermAuction}
              selectedIndex={selectedMonthIndex}
            />
          </CreateLoanRow>
        </CreateLoanSection>
        <BrowserView>
          <Divider />
        </BrowserView>
        <CreateLoanSection>
          <CreateLoanRow>
            <SectionTitle as="h2">Loan Term</SectionTitle>
          </CreateLoanRow>
          <CreateLoanRow>
            <CreateLoanDescription>
              Select when you want to repay the loan. The loan term it will start after the loan
              auction is finished
            </CreateLoanDescription>
          </CreateLoanRow>
          <CreateLoanRow>
            <SelectControl
              value={selectedMonth}
              onChange={onSetTerm}
              placeholder="Select term"
              options={monthOptions}
            />
          </CreateLoanRow>
        </CreateLoanSection>

        <BrowserView>
          <Divider />
        </BrowserView>

        <LoanBox>
          <LoanDescription>
            <Header as="h2">Annual percentage rate</Header>
            <p>
              Select the starting APR for your loan auction and the maximum APR you would accept for
              your loan.
            </p>
          </LoanDescription>
          <SliderWrapper>
            <Slider
              defaultValue={[MIN_APR_DEFAULT, MAX_APR_DEFAULT]}
              onChange={value => onInterestChange(value)}
              min={SLIDER_MIN_APR}
              marks={MARKS}
              max={SLIDER_MAX_APR}
              allowCross={false}
              loan={loan}
              minAPR={minAPR}
              maxAPR={maxAPR}
            />

            <SideInfo>* MIR : Monthly simple interest rate</SideInfo>
          </SliderWrapper>
        </LoanBox>
      </LoanForm>
      {getLoanAction(stage, values, methods)}
    </LoanContainer>
  );
};

export default CreateLoan;
