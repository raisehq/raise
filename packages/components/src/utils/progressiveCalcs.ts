import dayjs from 'dayjs';
import numeral, { numeralFormat } from '../commons/numeral';
import { fromDecimal } from './web3-utils';
import { calculatefromDecimal } from './loanUtils';
import { RepaymentState, LoanLenderView, GraphLoan } from '../commons/graphTypes';

// internal
/*
 * Formula to calculate in which instalment is the loan in this point in time:
 * First we need to calculate the length of every instalment.
 * then we calculate the amount of thime passed between the start of the term and the
 * current point in time we devide it by the length of the instalment, and we add 1
 * because the instalment end time is also included in the instalment
 */
const getCurrentInstalment = (loan, dateTimestamp) => {
  const instalmentLength =
    (Number(loan.termEndTimestamp) - Number(loan.auctionEndTimestamp)) / Number(loan.instalments);
  const currentInstalmentNumber =
    (dateTimestamp - Number(loan.auctionEndTimestamp)) / instalmentLength;
  return Math.min(loan.instalments, Math.ceil(currentInstalmentNumber));
};

const getInstalmentAmount = (loan, decimals = 18) => {
  // For a loan of principal P, monthly interest rate I and term N (months),
  // the monthly payment is P*(1/N + I).
  const instalmentLengthProportion =
    (Number(loan.termEndTimestamp) - Number(loan.auctionEndTimestamp)) /
    Number(loan.instalments) /
    2592000;
  const decimalPrincipal = Number(fromDecimal(loan.principal.toString(), decimals));
  const decimalInterestRate = Number(fromDecimal(loan.interestRate.toString())) / 100;
  const instalmentAmount =
    decimalPrincipal *
    (1 / Number(loan.instalments) + decimalInterestRate * instalmentLengthProportion);
  return instalmentAmount;
};

const getPendingInstalmentsAmount = (loan, decimals, date) => {
  if (loan.instalments === loan.instalmentsPaid) {
    return 0;
  }
  const currentInstalment = getCurrentInstalment(loan, date);
  const instalmentsToPay = currentInstalment - Number(loan.instalmentsPaid);
  const totalInstalmentAmount = getInstalmentAmount(loan, decimals) * instalmentsToPay;

  return totalInstalmentAmount;
};

const getInstalmentPenalty = (loan, decimals = 18) => {
  const instalmentLengthProportion =
    (Number(loan.termEndTimestamp) - Number(loan.auctionEndTimestamp)) /
    Number(loan.instalments) /
    2592000;
  // principal * interest rate % * 2
  const interestRate =
    (Number(fromDecimal(loan.interestRate.toString())) / 100) * instalmentLengthProportion;
  const penalty = Number(fromDecimal(loan.principal.toString(), decimals)) * interestRate;
  return penalty;
};

const getInstalmentDates = (loan): number[] => {
  const instalmentLength = Number(loan.termLength) / Number(loan.instalments);
  const instalmentDates: number[] = [];
  for (let i = 1; i <= loan.instalments; i += 1) {
    const instalmentDate = Number(loan.auctionEndTimestamp) + instalmentLength * i;
    instalmentDates.push(instalmentDate);
  }

  return instalmentDates;
};

const getStateByDate = (funding, date) => {
  const instalment = getCurrentInstalment(funding.loan, date);
  const currentDate = Date.now() / 1000;
  const currentInstalment = getCurrentInstalment(funding.loan, currentDate);
  const lastInstalmentWithdrawn = getCurrentInstalment(funding.loan, funding.debtWithdrawnDate);
  if (instalment === currentInstalment) {
    return 'Not paid';
  }
  if (instalment > currentInstalment) {
    return 'Waiting';
  }
  if (instalment > lastInstalmentWithdrawn) {
    return 'Paid';
  }

  return 'Withdrawed';
};

const getRepayStateByDate = (
  loan: Partial<GraphLoan>,
  lenderInstalment: number,
  instalmentDate
): RepaymentState => {
  const instalment = getCurrentInstalment(loan, instalmentDate);
  const currentInstalment = getCurrentInstalment(loan, dayjs().unix());
  const instalmentsPaid = loan?.instalmentsPaid || 0;
  if (instalment > currentInstalment) {
    return RepaymentState.Waiting;
  }
  if (instalment <= lenderInstalment) {
    return RepaymentState.Withdrawed;
  }
  if (instalment <= instalmentsPaid) {
    return RepaymentState.Paid;
  }
  return RepaymentState.Unpaid;
};

const scheduleMapper = (loan: Partial<GraphLoan>, lenderInstalment: number) => (
  instalmentDate: number
): RepaySchedule => ({
  date: dayjs.unix(instalmentDate).format('DD MMM YYYY'),
  state: getRepayStateByDate(loan, lenderInstalment, instalmentDate)
});

const getCurrentPenalty = (loan, date, decimals) => {
  const currentInstalment = getCurrentInstalment(loan, date);
  const instalmentsToPay = currentInstalment - Number(loan.instalmentsPaid);
  const penaltiesToPay = Math.max(0, instalmentsToPay - 1);
  const totalPenaltyAmount = getInstalmentPenalty(loan, decimals) * penaltiesToPay;

  return totalPenaltyAmount;
};

const getCurrentDebt = (loan, decimals, date) => {
  if (loan.instalments === loan.instalmentsPaid) {
    return 0;
  }
  const totalPenaltyAmount = getCurrentPenalty(loan, date, decimals);
  const totalInstalmentAmount = getPendingInstalmentsAmount(loan, decimals, date);
  const currentDebt = totalPenaltyAmount + totalInstalmentAmount;

  return currentDebt;
};

// returns current state of loan. with state of every instalment.
// what instalments are remaining, expired, paid, penalties, etc
// total amounts: total debdt, debt + total penalties, etc
const getProgressiveState = (funding, decimals, date) => {
  const currentTotalDebt = getCurrentDebt(funding.loan, decimals, date);

  const instalmentDates = getInstalmentDates(funding.loan);
  const instalments = instalmentDates.map((idate) => {
    const state = getStateByDate(funding, idate);

    return {
      date: idate,
      state
    };
  });

  const currentDate = Date.now();
  const currentInstalment = getCurrentInstalment(funding.loan, currentDate);
  const nextInstalment = instalmentDates[currentInstalment];

  return {
    instalments,
    nextInstalment,
    currentTotalDebt
  };
};

export interface RepayInfo {
  schedules: RepaySchedule[];
  lenderBalance: string;
  instalmentAmount: string;
  nextInstalment: string;
  currentDebtView: string;
  currentDebt: number;
  paidInTime: boolean;
}

export interface RepaySchedule {
  date: string;
  state: RepaymentState;
}

export const getNextInstalment = (loan, currentDate): number => {
  const dates = getInstalmentDates(loan);
  const target = currentDate;
  return dates.reduce((prev: number, curr: number) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  );
};

const calculateInstalments = (
  loan: Partial<LoanLenderView>,
  decimals = 18,
  currentDate: number // unix
): RepayInfo => {
  const nextInstalmentNumber = getCurrentInstalment(loan, currentDate);
  const instalmentDates = getInstalmentDates(loan);
  const nextRawInstalmentUnix = instalmentDates[nextInstalmentNumber - 1];
  const nextInstalment =
    loan.instalments === loan.instalmentsPaid
      ? 'Paid'
      : dayjs.unix(nextRawInstalmentUnix).format('DD MMM YYYY');
  const lenderBalance = calculatefromDecimal(loan.lenderBalance, decimals);
  const instalmentAmount = calculatefromDecimal(loan.instalmentAmount, decimals);
  const schedules = instalmentDates.map(scheduleMapper(loan, loan.lenderInstalment || 0));
  const currentDebt = getCurrentDebt(loan, decimals, currentDate);
  const paidInTime =
    Math.floor(currentDebt) <=
    Math.floor(Number(fromDecimal(loan?.instalmentAmount || '0', decimals)));
  const currentDebtView = numeral(currentDebt).format(numeralFormat);

  return {
    nextInstalment,
    lenderBalance,
    instalmentAmount,
    schedules,
    currentDebtView,
    currentDebt,
    paidInTime
  };
};

export {
  getCurrentInstalment,
  getInstalmentAmount,
  getInstalmentPenalty,
  getCurrentDebt,
  getCurrentPenalty,
  getProgressiveState,
  getPendingInstalmentsAmount,
  getInstalmentDates,
  getStateByDate,
  getRepayStateByDate,
  calculateInstalments
};
