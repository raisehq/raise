import React from 'react';
import { Card } from '@raisehq/components';
import Calculations from './Dashboard.useCalc';
import Amount from './Dashboard.Amount';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calculations = Calculations(auction);

  return (
    <Card>
      <Card.Header title="Raised" amount={<Amount principal={calculations.principal} />} />
      <Card.Graph
        color="#eb3f93"
        currentAmount={calculations.currentAmount}
        totalAmount={calculations.totalAmount}
      />
      <Card.Grid>
        <Card.Row title="Target Amount" content={calculations.maxAmount} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Time left" content={calculations.times.auctionTimeLeft} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid>
        <Card.Row title="Borrower" content="Company A" />
        <Card.Row title="Loan Term" content={calculations.times.loanTerm} />
        <Card.Row title="Min APR" content={calculations.interest} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Loan;
