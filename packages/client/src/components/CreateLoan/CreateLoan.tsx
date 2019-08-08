import React, { useState, useEffect } from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';
import {
  LoanInputLabel,
  BloodWrapper,
  LoanInputBox,
  LoanSelect,
  MininumLoanSelect,
  LoanCheckbox,
  BloodCardMain,
  BloodCardContent,
  BloodCardFloat,
  DAILogo,
  InterestCard,
  ConfirmButton,
  SideInfo,
  InputError,
  InputBox,
  InputDescription,
  LoanForm,
  LoanFormInfo,
  LoanFormValue
} from './CreateLoan.styles';
import Slider from '../Slider';
import months from '../../commons/months';
import useLoanDispatcher from '../../hooks/useLoanDispatcher';

const numeralFormat = '0,0.00'
numeral.register('locale', 'hero', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'mm',
      billion: 'b',
      trillion: 't'
  },
  ordinal: function (number) {
      var b = number % 10;
      return (b === 1 || b === 3) ? 'er' :
          (b === 2) ? 'do' :
              (b === 7 || b === 0) ? 'mo' :
                  (b === 8) ? 'vo' :
                      (b === 9) ? 'no' : 'to';
  },
  currency: {
      symbol: '€'
  }
});
numeral.locale('hero');
numeral.defaultFormat(numeralFormat)

const minAmountOptions = Array.from({length: 99}, (v, k) => ({ value: k + 1, text: `${k + 1} %`})); 

const LoanInput = (props) => {
  const decimalScale = 2;
  const thousandSeparator = '.';
  const decimalSeparator = ',';
  return (
    <NumberFormat
      allowEmptyFormatting={true}
      fixedDecimalScale={true}
      decimalScale={decimalScale} 
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      {...props}
    />
  );
}
const min = 1;
const max = 2500000;
const defaultAmount = 10000;
const defaultMir = 0.5;
const defaultTerm = 3;
const defaultMinPercent = 10;
const minMir = 0;
const maxMir = 20;

const marks = {
  4: ' ',
  8: ' ',
  12: ' ',
  16: ' '
}

const calculateMinAmount = (value, percent) => value - (value * (percent / 100))

const CreateLoan = () => {
  const loanDispatcher = useLoanDispatcher();
  const [amountValidation, setAmountValidation] = useState({
    error: false,
    msg: ''
  });
  const [APR, setAPR] = useState(0);
  const [minPercent, setMinPercent] = useState(defaultMinPercent);
  const [loan, setLoan] = useState({
    amount: defaultAmount,
    term: defaultTerm,
    mir: defaultMir,
    accept: false,
    minAmount: calculateMinAmount(defaultAmount, defaultMinPercent)
  });

  // Calculations
  const numberAmount = loan.amount;
  const formattedAmount = numeral(loan.amount).format();
  const formattedMinAmount = numeral(loan.minAmount).format();
  const repaymentAmount = numeral(numberAmount + (numberAmount * (loan.mir * loan.term)) / 100).format();
  const netLoan = numeral(numberAmount - (numberAmount * 1) / 100).format();
  const systemFees = numeral((numberAmount * 1) / 100).format();
  const totalInterest = numeral((numberAmount * (loan.mir * loan.term)) / 100).format()

  const onSetAmount = ({ floatValue }) => {
    setLoan({ ...loan, amount: floatValue, minAmount: loan.accept ? calculateMinAmount(floatValue, minPercent) : floatValue });
  }

  const onSetTerm = (e, data) =>
    setLoan({ ...loan, term: data.value });

  const onSetMIR = mir => setLoan({ ...loan, mir });

  const onToggleAccept = () => setLoan({ ...loan, accept: !loan.accept });

  const onMinAmount = (e, data) => {
    setMinPercent(data.value);
    setLoan((l) => ({ ...l, minAmount: calculateMinAmount(l.amount, data.value) }));
  }

  const onInterestChange = value => onSetMIR(parseFloat(value));

  const onSave = async () => {
    const deploy = await loanDispatcher.deploy(
      loan.minAmount,
      loan.amount,
      loan.mir,
      loan.term
    );

    //WAIT FOR CONFIRMATION UI
    console.log(deploy);
  };

  const onBlur = e => {
    const currentValue = loan.amount;
    console.log(currentValue)
    setAmountValidation({
      error: currentValue < min || currentValue > max,
      msg: `Can not be ${
        currentValue < min ? `less than ${min} DAI` : `more than ${max} DAI`
      }`
    });
  };

  useEffect(() => {
    const { amount: currentAmount, term, mir } = loan;
    if (currentAmount && mir && term) {
      setAPR((((currentAmount * mir * term) / currentAmount) * 12) / term);
    }
  }, [loan]);

  return (
    <BloodWrapper>
      <BloodCardMain>
        <BloodWrapper className="content">
          <BloodCardContent>
            <Header as="h2">How much would you like to borrow?</Header>
            <p>
              Please enter the amount you would like to borrow.
            </p>
          </BloodCardContent>
          <BloodCardFloat>
            <LoanInputBox>
              <LoanInput
                value={loan.amount}
                onValueChange={onSetAmount}
                onBlur={onBlur}
                fmt={numeralFormat}
              />
              <DAILogo>
                <Icon name="ethereum" size="large" />
              </DAILogo>
              <LoanInputLabel>
                {amountValidation.error ? (
                  <InputError>{amountValidation.msg}</InputError>
                ) : `${formattedAmount} EUR*`
                }
                <p>* Based on current exchange rate</p>
              </LoanInputLabel>
            </LoanInputBox>
          </BloodCardFloat>
        </BloodWrapper>
        <BloodWrapper className="content">
          <BloodCardContent>
            <Header as="h3">
              Would you accept a lower amount than the requested?
            </Header>
            <p>
              In some cases, loan auctions don't achieve the target amount for
              different reasons
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
          </BloodCardContent>
          <BloodCardFloat>
            <LoanCheckbox
              toggle
              label={loan.accept ? 'YES' : 'NO'}
              onChange={onToggleAccept}
            />
          </BloodCardFloat>
        </BloodWrapper>
        <Divider />
        <BloodWrapper className="content">
          <BloodCardContent>
            <Header as="h2">Loan term</Header>
            <p>
              The loan term will start after the loan auction is finished. This
              process could take from a few days up to 30 days. You will be able
              to check the auction progress from your dashboard.
            </p>
          </BloodCardContent>
          <BloodCardFloat>
            <LoanSelect
              value={loan.term}
              onChange={onSetTerm}
              placeholder="Select term"
              options={months}
            />
          </BloodCardFloat>
        </BloodWrapper>
        <Divider />
        <BloodWrapper className="content">
          <BloodCardContent>
            <Header as="h2">Monthly interest rate *</Header>
            <p>
              Select the maximun interest rate you would accept for your loan.
            </p>
            <Slider defaultValue={loan.mir} onChange={onInterestChange} min={minMir} marks={marks} max={maxMir} />
          </BloodCardContent>
          <BloodCardFloat>
            <InterestCard>
              <span>
                {loan.mir}% MIR* ({APR.toFixed(2)}% APR)
              </span>
            </InterestCard>
          </BloodCardFloat>
          <SideInfo>* MIR : Monthly simple interest rate</SideInfo>
        </BloodWrapper>
      </BloodCardMain>
      <LoanForm>
        <LoanFormInfo>Loan amount</LoanFormInfo>
        <LoanFormValue>{formattedAmount} DAI</LoanFormValue>
          
        <LoanFormInfo>System fees (1%)</LoanFormInfo>
        <LoanFormValue>-{systemFees} DAI</LoanFormValue>

        <LoanFormInfo>Net loan proceeds</LoanFormInfo>
        <LoanFormValue big>{netLoan} DAI</LoanFormValue>

        <Divider />
          
        <LoanFormInfo>Principal</LoanFormInfo>
        <LoanFormValue>{formattedAmount} DAI</LoanFormValue>

        <LoanFormInfo>Interest</LoanFormInfo>
        <LoanFormValue>{totalInterest} DAI</LoanFormValue>

        <LoanFormInfo>Total repayment amount</LoanFormInfo>
        <LoanFormValue big>{repaymentAmount} DAI</LoanFormValue>

        <ConfirmButton
          onClick={onSave}
          disabled={
            amountValidation.error ||
            loan.term === 0 ||
            loan.mir === 0 ||
            numberAmount === 0
          }
        >
          Confirm
        </ConfirmButton>
      </LoanForm>
    </BloodWrapper>
  );
};

export default CreateLoan;
