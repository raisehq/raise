import React from 'react';
import { Card } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import Amount from '../Dashboard/Dashboard.Amount';

const Auction = ({ auction }: { auction: any }) => {
  const calcs = getCalculations(auction);
  const {
    principal,
    netBalance,
    maxAmount,
    times,
    systemFees,
    borrowerDebt,
    currentAmount,
    totalAmount,
    maxAPR,
    currentAPR
  } = calcs;

  return (
    <Card type="borrowerAuction">
      <Card.Content>
        <Card.Header title="Raised amount" amount={<Amount principal={principal} />} />
        <Card.Graph color="#00DA9E" currentAmount={currentAmount} totalAmount={totalAmount} />
        <Card.Grid>
          <Card.Row title="Investors" content={auction.investorCount} />
          <Card.Row title="Current APR" content={currentAPR} />
          <Card.Row title="Days Left" content={times.auctionTimeLeft} />
        </Card.Grid>
        <Card.Separator />
        <Card.Grid nobottom>
          <Card.Row title="System Fees" content={`${systemFees} DAI`} />
          <Card.Row title="Loan Term" content={`${times.loanTerm} `} />
          <Card.Row title="Net Loan Proceeds" content={`${netBalance} DAI`} />
          <Card.Row title="Target Amount" content={`${maxAmount} DAI`} />
          <Card.Row title="Max APR" content={maxAPR} />
          <Card.Row title="Total Repayment" content={`${borrowerDebt} DAI`} />
        </Card.Grid>
      </Card.Content>
    </Card>
  );
};

export default Auction;
