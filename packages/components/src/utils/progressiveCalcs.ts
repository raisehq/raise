import { fromDecimal } from './web3-utils';

// internal
/*
 * Formula to calculate in which instalment is the loan in this point in time:
 * First we need to calculate the length of every instalment.
 * then we calculate the amount of thime passed between the start of the term and the current point in time
 * we devide it by the length of the instalment, and we add 1 because the instalment end time is also included in the instalment
 */
const getCurrentInstalment = (loan, dateTimestamp) => {
  const instalmentLength =
    (loan.termEndTimestamp - loan.auctionEndTimestamp) / loan.instalments;
  const currentInstalmentNumber =
    (dateTimestamp - loan.auctionEndTimestamp) / instalmentLength + 1;
  return Math.floor(currentInstalmentNumber);
};

const getInstalmentAmount = (loan, decimals = 18) => {
  // For a loan of principal P, monthly interest rate I and term N (months), the monthly payment is P*(1/N + I).
  const decimalPrincipal = Number(
    fromDecimal(loan.principal.toString(), decimals)
  );
  const decimalInterestRate = Number(fromDecimal(loan.interestRate.toString())); // TODO: do we need to / 100??
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

const getInstalmentPenalty = loan => {
  // interest rate * 2
  const penalty = Number(fromDecimal(loan.interestRate.toString())) * 2;
  return penalty;
};

const getInstalmentDates = loan => {
  const instalmentLength = loan.termLength / loan.instalments;
  const instalmentDates: Array<String> = [];
  for (let i = 1; i <= 4; i += 1) {
    const instalmentDate = loan.auctionEndTimestamp + instalmentLength * i;
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
  } else if (instalment > currentInstalment) {
    return 'Waiting';
  } else if (instalment > lastInstalmentWithdrawn) {
    return 'Paid';
  } else {
    return 'Withdrawed';
  }
};

// external
const getCurrentPenalty = (loan, date) => {
  const currentInstalment = getCurrentInstalment(loan, date);
  const instalmentsToPay = currentInstalment - loan.instalmentsPaid;
  const penaltiesToPay = instalmentsToPay - 1;
  const totalPenaltyAmount = getInstalmentPenalty(loan) * penaltiesToPay;

  return totalPenaltyAmount;
};

const getCurrentDebt = (loan, decimals, date) => {
  const totalPenaltyAmount = getCurrentPenalty(loan, date);
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
  const instalments = instalmentDates.map(date => {
    const state = getStateByDate(funding, date);

    return {
      date,
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
};
