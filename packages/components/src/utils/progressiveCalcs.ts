import dayjs from 'dayjs';
import { fromDecimal } from './web3-utils';
import { calculatefromDecimal } from './loanUtils';
import { RepaymentState, LoanLenderView } from '../commons/graphTypes';

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
    (loan.termEndTimestamp - loan.auctionEndTimestamp) / loan.instalments;
  const currentInstalmentNumber =
    (dateTimestamp - loan.auctionEndTimestamp) / instalmentLength + 1;
  return Math.floor(currentInstalmentNumber);
};

const getInstalmentAmount = (loan, decimals = 18) => {
  // For a loan of principal P, monthly interest rate I and term N (months),
  // the monthly payment is P*(1/N + I).
  const decimalPrincipal = Number(
    fromDecimal(loan.principal.toString(), decimals)
  );
  // TODO: do we need to / 100??
  const decimalInterestRate = Number(fromDecimal(loan.interestRate.toString()));
  const instalmentAmount =
    decimalPrincipal * (1 / loan.instalments + decimalInterestRate);

  return instalmentAmount;
};

const getPendingInstalmentsAmount = (loan, decimals, date) => {
  const currentInstalment = getCurrentInstalment(loan, date);
  const instalmentsToPay = currentInstalment - loan.instalmentsPaid;
  const totalInstalmentAmount =
    getInstalmentAmount(loan, decimals) * instalmentsToPay;

  return totalInstalmentAmount;
};

const getInstalmentPenalty = (loan, decimals = 18) => {
  // interest rate * 2
  const interestRate = Number(fromDecimal(loan.interestRate.toString()));
  const apliedInterest =
    Number(fromDecimal(loan.principal.toString(), decimals)) * interestRate;
  const penalty = apliedInterest;
  return penalty;
};

const getInstalmentDates = (loan): number[] => {
  const instalmentLength = Number(loan.termLength) / Number(loan.instalments);
  const instalmentDates: number[] = [];
  for (let i = 1; i <= loan.instalments; i += 1) {
    const instalmentDate =
      Number(loan.auctionEndTimestamp) + instalmentLength * i;
    instalmentDates.push(instalmentDate);
  }

  return instalmentDates;
};

const getStateByDate = (funding, date) => {
  const instalment = getCurrentInstalment(funding.loan, date);
  const currentDate = Date.now() / 1000;
  const currentInstalment = getCurrentInstalment(funding.loan, currentDate);
  const lastInstalmentWithdrawn = getCurrentInstalment(
    funding.loan,
    funding.debtWithdrawnDate
  );
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

// external
const getCurrentPenalty = (loan, date, decimals) => {
  const currentInstalment = getCurrentInstalment(loan, date);
  const instalmentsToPay = currentInstalment - loan.instalmentsPaid;
  const penaltiesToPay = instalmentsToPay - 1;
  const totalPenaltyAmount =
    getInstalmentPenalty(loan, decimals) * penaltiesToPay;

  return totalPenaltyAmount;
};

const getCurrentDebt = (loan, decimals, date) => {
  const totalPenaltyAmount = getCurrentPenalty(loan, date, decimals);
  const totalInstalmentAmount = getPendingInstalmentsAmount(
    loan,
    decimals,
    date
  );
  const currentDebt = totalPenaltyAmount + totalInstalmentAmount;

  return currentDebt;
};

// returns current state of loan. with state of every instalment.
// what instalments are remaining, expired, paid, penalties, etc
// total amounts: total debdt, debt + total penalties, etc
const getProgressiveState = (funding, decimals, date) => {
  const currentTotalDebt = getCurrentDebt(funding.loan, decimals, date);

  const instalmentDates = getInstalmentDates(funding.loan);
  const instalments = instalmentDates.map(idate => {
    const state = getStateByDate(funding, idate);

    return {
      date: idate,
      state,
    };
  });

  const currentDate = Date.now();
  const currentInstalment = getCurrentInstalment(funding.loan, currentDate);

  const nextInstalment = instalmentDates[currentInstalment];

  return {
    instalments,
    nextInstalment,
    currentTotalDebt,
  };
};

const getNextInstalment = (loan, currentDate): number => {
  const dates = getInstalmentDates(loan);
  const target = currentDate;
  return dates.reduce((prev: number, curr: number) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  );
};

export interface RepayInfo {
  schedules: RepaySchedule[];
  lenderBalance: string;
  lenderInstalment: string;
  nextInstalment: string;
}

export interface RepaySchedule {
  date: string;
  state: RepaymentState;
}

const calculateInstalments = (
  loan: Partial<LoanLenderView>,
  decimals = 18,
  currentDate: number // unix
): RepayInfo => {
  const nextInstalmentNumber = getNextInstalment(loan, currentDate);
  const nextInstalment = dayjs.unix(nextInstalmentNumber).format('D MMM YYYY');
  const lenderBalance = calculatefromDecimal(loan.lenderBalance, decimals);
  const lenderInstalment = calculatefromDecimal(
    loan.lenderInstalment,
    decimals
  );
  const schedules = getInstalmentDates(loan).map(value => ({
    date: dayjs.unix(value).format('D MMM YYYY'),
    state: 0,
  }));
  return { nextInstalment, lenderBalance, lenderInstalment, schedules };
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
  getNextInstalment,
  calculateInstalments,
};
