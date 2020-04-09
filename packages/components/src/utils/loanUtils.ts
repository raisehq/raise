import { match, ANY } from 'pampy';
import { fromWei } from 'web3-utils';
import BN from 'bn.js';
import cloneDeep from 'lodash/cloneDeep';
import { LoanState } from '../commons/loanStatus';
import numeral, { numeralFormat } from '../commons/numeral';

const secondUnits = {
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60,
};
const stringUnixToDate = (stringUnix: string) =>
  new Date(Number(stringUnix) * 1000);

export const isAuctionExpired = ({
  auctionEndTimestamp,
}: {
  auctionEndTimestamp: string;
}) => new Date() > stringUnixToDate(auctionEndTimestamp);

export const isDefaulted = ({
  auctionEndTimestamp,
  termEndTimestamp,
}: {
  auctionEndTimestamp: string;
  termEndTimestamp: string;
}) => {
  if (
    new Date() <= stringUnixToDate(auctionEndTimestamp) ||
    new Date() <= stringUnixToDate(termEndTimestamp)
  ) {
    return false;
  }
  return true;
};

// this function mimics "updateStateMachine" method from LoanContract.sol:391
export const assumeStateMachine = (auction: any) => {
  const { state: currentState, minimumReached } = auction;
  const clonedAuction = cloneDeep(auction);
  if (isAuctionExpired(auction) && currentState === LoanState.CREATED) {
    if (!minimumReached) {
      clonedAuction.state = LoanState.FAILED_TO_FUND;
    } else {
      clonedAuction.state = LoanState.ACTIVE;
    }
  }
  if (isDefaulted(auction) && clonedAuction.state === LoanState.ACTIVE) {
    clonedAuction.state = LoanState.DEFAULTED;
  }

  return clonedAuction;
};

export const roundedTime = (seconds: number, secondUnit: number) =>
  Math.round(seconds / secondUnit);

export const getDesiredTime = (seconds: number, type?: string) =>
  match(
    seconds,
    (s: number) => s >= secondUnits.day,
    (s: number) => `${roundedTime(s, secondUnits.day)} days`,
    (s: number) => s >= secondUnits.hour,
    (s: number) => `${roundedTime(s, secondUnits.hour)} hours`,
    (s: number) => s >= secondUnits.minute,
    (s: number) => `${roundedTime(s, secondUnits.minute)} minutes`,
    (s: number) => s > 0 && s < secondUnits.minute,
    () => '<1 minute',
    ANY,
    () => (type === 'loan' ? 'Expired' : 'Auction ended')
  );

const defaultZero = numeral(0).format();

export const calculateFromWei = (number: BN) => {
  const calc = number
    ? numeral(Number(fromWei(number.toString(), 'ether'))).format(numeralFormat)
    : defaultZero;
  return calc;
};

export const calculateTimes = (auction: any) => {
  try {
    const loanTerm = getDesiredTime(Number(auction.termLength));

    const today = new Date().getTime() / 1000;
    const auctionTimeLeft = getDesiredTime(
      Number(auction.auctionEndTimestamp) - today
    );
    const loanTermLeft = getDesiredTime(
      Number(auction.termEndTimestamp) - today,
      'loan'
    );
    return { loanTerm, auctionTimeLeft, loanTermLeft };
  } catch (error) {
    console.error('[LOANUTILS][CalculateFromWei]', error);
    return error;
  }
};

export const calculateInterest = (auction: any) => {
  const nowTimestamp = Date.now() / 1000;
  const maxInterestRate =
    Number(fromWei(auction.maxInterestRate.toString())) / 100;
  const minInterestRate = auction.minInterestRate
    ? Number(fromWei(auction.minInterestRate.toString())) / 100
    : 0;

  let interest = 0;
  if (auction.state === LoanState.CREATED && !isAuctionExpired(auction)) {
    interest =
      (maxInterestRate - minInterestRate) *
        ((nowTimestamp - auction.auctionStartTimestamp) /
          (auction.auctionEndTimestamp - auction.auctionStartTimestamp)) +
      minInterestRate;
  } else if (
    auction.state === LoanState.ACTIVE ||
    auction.state === LoanState.REPAID
  ) {
    interest = maxInterestRate;
  } else {
    interest = maxInterestRate;
  }

  return interest;
};

export const calculateROI = (auction: any) => {
  const roi =
    (Number(fromWei(auction.interestRate.toString())) *
      (auction.termLength / 30 / 24 / 60 / 60)) /
    100;
  return roi;
};

export const calculateExpectedRoi = (auction: any, interest: number) => {
  const roi = interest * (auction.termLength / 30 / 24 / 60 / 60);
  return roi;
};

export const calculateTotalInterest = (auction: any) => {
  const interest =
    Number(fromWei(auction.interestRate.toString())) *
    (auction.termLength / 30 / 24 / 60 / 60 / 100);
  return interest;
};

export const calculateTotalInterestAmount = (auction: any) => {
  const interest =
    Number(fromWei(auction.interestRate.toString())) *
    (auction.termLength / 30 / 24 / 60 / 60 / 100);
  const principal = Number(fromWei(auction.principal));
  return principal * interest;
};

export const calculateAPR = (auction: any) => {
  const interest = Number(fromWei(auction.interestRate.toString())) / 100;
  const apr = interest * 12;
  return apr;
};

export const calculateInvestmentReturn = (auction: any) => {
  const lenderAmount = Number(fromWei(auction.lenderAmount));
  const lenderRoiAmount = lenderAmount + lenderAmount * calculateROI(auction);
  return lenderRoiAmount;
};

export const getCalculations = (auction: any) => {
  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const maxAmountNum = Number(fromWei(auction.maxAmount));
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const operatorFeeNum = Number(fromWei(auction.operatorFee.toString())) / 100;
  const principal: any = calculateFromWei(auction.principal);
  const borrowerDebt: any = Number(
    fromWei(auction.borrowerDebt)
  ).toLocaleString('es-ES');
  const maxSystemFees: any = numeral(maxAmountNum * operatorFeeNum).format();
  const systemFees: any = `-${numeral(
    Number(fromWei(auction.principal)) * operatorFeeNum
  ).format()}`;

  let netBalance = calculateFromWei(auction.netBalance);
  if (auction.netBalance) {
    netBalance = numeral(
      Number(fromWei(auction.netBalance.toString()))
    ).format();
  }

  const calculatedInterest = calculateInterest(auction);
  const expectedROI =
    calculatedInterest * (Number(auction.termLength) / 2628000);
  const interest = numeral(calculatedInterest).format('0.00%');
  const currentAPR = numeral(calculatedInterest * 12).format('0.00%');
  const currentAmount = numeral(principal).value();
  const totalAmount = numeral(maxAmount).value();
  const maxAPR = numeral(
    (Number(fromWei(auction.maxInterestRate.toString())) / 100) * 12
  ).format('0.00%');
  const expectedRoiFormated = numeral(expectedROI).format('0.00%');

  let lenderAmount;
  let lenderRoiAmount;
  let roi;
  let finalAPR;
  let totalInterest;
  let totalInterestAmount;
  if (auction.interestRate) {
    finalAPR = numeral(calculateAPR(auction)).format('0.00%');
    roi = numeral(calculateROI(auction)).format('0.00%');
    totalInterest = numeral(calculateTotalInterest(auction)).format('0.00%');
    totalInterestAmount = numeral(
      calculateTotalInterestAmount(auction)
    ).format();
  }
  if (auction.lenderAmount) {
    lenderAmount = numeral(Number(fromWei(auction.lenderAmount))).format();
    const lenderRoiAmountCalc = calculateInvestmentReturn(auction);
    lenderRoiAmount = numeral(lenderRoiAmountCalc).format();
  }

  const { loanTerm, auctionTimeLeft, loanTermLeft } = calculateTimes(auction);

  const newCalcs = {
    times: { loanTerm, auctionTimeLeft, loanTermLeft },
    borrowerDebt,
    interest,
    maxAmount,
    netBalance,
    operatorFee,
    principal,
    systemFees,
    maxSystemFees,
    currentAmount,
    totalAmount,
    maxAPR,
    roi,
    totalInterest,
    totalInterestAmount,
    currentAPR,
    finalAPR,
    calculatedInterest,
    expectedROI,
    lenderAmount,
    lenderRoiAmount,
    expectedRoiFormated,
  };

  return newCalcs;
};

export const getActiveAuctions = (auctions: any[], states: any[]) => {
  const updatedAuctions = auctions
    ? auctions.map(auction => assumeStateMachine(auction))
    : [];

  const getStates = (auction: any) =>
    states.some(st => st === auction.state) || states.indexOf('all') > -1;

  const activeAuctions = updatedAuctions
    ? updatedAuctions.filter(getStates)
    : [];
  return activeAuctions;
};
