import { useState } from 'react';
import { fromWei } from 'web3-utils';
import numeral from 'numeral';
import { match, ANY } from 'pampy';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { LoanState } from '../../commons/loanStatus';

const secondUnits = {
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

const roundedTime = (seconds, secondUnit) => Math.round(seconds / secondUnit);

const getDesiredTime = seconds =>
  match(
    seconds,
    s => s >= secondUnits.month,
    s => `${roundedTime(s, secondUnits.month)} `,
    s => s >= secondUnits.day,
    s => `${roundedTime(s, secondUnits.day)} days`,
    s => s >= secondUnits.hour,
    s => `${roundedTime(s, secondUnits.hour)} hours`,
    s => s >= secondUnits.minute,
    s => `${roundedTime(s, secondUnits.minute)} minutes`,
    s => s > 0 && s < secondUnits.minute,
    () => '<1 minute',
    ANY,
    () => 'Auction ended'
  );

const calculateFromWei = number => fromWei(number.toString(), 'ether');

const calculateTimes = auction => {
  try {
    const loanTerm = getDesiredTime(Number(auction.termLength));

    const today = new Date().getTime() / 1000;
    const auctionTimeLeft = getDesiredTime(Number(auction.auctionEndTimestamp) - today);
    return { loanTerm, auctionTimeLeft };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const calculateAPR = auction => {
  const nowTimestamp = Date.now();
  let interest = 0;
  if (auction.state === LoanState.CREATED) {
    interest =
      auction.maxInterestRate *
      ((nowTimestamp - auction.auctionStartTimestamp) /
        (auction.auctionEndTimestamp - auction.auctionStartTimestamp));
  } else if (auction.state === LoanState.ACTIVE || auction.state === LoanState.REPAID) {
    interest = auction.maxInterestRate;
  } else {
    interest = auction.interestRate;
  }
  return interest;
};

const useCal = auction => {
  const [calcs, setCalcs] = useState({
    maxAmount: 0,
    operatorFee: 0,
    principal: 0,
    systemFees: 0,
    times: {
      auctionTimeLeft: null,
      loanTerm: 0
    },
    interestRate: 0
  });

  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const systemFees: any = numeral((maxAmount * operatorFee) / 100).format();
  const interestRate: any = calculateAPR(auction.interestRate);

  useAsyncEffect(async () => {
    const { loanTerm, auctionTimeLeft } = calculateTimes(auction);
    setCalcs({
      times: { loanTerm, auctionTimeLeft },
      maxAmount,
      operatorFee,
      principal,
      systemFees,
      interestRate
    });
  }, []);

  return calcs;
};

export default useCal;
