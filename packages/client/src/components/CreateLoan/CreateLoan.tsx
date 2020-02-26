import React, { useState, useEffect, useContext, useMemo } from 'react';
import { BrowserView } from 'react-device-detect';
import AppContext from '../AppContext';
import { numeralFormat } from '../../commons/numeral';
import { UI, getLoanAction } from './CreateLoan.Response';
import LoanInput from './LoanInput';
import {
  TopHeader,
  Header,
  Divider,
  LoanInputLabel,
  LoanContainer,
  LoanBox,
  LoanTerm,
  LoanSelect,
  MininumLoanSelect,
  LoanCheckbox,
  LoanDescription,
  LoanDescriptionLowerAmount,
  LoanFormInput,
  SideInfo,
  InputError,
  InputBox,
  InputDescription,
  LoanForm,
  SliderWrapper,
  LoanCoinSelect,
  LoanWrapper,
  LoanDescriptionContainer,
  LoanControlsContainer,
  LoanFormLabel,
  LoanControlsGroup,
  LoanInputCoin,
  CreateLoanSection,
  CreateLoanRow,
  CreateLoanColumn,
  SectionTitle,
  ControlLabel
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
import { getMonths, getLoanAuctionInterval } from '../../commons/months';
import useLoanDispatcher from '../../hooks/useLoanDispatcher';
import { COINS, CREATE_LOAN_DEFAULT_COIN } from '../../commons/constants';
import InputNumber from '../commons/InputControl/InputNumber';

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
  const [selectedLoanAuction, setSelectedLoanAuction] = useState(TERM_AUCTION_DEFAULT);
  const [coins, setCoins] = useState([]);
  const [selectedCoinType, setSelectedCoinType] = useState(COIN_DEFAULT.name);

  const monthOptions = useMemo(() => getMonths(network), [network]);
  const loanAuctionInterval = useMemo(() => getLoanAuctionInterval(network), [network]);

  useEffect(() => {
    const coinsArrays: any = COINS.map((item, index) => ({
      text: item.name,
      value: item.name,
      key: index
    }));

    setCoins(coinsArrays);
    setSelectedCoinType(coinsArrays[0].text);
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

  const onSetTermAuction = (e, { value }) => {
    setSelectedLoanAuction(value);
    setLoan({ ...loan, auctionTerm: value });
  };

  const onSetCoinAmount = (e, data) => {
    setSelectedCoinType(data.value);
    const coin = COINS.find(item => item.name === data.value);
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
    onSetTermAuction(null, { value: TERM_AUCTION_DEFAULT });
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
        <LoanWrapper>
          <LoanDescriptionContainer>
            <TopHeader as="h2">How much would you like to borrow?</TopHeader>
            <div>Please enter the amount you would like to borrow.</div>
          </LoanDescriptionContainer>
          <LoanControlsContainer>
            <LoanControlsGroup>
              <LoanFormLabel>
                <span>Amount</span>
              </LoanFormLabel>
              <LoanInputCoin>
                <LoanInput
                  id="input-amount"
                  value={loan.amount}
                  onValueChange={onSetAmount}
                  onBlur={onBlur}
                  fmt={numeralFormat}
                />
              </LoanInputCoin>
            </LoanControlsGroup>
            <LoanControlsGroup>
              <LoanFormLabel>
                <span>Coins</span>
              </LoanFormLabel>
              <LoanCoinSelect
                value={selectedCoinType}
                onChange={onSetCoinAmount}
                placeholder="Select Coin"
                options={coins}
              />
            </LoanControlsGroup>
            <LoanInputLabel>
              {amountValidation.error ? <InputError>{amountValidation.msg}</InputError> : ''}
            </LoanInputLabel>
          </LoanControlsContainer>
          <LoanDescriptionLowerAmount>
            <Header as="h3">Would you accept a lower amount than the requested?</Header>
            <LoanFormInput>
              <LoanCheckbox toggle label={loan.accept ? 'YES' : 'NO'} onChange={onToggleAccept} />
            </LoanFormInput>
            <p>
              In some cases, loan auctions don't achieve the target amount for different reasons
            </p>
            {loan.accept && (
              <InputBox>
                <InputDescription>
                  Please select how much less:
                  <p>
                    Minimum amount: {formatAmount(loan.minAmount)} {selectedCoinType}
                  </p>
                </InputDescription>
                <MininumLoanSelect
                  value={minPercent}
                  onChange={onMinAmount}
                  placeholder="Select"
                  options={MIN_AMOUNT_OPTIONS}
                />
              </InputBox>
            )}
          </LoanDescriptionLowerAmount>
        </LoanWrapper>
        <BrowserView>
          <Divider />
        </BrowserView>
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
          </CreateLoanRow>
          <CreateLoanRow></CreateLoanRow>
        </CreateLoanSection>
        <LoanTerm>
          <LoanDescription>
            <Header as="h2">Loan Auction</Header>
            <p>
              Select how long you want for your loan auction to be open. You will be able to check
              the loan auction progress from your dashboard.
            </p>
          </LoanDescription>
          <LoanFormInput>
            <LoanSelect
              value={selectedLoanAuction}
              onChange={onSetTermAuction}
              placeholder="Select auction time"
              options={loanAuctionInterval}
            />
          </LoanFormInput>
        </LoanTerm>
        <BrowserView>
          <Divider />
        </BrowserView>
        <LoanTerm>
          <LoanDescription>
            <Header as="h2">Loan term</Header>
            <p>The loan term will start after the loan auction is finished.</p>
          </LoanDescription>
          <LoanFormInput>
            <LoanSelect
              value={selectedMonth}
              onChange={onSetTerm}
              placeholder="Select term"
              options={monthOptions}
            />
          </LoanFormInput>
        </LoanTerm>
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
