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
  InterestCard,
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
const defaultMir = 10;
const defaultTerm = 2592000;
const defaultTermAuction = 2592000;
const defaultMinPercent = 20;
const minMir = 0;
const maxMir = 20;

const marks = {
  4: ' ',
  8: ' ',
  12: ' ',
  16: ' '
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
  const [APR, setAPR] = useState(0);
  const [minPercent, setMinPercent] = useState(defaultMinPercent);
  const [loan, setLoan] = useState({
    amount: defaultAmount,
    term: defaultTerm,
    auctionTerm: defaultTermAuction,
    mir: defaultMir,
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
    numberAmount + (numberAmount * (loan.mir * termMonths)) / 100
  ).format();
  const netLoan = numeral(numberAmount - (numberAmount * 1) / 100).format();
  const systemFees = numeral((numberAmount * 1) / 100).format();
  const totalInterest = numeral((numberAmount * (loan.mir * termMonths)) / 100).format();

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

  const onSetMIR = mir => setLoan({ ...loan, mir });

  const onToggleAccept = () => setLoan({ ...loan, accept: !loan.accept });

  const onMinAmount = (e, data) => {
    setMinPercent(data.value);
    setLoan(l => {
      const minAmount = calculateMinAmount(l.amount, data.value);
      return { ...l, minAmount };
    });
  };

  const onInterestChange = value => onSetMIR(parseFloat(value));

  const onSave = async () => {
    setStage(UI.Waiting);
    try {
      await loanDispatcher.deploy(loan.minAmount, loan.amount, loan.mir, loan.term, loan.accept, loan.auctionTerm);
      setStage(UI.Success);
    } catch (error) {
      console.error(
        '[LOAN DISPACHER]',
        ` MinAmount: ${loan.minAmount} Amount: ${loan.amount} Mir: ${loan.mir} Term: ${
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
    setAPR(0);
    setMinPercent(defaultMinPercent);
    setLoan({
      amount: defaultAmount,
      term: defaultTerm,
      auctionTerm: defaultTermAuction,
      mir: defaultMir,
      accept: false,
      minAmount: calculateMinAmount(defaultAmount, defaultMinPercent)
    });
    setTermsCond(false);
  };

  const onBlur = e => {
    const currentValue = loan.amount;
    setAmountValidation({
      error: currentValue < min || currentValue > max,
      msg: `Can not be ${currentValue < min ? `less than ${min} DAI` : `more than ${max} DAI`}`
    });
  };

  useEffect(() => {
    const { amount: currentAmount, term: termSeconds, mir } = loan;
    const term = termSeconds / 60 / 60 / 24 / 30;
    if (currentAmount && mir && term) {
      setAPR((((currentAmount * mir * term) / currentAmount) * 12) / term);
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
            <p>Select how long do you want for your loan auction to be open.</p>
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
            <p>
              The loan term will start after the loan auction is finished. This process could take
              from a few days up to 30 days. You will be able to check the auction progress from
              your dashboard.
            </p>
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
            <Header as="h2">Monthly interest rate *</Header>
            <p>Select the maximun interest rate you would accept for your loan.</p>
          </LoanDescription>
          <SliderWrapper>
            <InterestCard>
              <span>
                {loan.mir}% MIR* ({APR.toFixed(2)}% APR)
              </span>
            </InterestCard>
            <Slider
              defaultValue={loan.mir}
              onChange={onInterestChange}
              min={minMir}
              marks={marks}
              max={maxMir}
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
