import { useState } from 'react';
import { fromWei } from 'web3-utils';
import numeral from 'numeral';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { getWeb3, averageBlockTime } from '../../utils';

const calculateFromWei = number => fromWei(number.toString(), 'ether');

const getAuctionEndDate = auctionRemainingSeconds => {
  let now = new Date();
  now.setSeconds(now.getSeconds() + auctionRemainingSeconds);

  return now;
};

const getTermLength = (d, dd) => {
  var hour = 60 * 60 * 1000,
    day = hour * 24,
    month = day * 30,
    ms = Math.abs(d - dd),
    months = parseInt((ms / month).toString(), 10);

  ms = ms - months * month;
  var days = parseInt((ms / day).toString(), 10);
  ms -= days * day;
  var hours = parseInt((ms / hour).toString(), 10);
  ms -= hours * hour;

  return months;
};

const calculateTimes = async auction => {
  try {
    const web3 = getWeb3();
    const currentBlock = await web3.eth.getBlockNumber();
    const averageBT = await averageBlockTime();
    const auctionRemainingBlocks = auction.auctionEndBlock - currentBlock;
    const auctionRemainingSeconds = auctionRemainingBlocks * averageBT;
    const auctionEndDate = getAuctionEndDate(auctionRemainingSeconds);
    const termEndDate = new Date(parseInt(auction.termEndTimestamp));
    const loanTerm = getTermLength(termEndDate, auctionEndDate);
    let seconds = auctionRemainingSeconds;
    const daysLeft = Math.floor(seconds / (3600 * 24));

    return { loanTerm, daysLeft };
  } catch (error) {
    return error;
  }
};

const useCal = auction => {
  const [calcs, setCalcs] = useState({
    maxAmount: 0,
    operatorFee: 0,
    principal: 0,
    systemFees: 0,
    times: {
      daysLeft: null,
      loanTerm: 0
    }
  });

  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const systemFees: any = numeral((maxAmount * operatorFee) / 100).format();

  useAsyncEffect(async () => {
    const { loanTerm, daysLeft } = await calculateTimes(auction);
    setCalcs({ times: { loanTerm, daysLeft }, maxAmount, operatorFee, principal, systemFees });
  }, []);

  return calcs;
};

export default useCal;
