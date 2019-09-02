import React, { useState } from 'react';
import { Card } from '@raisehq/components';
import useCalculations from './Dashboard.useCalc';
import Amount from './Dashboard.Amount';
import useInterval from '../../hooks/useInterval';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  // const calcs = useCalculations(auction);
  // const { principal, maxAmount, times } = calcs;
  const [calculations, setCalculations] = useState();

  useInterval(() => {
    const calcs = useCalculations(auction);
    setCalculations({ calculations: calcs });
  }, 100);

  return (
    <Card>
      <Card.Header title="Raised" amount={<Amount principal={calculations.principal} />} />
      <Card.Graph
        color="#eb3f93"
        currentAmount={calculations.principal}
        totalAmount={calculations.maxAmount}
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
        <Card.Row title="Min APR" content={auction.borrowerDebt} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Loan;
