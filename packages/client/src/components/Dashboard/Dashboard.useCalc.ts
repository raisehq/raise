import { fromWei } from 'web3-utils';
import numeral, { numeralFormat } from '../../commons/numeral';
import { match, ANY } from 'pampy';
import { LoanState } from '../../commons/loanStatus';
import { isAuctionExpired } from '../../utils/loanUtils';

const secondUnits = {
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

const roundedTime = (seconds, secondUnit) => Math.round(seconds / secondUnit);

const getDesiredTime = (seconds, type?) =>
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

const calculateFromWei = number =>
  number ? numeral(fromWei(number.toString(), 'ether')).format(numeralFormat) : defaultZero;

const calculateTimes = auction => {
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

const calculateAPR = auction => {
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
    interest = auction.maxInterestRate / 10000;
  }
  return interest;
};

const useCal = auction => {
  // const calcs = {
  //   maxAmount: defaultZero,
  //   operatorFee: defaultZero,
  //   principal: defaultZero,
  //   systemFees: defaultZero,
  //   maxSystemFees: defaultZero,
  //   borrowerDebt: defaultZero,
  //   interest: '0%',
  //   netBalance: defaultZero,
  //   times: {
  //     auctionTimeLeft: null,
  //     loanTerm: null,
  //     loanTermLeft: null
  //   }
  // };

  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const netBalance: any = calculateFromWei(auction.netBalance);
  const borrowerDebt: any = calculateFromWei(auction.borrowerDebt);
  const maxSystemFees: any = numeral((maxAmount * operatorFee) / 100).format();
  const systemFees: any = calculateFromWei(`-${auction.operatorBalance}`);

  const apr = calculateAPR(auction);
  const interest: any = numeral(Number(apr) / 10).format('0.00%');

  // useAsyncEffect(async () => {
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
    maxSystemFees
  };

  return newCalcs;
};

export default useCal;
