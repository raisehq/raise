import React, { Fragment } from 'react';
import { Card } from '@raisehq/components';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calcs = getCalculations(auction);
  const { principal, maxAmount, times, systemFees } = calcs;

  return (
    <Card>
      <Card.Header title="Loan amount" amount={<Amount principal={principal} />} />
      <Fragment>
        <Card.Tooltip />
        <Card.Badge color={loanStatusColors[auction.state]}>{loanStatus[auction.state]}</Card.Badge>
      </Fragment>
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
