import React from 'react';
import { Card } from '@raisehq/components';
import useCalculations from './Dashboard.useCalc';
import Amount from './Dashboard.Amount';

const Auction = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calcs = useCalculations(auction);
  const { principal, maxAmount, times, systemFees } = calcs;

  return (
    <Card>
      <Card.Header title="Raised amount" amount={<Amount principal={auction.principal} />} />
      <Card.Graph color="#00DA9E" currentAmount={principal} totalAmount={maxAmount} />
      <Card.Grid>
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Current APR" content={auction.interestRate * 12} />
        <Card.Row title="Days Left" content={times.auctionTimeLeft} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid nobottom>
        <Card.Row title="System Fees" content={systemFees} />
        <Card.Row title="Loan Term" content={`${times.loanTerm} `} />
        <Card.Row title="Net Loan Proceeds" content={`${auction.netBalance || 0} DAI`} />
        <Card.Row title="Target Amount" content={maxAmount} />
        <Card.Row title="Max APR" content={auction.borrowerDebt} />
        <Card.Row title="Total Repayemnt" content={auction.borrowerDebt} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Auction;
