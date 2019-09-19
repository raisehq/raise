import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';
import { InvestModal } from '../InvestModal';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const { companyName, description, background, logo, slug } = useBorrowerInfo(auction.originator);
  const calculations = getCalculations(auction);
  const { currentAmount, totalAmount, maxAmount, times, currentAPR, principal } = calculations;
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const borrowerUrl = `/borrowers/${slug}`;

  return (
    <Card>
      <Card.Image to={borrowerUrl} src={background} />
      <Card.Content to={borrowerUrl} topRight={auctionTimeLeft} logo={logo}>
        <Link to={borrowerUrl}>
          <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          <Card.Description>{description}</Card.Description>
        </Link>
        <Card.Grid spaceBetween alignBottom>
          <Card.Header title="Raised so far" amount={<Amount principal={principal} />} />
          <Card.Header title="Target" amount={<Amount principal={maxAmount} />} />
        </Card.Grid>
        <Card.Progress color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
        <Card.Grid>
          <Card.Row small title="Loan Term" content={times.loanTerm} />
          <Card.Vertical />
          <Card.Row small title="Investors" content={auction.investorCount} />
          <Card.Vertical />
          <Card.Row small title="Min APR" content={currentAPR} />
        </Card.Grid>
        <InvestModal loan={auction} />
      </Card.Content>
    </Card>
  );
};

export default Loan;
