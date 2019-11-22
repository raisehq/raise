import React from 'react';
import { InvestCard } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const borrowerInfo = useBorrowerInfo(
    auction.originator
  );
  const calculations = getCalculations(auction);

  const investProps = {
    ...borrowerInfo,
    ...calculations,
  };
  return <InvestCard {...investProps} />
};

export default Loan;
