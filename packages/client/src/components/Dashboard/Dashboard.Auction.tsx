import React, { useState } from 'react';
import { Card } from '@raisehq/components';
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

const getTermLength = (termEndDate, auctionEndDate) => {
  let diff = (termEndDate.getTime() - auctionEndDate.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;

  return Math.abs(Math.round(diff));
};

const calculateTerm = async auction => {
  try {
    const web3 = getWeb3();
    const currentBlock = await web3.eth.getBlockNumber();
    const averageBT = await averageBlockTime();
    const auctionRemainingBlocks = auction.auctionEndBlock - currentBlock;
    const auctionRemainingSeconds = auctionRemainingBlocks * averageBT;
    const auctionEndDate = getAuctionEndDate(auctionRemainingSeconds);
    const termEndDate = new Date(parseInt(auction.termEndTimestamp));

    return getTermLength(termEndDate, auctionEndDate);
  } catch (error) {
    return error;
  }
};

const Auction = ({ auction, cta }: { auction: any; cta?: any }) => {
  const [loanTerm, setLoanTerm]: any = useState('-');
  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const systemFees: any = numeral((maxAmount * operatorFee) / 100).format();

  useAsyncEffect(async () => {
    const loanTerm = await calculateTerm(auction);
    setLoanTerm(loanTerm);
  }, []);

  return (
    <Card>
      <Card.Header title="Requested Amount" amount={auction.principal} />
      <Card.Grid>
        <Card.Row title="System fees" content={systemFees} />
        <Card.Row title="Loan term" content={loanTerm} />
        <Card.Row title="Net loan proceed" content={auction.netBalance || 0} />
        <Card.Row title="Requested amount" content={maxAmount} />
        <Card.Row title="APR" content={auction.interestRate * 12} />
        <Card.Row title="Total repayemnt" content={auction.borrowerDebt} />
      </Card.Grid>
      <Card.Graph currentAmount={principal} totalAmount={maxAmount} />
      <Card.Grid nobottom>
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="System fees" content="-3000" />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Auction;
