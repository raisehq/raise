import React, { useState, useEffect, useContext, useMemo } from 'react';
import { AppContext } from '../App';
import numeral, { numeralFormat } from '../../commons/numeral';
import { BrowserView } from 'react-device-detect';
import { UI, getLoanAction } from './CreateLoan.Response';
import Coin from '../Coin';
import LoanInput from './LoanInput';
import {
  TopHeader,
  Header,
  Divider,
  LoanInputLabel,
  LoanContainer,
  LoanBox,
  LoanTerm,
  LoanAmountBox,
  LoanInputBox,
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
  SliderWrapper
} from './CreateLoan.styles';
import Slider from '../Slider';
import { getMonths, getLoanAuctionInterval } from '../../commons/months';
import useLoanDispatcher from '../../hooks/useLoanDispatcher';

/** Start of defaults */
const minAmountOptions = [
  { text: '20%', value: 20 },
  { text: '30%', value: 30 },
  { text: '40%', value: 40 },
  { text: '50%', value: 50 },
  { text: '60%', value: 60 },
  { text: '70%', value: 70 }
];

const min = 1;
const max = 2500000;
const defaultAmount = 10000;
const defaultTerm = 2592000;
const defaultTermAuction = 2592000;
const defaultMinPercent = 20;
const sliderMinAPR = 0;
const sliderMaxAPR = 20;
const defaultMinAPR = 10;
const defaultMaxAPR = 20;

const marks = {
  5: '',
  10: '',
  15: ''
};

/** End of defaults */

const calculateMinAmount = (value, percent) => {
  const minAmount = value - value * (percent / 100);
  return minAmount >= 1 ? minAmount : 1;
};

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
  const [minAPR, setMinAPR] = useState(defaultMinAPR);
  const [maxAPR, setMaxAPR] = useState(defaultMaxAPR);
  const [minPercent, setMinPercent] = useState(defaultMinPercent);
  const [loan, setLoan] = useState({
    amount: defaultAmount,
    term: defaultTerm,
    auctionTerm: defaultTermAuction,
    minMir: parseFloat((defaultMinAPR / 12).toString()),
    maxMir: parseFloat((defaultMaxAPR / 12).toString()),
    accept: false,
    minAmount: calculateMinAmount(defaultAmount, defaultMinPercent)
  });
  const [selectedMonth, setSelectedMonth] = useState(defaultTerm);
  const [selectedLoanAuction, setSelectedLoanAuction] = useState(defaultTermAuction);
  const termMonths = loan.term / 60 / 60 / 24 / 30;

  // Calculations
  const numberAmount = loan.amount;
  const formattedAmount = numeral(loan.amount).format();
  const formattedMinAmount = numeral(loan.minAmount).format();
  const repaymentAmount = numeral(
    numberAmount + (numberAmount * (loan.maxMir * termMonths)) / 100
  ).format();
  const netLoan = numeral(numberAmount - (numberAmount * 1) / 100).format();
  const systemFees = numeral((numberAmount * 1) / 100).format();
  const totalInterest = numeral((numberAmount * (loan.maxMir * termMonths)) / 100).format();

  const onSetAmount = ({ floatValue }) => {
    const minAmount = calculateMinAmount(floatValue, minPercent);
    setLoan({
      ...loan,
      amount: floatValue,
      minAmount: loan.accept ? minAmount : floatValue
    });
  };

  const monthOptions = useMemo(() => getMonths(network), [network]);
  const loanAuctionInterval = useMemo(() => getLoanAuctionInterval(network), [network]);

  const onSetTerm = (e, data) => {
    setSelectedMonth(data.value);
    setLoan({ ...loan, term: data.value });
  };

  const onSetTermAuction = (e, { value }) => {
    setSelectedLoanAuction(value);
    setLoan({ ...loan, auctionTerm: value });
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
    const minMir = minApr / 12;
    const maxMir = maxApr / 12;

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
        loan.auctionTerm
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
    setMinAPR(defaultMinAPR);
    setMaxAPR(defaultMaxAPR);
    setMinPercent(defaultMinPercent);
    setLoan({
      amount: defaultAmount,
      term: defaultTerm,
      auctionTerm: defaultTermAuction,
      minMir: parseFloat((defaultMinAPR / 12).toString()),
      maxMir: parseFloat((defaultMaxAPR / 12).toString()),
      accept: false,
      minAmount: calculateMinAmount(defaultAmount, defaultMinPercent)
    });
    setTermsCond(false);

    //Reseting control values to default in case of create a new loan without refreshing the screen
    onSetTermAuction(null, { value: defaultTermAuction });
    onSetTerm(null, { value: defaultTerm });
  };

  const onBlur = e => {
    const currentValue = loan.amount;
    setAmountValidation({
      error: currentValue < min || currentValue > max,
      msg: `Can not be ${currentValue < min ? `less than ${min} DAI` : `more than ${max} DAI`}`
    });
  };

  useEffect(() => {
    const { amount: currentAmount, term: termSeconds, minMir, maxMir } = loan;
    const term = termSeconds / 60 / 60 / 24 / 30;
    if (currentAmount && minMir && maxMir && term) {
      setMinAPR(minMir * 12);
      setMaxAPR(maxMir * 12);
    }
  }, [loan]);

  const onToggleTerms = () => {
    const toggleTerms = !termsCond;
    setTermsCond(toggleTerms);
  };

  const values = {
    loan,
    numberAmount,
    amountValidation,
    formattedAmount,
    repaymentAmount,
    netLoan,
    systemFees,
    totalInterest,
    termsCond
  };
  const methods = { onSave, onRetry, onToggleTerms };

  return (
    <LoanContainer>
      <LoanForm>
        <LoanAmountBox>
          <LoanDescription>
            <TopHeader as="h2">How much would you like to borrow?</TopHeader>
            <p>Please enter the amount you would like to borrow.</p>
          </LoanDescription>
          <LoanFormInput>
            <LoanInputBox>
              <LoanInput
                id="input-amount"
                value={loan.amount}
                onValueChange={onSetAmount}
                onBlur={onBlur}
                fmt={numeralFormat}
              />
              <Coin src={`${process.env.REACT_APP_HOST_IMAGES}/images/ico_dai.svg`} name="DAI" />
            </LoanInputBox>
            <LoanInputLabel>
              {amountValidation.error ? <InputError>{amountValidation.msg}</InputError> : ''}
            </LoanInputLabel>
          </LoanFormInput>
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
                  <p>Minimum amount: {formattedMinAmount} DAI</p>
                </InputDescription>
                <MininumLoanSelect
                  value={minPercent}
                  onChange={onMinAmount}
                  placeholder="Select"
                  options={minAmountOptions}
                />
              </InputBox>
            )}
          </LoanDescriptionLowerAmount>
        </LoanAmountBox>
        <BrowserView>
          <Divider />
        </BrowserView>
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
              defaultValue={[defaultMinAPR, defaultMaxAPR]}
              onChange={value => onInterestChange(value)}
              min={sliderMinAPR}
              marks={marks}
              max={sliderMaxAPR}
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
