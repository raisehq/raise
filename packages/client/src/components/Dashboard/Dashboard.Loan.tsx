import React from 'react';
import { Card } from '@raisehq/components';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import useCalculations from './Dashboard.useCalc';
import Amount from './Dashboard.Amount';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calcs = useCalculations(auction);
  const { principal, maxAmount, times, systemFees } = calcs;

  return (
    <Card>
      <Card.Header title="Loan amount" amount={<Amount principal={principal} />} />
      {auction.state !== 0 && (
        <Card.Badge color={loanStatusColors[auction.state]}>{loanStatus[auction.state]}</Card.Badge>
      )}
      <Card.Grid>
        <Card.Row title="System Fees" content={systemFees} />
        <Card.Row title="APR" content={auction.interestRate * 12} />
        <Card.Row title="Net Loan Proceeds" content={`${auction.netBalance || 0} DAI`} />
      </Card.Grid>
      <Card.Grid>
        <Card.Row title="Repayment amount" content={maxAmount} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Loan Term" content={`${times.loanTerm} `} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Loan;
