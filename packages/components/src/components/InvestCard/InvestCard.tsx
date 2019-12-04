import React, { ReactNode } from 'react';
import { getCalculations } from '../../utils/loanUtils';
import InvestCardView from '../InvestCardView';
import { Company } from '../../types';

interface LoanProps {
  auction: any;
  borrower: Company;
  link?: boolean;
  children?: ReactNode;
  className?: string;
}

const InvestCard: React.SFC<LoanProps> = (props: LoanProps) => {
  const { auction, className, children, borrower } = props;
  const link = !!props.link;
  const calculations = getCalculations(auction);

  const investProps = {
    ...auction,
    ...borrower,
    ...calculations,
    link,
  };
  return (
    <InvestCardView {...investProps} className={className}>
      {children}
    </InvestCardView>
  );
};

export default InvestCard;
