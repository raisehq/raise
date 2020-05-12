import { match, ANY } from 'pampy';
import cloneDeep from 'lodash/cloneDeep';
import { fromDecimal } from './web3-utils';
import { LoanState } from '../commons/loanStatus';
import numeral, { numeralFormat } from '../commons/numeral';
import { CoinsType } from '../commons/coins';

const secondUnits = {
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60,
};

const stringUnixToDate = (stringUnix) => new Date(Number(stringUnix) * 1000);

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
export const assumeStateMachine = (auction) => {
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

export const roundedTime = (seconds, secondUnit) =>
  Math.round(seconds / secondUnit);

export const getDesiredTime = (seconds, type?) =>
  match(
    seconds,
    (s) => s >= secondUnits.day,
    (s) => `${roundedTime(s, secondUnits.day)} days`,
    (s) => s >= secondUnits.hour,
    (s) => `${roundedTime(s, secondUnits.hour)} hours`,
    (s) => s >= secondUnits.minute,
    (s) => `${roundedTime(s, secondUnits.minute)} minutes`,
    (s) => s > 0 && s < secondUnits.minute,
    () => '<1 minute',
    ANY,
    () => (type === 'loan' ? 'Expired' : 'Auction ended')
  );

const defaultZero = numeral(0).format();

/* eslint-disable */
export const calculatefromDecimal = (number, decimals = 18) => {
  const calc = number
    ? numeral(Number(fromDecimal(number.toString(), decimals))).format(
        numeralFormat
      )
    : defaultZero;
  return calc;
};
/* eslint-enable */

export const calculateTimes = (auction) => {
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
    console.error('[LOANUTILS][CalculatefromDecimal]', error);
    return error;
  }
};

export const calculateInterest = (auction) => {
  const nowTimestamp = Date.now() / 1000;
  const maxInterestRate =
    Number(fromDecimal(auction.maxInterestRate.toString())) / 100;
  const minInterestRate = auction.minInterestRate
    ? Number(fromDecimal(auction.minInterestRate.toString())) / 100
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

export const calculateROI = (auction) => {
  const roi =
    (Number(fromDecimal(auction.interestRate.toString())) *
      (auction.termLength / 30 / 24 / 60 / 60)) /
    100;
  return roi;
};

export const calculateExpectedRoi = (auction, interest) => {
  const roi = interest * (auction.termLength / 30 / 24 / 60 / 60);
  return roi;
};

export const calculateTotalInterest = (auction) => {
  const interest =
    Number(fromDecimal(auction.interestRate.toString())) *
    (auction.termLength / 30 / 24 / 60 / 60 / 100);
  return interest;
};

export const calculateTotalInterestAmount = (auction) => {
  const interest =
    Number(fromDecimal(auction.interestRate.toString())) *
    (auction.termLength / 30 / 24 / 60 / 60 / 100);
  const principal = Number(fromDecimal(auction.principal));
  return principal * interest;
};

export const calculateAPR = (auction) => {
  const interest = Number(fromDecimal(auction.interestRate.toString())) / 100;
  const apr = interest * 12;
  return apr;
};

export const calculateInvestmentReturn = (auction, decimals = 18) => {
  const lenderAmount = Number(fromDecimal(auction.lenderAmount, decimals));
  const lenderRoiAmount = lenderAmount + lenderAmount * calculateROI(auction);
  return lenderRoiAmount;
};
/* eslint-disable */
export const getCoinsFromContract = (coinsMap) => (contract) => {
  const coins: CoinsType[] =
    contract &&
    coinsMap.map((coin) =>
      contract[coin.name]
        ? {
            address: contract[coin.name],
            text: coin.name,
            value: coin.name,
            key: coin.key,
            icon: coin.icon,
            decimals: coin.decimals,
          }
        : null
    );

  return coins;
};
/* eslint-enable */

export const getCoin = (coins: CoinsType[]) => (
  tokenAddress: string
): CoinsType => {
  const defaultCoin = {
    address: '',
    text: '',
    value: '',
    key: '',
    icon: '',
    decimals: 18,
  };
  if (!coins || !coins.length || !tokenAddress) {
    return defaultCoin;
  }
  return (
    coins.find(
      (coin) => coin.address.toLowerCase() === tokenAddress.toLowerCase()
    ) || defaultCoin
  );
};

export const getCalculations = (auction, decimals = 18) => {
  const maxAmount: any = calculatefromDecimal(auction.maxAmount, decimals);
  const maxAmountNum = Number(fromDecimal(auction.maxAmount, decimals));
  const operatorFee: any = calculatefromDecimal(auction.operatorFee);
  const operatorFeeNum =
    Number(fromDecimal(auction.operatorFee.toString())) / 100;
  const principal: any = calculatefromDecimal(auction.principal, decimals);
  const principalNum = Number(fromDecimal(auction.principal, decimals));
  const borrowerDebt: any = Number(
    fromDecimal(auction.borrowerDebt, decimals)
  ).toLocaleString('es-ES');
  const maxSystemFees: any = numeral(maxAmountNum * operatorFeeNum).format();
  const systemFees: any = `-${numeral(principalNum * operatorFeeNum).format()}`;

  const netBalance = numeral(
    Number(fromDecimal(auction.netBalance?.toString() || '0', decimals))
  ).format();

  const calculatedInterest = calculateInterest(auction);
  const expectedROI =
    calculatedInterest * (Number(auction.termLength) / 2628000);
  const interest = numeral(calculatedInterest).format('0.00%');
  const currentAPR = numeral(calculatedInterest * 12).format('0.00%');
  const currentAmount = numeral(principal).value();
  const totalAmount = numeral(maxAmount).value();
  const maxAPR = numeral(
    (Number(fromDecimal(auction.maxInterestRate.toString())) / 100) * 12
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
    lenderAmount = numeral(
      Number(fromDecimal(auction.lenderAmount, decimals))
    ).format();
    const lenderRoiAmountCalc = calculateInvestmentReturn(auction, decimals);
    lenderRoiAmount = numeral(lenderRoiAmountCalc).format();
  }

  const { loanTerm, auctionTimeLeft, loanTermLeft } = calculateTimes(auction);

  const newCalcs = {
    times: { loanTerm, auctionTimeLeft, loanTermLeft },
    borrowerDebt,
    interest,
    maxAmount,
    maxAmountNum,
    netBalance,
    operatorFee,
    principal,
    principalNum,
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

export const getActiveAuctions = (auctions, states) => {
  const updatedAuctions = auctions
    ? auctions.map((auction) => assumeStateMachine(auction))
    : [];

  const getStates = (auction: any) =>
    states.some((st) => st === auction.state) || states.indexOf('all') > -1;

  const activeAuctions = updatedAuctions
    ? updatedAuctions.filter(getStates)
    : [];
  return activeAuctions;
};
