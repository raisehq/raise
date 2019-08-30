import React from 'react';
import { Card } from '@raisehq/components';
import useCalculations from './Dashboard.useCalc';
import Amount from './Dashboard.Amount';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calcs = useCalculations(auction);
  const { principal, maxAmount, times, numbers } = calcs;

  return (
    <Card>
      <Card.Header title="Raised" amount={<Amount principal={principal} />} />
      <Card.Graph
        color="#eb3f93"
        currentAmount={numbers.principal}
        totalAmount={numbers.maxAmount}
      />
      <Card.Grid>
        <Card.Row title="Target Amount" content={maxAmount} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Time left" content={times.auctionTimeLeft} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid>
        <Card.Row title="Borrower" content="Company A" />
        <Card.Row title="Loan Term" content={times.loanTerm} />
        <Card.Row title="Min APR" content={auction.borrowerDebt} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Loan;
