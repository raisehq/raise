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
  decimals?: number;
}

const InvestCard: React.SFC<LoanProps> = ({
  auction,
  className,
  children,
  borrower,
  coinIcon,
  decimals = 18,
  link,
}: LoanProps) => {
  const calculations = getCalculations(auction, decimals);

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
