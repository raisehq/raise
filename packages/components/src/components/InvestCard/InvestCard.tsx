import React, { ReactNode } from 'react';
import { getCalculations } from '../../utils/loanUtils';
import { InvestCardView } from '../InvestCardView';
import { Company } from '../../types';

interface LoanProps {
  auction: any;
  borrower: Company;
  link?: boolean;
  children?: ReactNode;
  className?: string;
  coinIcon: string;
}

const InvestCard: React.SFC<LoanProps> = (props: LoanProps) => {
  const { auction, className, children, borrower, coinIcon, link } = props;
  const calculations = getCalculations(auction);
  const investProps = {
    ...auction,
    ...borrower,
    ...calculations,
    link,
    coinIcon,
  };
  return (
    <InvestCardView {...investProps} className={className}>
      {children}
    </InvestCardView>
  );
};

export default InvestCard;
