import React from 'react';
import { Card } from '@raisehq/components';
import useCalculations from './Dashboard.useCalc';
import Amount from './Dashboard.Amount';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calcs = useCalculations(auction);
  const { principal, maxAmount, times, systemFees } = calcs;

  return (
    <Card>
      <Card.Header title="Loan amount" amount={<Amount principal={auction.principal} />} />
      <Card.Graph currentAmount={principal} totalAmount={maxAmount} />
      <Card.Grid>
        <Card.Row title="System Fees" content={systemFees} />
        <Card.Row title="APR" content={auction.interestRate * 12} />
        <Card.Row title="Net Loan Proceeds" content={`${auction.netBalance || 0} DAI`} />
      </Card.Grid>
      <Card.Grid>
        <Card.Row title="Repayment amount" content={maxAmount} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Loan Term" content={`${times.loanTerm} months`} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Loan;
