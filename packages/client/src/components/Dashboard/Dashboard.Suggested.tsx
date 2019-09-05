import React from 'react';
import { Card } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calculations = getCalculations(auction);
  const { principal, currentAmount, totalAmount, maxAmount, times, currentAPR } = calculations;
  console.log('current apr:: ', currentAPR);
  return (
    <Card>
      <Card.Header title="Raised" amount={<Amount principal={principal} />} />
      <Card.Graph color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
      <Card.Grid>
        <Card.Row title="Target Amount" content={maxAmount} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Time left" content={times.auctionTimeLeft} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid>
        <Card.Row title="Borrower" content="Company A" />
        <Card.Row title="Loan Term" content={times.loanTerm} />
        <Card.Row title="Min APR" content={currentAPR} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Loan;
