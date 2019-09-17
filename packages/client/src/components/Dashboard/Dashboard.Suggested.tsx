import React from 'react';
import { Card } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';
import { InvestModal } from '../InvestModal';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const { companyName, description, background, logo } = useBorrowerInfo(auction.originator);
  const calculations = getCalculations(auction);
  const { currentAmount, totalAmount, maxAmount, times, currentAPR, principal } = calculations;
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;

  return (
    <Card>
      <Card.Image src={background} />
      <Card.Content topRight={auctionTimeLeft} logo={logo}>
        <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
        <Card.Description>{description}</Card.Description>
        <Card.Header title="Raised so far" amount={<Amount principal={principal} />} />
        <Card.Progress color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
        <Card.Grid>
          <Card.Row small title="DAI Target" content={maxAmount} />
          <Card.Row small title="Loan Term" content={times.loanTerm} />
          <Card.Row small title="Investors" content={auction.investorCount} />
          <Card.Row small title="Min APR" content={currentAPR} />
        </Card.Grid>
        <InvestModal loan={auction} />
      </Card.Content>
    </Card>
  );
};

export default Loan;
