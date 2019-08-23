import React, { useState } from 'react';
import { Card } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import numeral from 'numeral';
import Coin from '../Coin';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { getWeb3, averageBlockTime } from '../../utils';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { AmountComponent } from './Dashboard.styles';

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

const Auction = ({ auction, cta }: { auction: any; cta?: any }) => {
  const [times, setTimes]: any = useState({
    loanTerm: '-',
    daysLeft: '-'
  });
  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const systemFees: any = numeral((maxAmount * operatorFee) / 100).format();

  useAsyncEffect(async () => {
    const { loanTerm, daysLeft } = await calculateTimes(auction);
    setTimes({ loanTerm, daysLeft });
  }, []);

  const Amount = () => (
    <AmountComponent>
      {auction.principal}
      <Coin src={`${process.env.REACT_APP_HOST_IMAGES}/images/ico_dai.svg`} name="DAI" />
    </AmountComponent>
  );

  return (
    <Card>
      <Card.Header title="Raised" amount={<Amount />} />
      {auction.state !== 0 && (
        <Card.Badge color={loanStatusColors[auction.state]}>{loanStatus[auction.state]}</Card.Badge>
      )}
      <Card.Graph currentAmount={principal} totalAmount={maxAmount} />
      <Card.Grid>
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Current APR" content={auction.interestRate * 12} />
        <Card.Row title="Days Left" content={times.daysLeft} />
        <Card.Row title="Requested Amount" content={maxAmount} />
        <Card.Row title="Total Repayemnt" content={auction.borrowerDebt} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid nobottom>
        <Card.Row title="System Fees" content={systemFees} />
        <Card.Row title="Loan Term" content={`${times.loanTerm} months`} />
        <Card.Row title="Net Loan Proceeds" content={`${auction.netBalance || 0} DAI`} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Auction;
