import React from 'react';
import { InvestCard, InvestButton } from './Suggested.styles';
import butterInstance from '../../helpers/butter';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  return (
    <InvestCard auction={auction} butter={butterInstance}>
      <InvestButton loan={auction} />
    </InvestCard>
  );
};

export default Loan;
