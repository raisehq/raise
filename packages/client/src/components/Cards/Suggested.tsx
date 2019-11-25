import React from 'react';
import { getCalculations } from '../../utils/loanUtils';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { InvestCard, InvestButton } from './Suggested.styles';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const borrowerInfo = useBorrowerInfo(auction.originator);
  const calculations = getCalculations(auction);

  const investProps = {
    ...auction,
    ...borrowerInfo,
    ...calculations
  };
  return (
    <InvestCard {...investProps}>
      <InvestButton loan={auction} />
    </InvestCard>
  );
};

export default Loan;
