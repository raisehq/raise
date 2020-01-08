import React from 'react';
import { InvestCard, InvestButton } from './Suggested.styles';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const borrower = useBorrowerInfo(auction.originator);
  return (
    <InvestCard auction={auction} borrower={borrower} link className="suggested-card">
      <InvestButton loan={auction} />
    </InvestCard>
  );
};

export default Loan;
