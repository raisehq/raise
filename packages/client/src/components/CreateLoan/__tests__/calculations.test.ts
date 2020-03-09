import {
  calculateAPRFromMIR,
  calculateMIRFromAPR,
  formatAmount,
  calculateNetLoan,
  calculateRepaymentAmount,
  calculateTermFromSecondsToMonths,
  calculateSystemFees,
  calculateMinAmount,
  calculateTotalInterest
} from '../calculations';

test('Calculate APR from MIR ', () => {
  const amount = 20.54;
  const result = formatAmount(amount);
  expect(result).toBe('20,54');
});

test('Format amount to string', () => {
  const mir = 15;
  const result = calculateAPRFromMIR(mir);
  expect(result).toBe(180);
});

test('Calculate Net Loan ', () => {
  const numberAmount = 10.0;
  const result = calculateNetLoan(numberAmount);
  expect(result).toBe('9,90');
});

test('Calculate Repayment Amount ', () => {
  const numberAmount = 10.0;
  const loanMaxMir = 1.6666666666666667;
  const loanTerm = 2592000;
  const loanTermInMonths = calculateTermFromSecondsToMonths(loanTerm);

  const result = calculateRepaymentAmount(numberAmount, loanMaxMir, loanTermInMonths);
  expect(result).toBe('10,17');
});

test('Convert Term from seconds to  months', () => {
  const loanTerm = 2592000;
  const result = calculateTermFromSecondsToMonths(loanTerm);
  expect(result).toBe(1);
});

test('Calculate System fees ', () => {
  const numberAmount = 10.0;
  const operatorFees = 1;
  const result = calculateSystemFees(numberAmount)(operatorFees);
  expect(result).toBe('0,10');
});

test('Calculate APR from MIR ', () => {
  const apr = 12;
  const result = calculateMIRFromAPR(apr);
  expect(result).toBe(1);
});

test('Calculate min amount ', () => {
  const value = 10000;
  const percent = 20;

  const result = calculateMinAmount(value, percent);
  expect(result).toBe(8000);
});

test('Calculate total interest ', () => {
  const numberAmount = 10.0;
  const loanMaxMir = 1.6666666666666667;
  const loanTerm = 2592000;
  const loanTermInMonths = calculateTermFromSecondsToMonths(loanTerm);

  const result = calculateTotalInterest(numberAmount, loanMaxMir, loanTermInMonths);
  expect(result).toBe('0,17');
});
