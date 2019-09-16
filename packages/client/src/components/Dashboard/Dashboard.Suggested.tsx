import React from 'react';
import { Card } from '@raisehq/components';
import { Image } from 'semantic-ui-react';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';

const Loan = ({ auction, cta }: { auction: any; cta?: any }) => {
  const calculations = getCalculations(auction);
  const { currentAmount, totalAmount, maxAmount, times, currentAPR, principal } = calculations;

  return (
    <Card>
      <Image src="https://images.unsplash.com/photo-1564758565507-be8ddfc5d015?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
      <Card.Content>
        <p>
          <b>Company A</b>
        </p>
        <p>
          Duis urna lacus, euismod dictum ipsum ut, consequat molestie velit. Vestibulum quam ante,
          tempus non tortor vel, ullamcorper ullamcorper augue.
        </p>
        <Card.Header title="Raised so far" amount={<Amount principal={principal} />} />
        <Card.Graph color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
        <Card.Grid>
          <Card.Row small title="Target" content={maxAmount} />
          <Card.Row small title="Loan Term" content={times.loanTerm} />
          <Card.Row small title="Investors" content={auction.investorCount} />
          <Card.Row small title="Min APR" content={currentAPR} />
        </Card.Grid>
        {cta}
      </Card.Content>
    </Card>
  );
};

export default Loan;
