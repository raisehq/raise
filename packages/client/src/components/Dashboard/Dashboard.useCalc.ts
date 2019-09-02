import { useState } from 'react';
import { fromWei } from 'web3-utils';
import numeral, { numeralFormat } from '../../commons/numeral';
import { match, ANY } from 'pampy';
import useAsyncEffect from '../../hooks/useAsyncEffect';

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

const useCal = auction => {
  const [calcs, setCalcs] = useState({
    maxAmount: defaultZero,
    operatorFee: defaultZero,
    principal: defaultZero,
    systemFees: defaultZero,
    maxSystemFees: defaultZero,
    borrowerDebt: defaultZero,
    interest: '0%',
    netBalance: defaultZero,
    times: {
      auctionTimeLeft: null,
      loanTerm: null,
      loanTermLeft: null
    },
    numbers: {
      maxAmount: 0,
      principal: 0
    }
  });

  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const netBalance: any = calculateFromWei(auction.netBalance);
  const borrowerDebt: any = calculateFromWei(auction.borrowerDebt);
  const maxSystemFees: any = numeral((maxAmount * operatorFee) / 100).format();
  const systemFees: any = calculateFromWei(`-${auction.operatorBalance ? auction.operatorBalance : '0'}`);
  const interest: any = numeral(Number(auction.interestRate) / 10000).format('0%');

  useAsyncEffect(async () => {
    const { loanTerm, auctionTimeLeft, loanTermLeft } = calculateTimes(auction);
    setCalcs({
      times: { loanTerm, auctionTimeLeft, loanTermLeft },
      borrowerDebt,
      interest,
      maxAmount,
      netBalance,
      operatorFee,
      principal,
      systemFees,
      maxSystemFees,
      numbers: {
        maxAmount: numeral(maxAmount).value(),
        principal: numeral(principal).value()
      }
    });
  }, []);

  return calcs;
};

export default useCal;
