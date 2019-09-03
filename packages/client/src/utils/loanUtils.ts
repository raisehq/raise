import { match, ANY } from 'pampy';
import { fromWei } from 'web3-utils';
import cloneDeep from 'lodash/cloneDeep';
import { LoanState } from '../commons/loanStatus';
import numeral, { numeralFormat } from '../commons/numeral';

const secondUnits = {
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};
const stringUnixToDate = stringUnix => new Date(Number(stringUnix) * 1000);

export const isAuctionExpired = ({ auctionEndTimestamp }) =>
  new Date() > stringUnixToDate(auctionEndTimestamp);

export const isDefaulted = ({ auctionEndTimestamp, termEndTimestamp }) => {
  if (
    new Date() <= stringUnixToDate(auctionEndTimestamp) ||
    new Date() <= stringUnixToDate(termEndTimestamp)
  ) {
    return false;
  }
  return true;
};

// this function mimics "updateStateMachine" method from LoanContract.sol:391
export const assumeStateMachine = auction => {
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

export const roundedTime = (seconds, secondUnit) => Math.round(seconds / secondUnit);

export const getDesiredTime = (seconds, type?) =>
  match(
    seconds,
    s => s >= secondUnits.month,
    s => `${roundedTime(s, secondUnits.month)} months`,
    s => s >= secondUnits.day,
    s => `${roundedTime(s, secondUnits.day)} days`,
    s => s >= secondUnits.hour,
    s => `${roundedTime(s, secondUnits.hour)} hours`,
    s => s >= secondUnits.minute,
    s => `${roundedTime(s, secondUnits.minute)} minutes`,
    s => s > 0 && s < secondUnits.minute,
    () => '<1 minute',
    ANY,
    () => (type === 'loan' ? 'Expired' : 'Auction ended')
  );

const defaultZero = numeral(0).format();

export const calculateFromWei = number =>
  number ? numeral(fromWei(number.toString(), 'ether')).format(numeralFormat) : defaultZero;

export const calculateTimes = auction => {
  try {
    const loanTerm = getDesiredTime(Number(auction.termLength));

    const today = new Date().getTime() / 1000;
    const auctionTimeLeft = getDesiredTime(Number(auction.auctionEndTimestamp) - today);
    const loanTermLeft = getDesiredTime(Number(auction.termEndTimestamp) - today, 'loan');
    return { loanTerm, auctionTimeLeft, loanTermLeft };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const calculateAPR = auction => {
  const nowTimestamp = Date.now() / 1000;
  let interest = 0;
  if (auction.state === LoanState.CREATED && !isAuctionExpired(auction)) {
    interest =
      (Number(auction.maxInterestRate) / 10000) *
      ((nowTimestamp - auction.auctionStartTimestamp) /
        (auction.auctionEndTimestamp - auction.auctionStartTimestamp));
  } else if (auction.state === LoanState.ACTIVE || auction.state === LoanState.REPAID) {
    interest = Number(auction.maxInterestRate) / 10000;
  } else {
    interest = Number(auction.maxInterestRate) / 10000;
  }

  return interest * 12;
};

export const getCalculations = auction => {
  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const netBalance: any = calculateFromWei(auction.netBalance);
  const borrowerDebt: any = calculateFromWei(auction.borrowerDebt);
  const maxSystemFees: any = numeral((maxAmount * operatorFee) / 100).format();
  const systemFees: any = calculateFromWei(`-${auction.operatorBalance}`);

  const apr = calculateAPR(auction);
  const interest: any = numeral(Number(apr) / 10).format('0.00%');

  const currentAmount = numeral(principal).value();
  const totalAmount = numeral(maxAmount).value();
  const maxAPR = numeral((Number(auction.maxInterestRate) / 100000) * 12).format('0.00%');

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
    maxAPR
  };

  return newCalcs;
};

export const getActiveAuctions = (auctions, states) => {
  const updatedAuctions = auctions.map(auction => assumeStateMachine(auction));
  const activeAuctions = updatedAuctions
    ? updatedAuctions.filter(
        auction => states.some(st => st === auction.state) || states.indexOf('all') > -1
      )
    : [];
  return activeAuctions;
};
