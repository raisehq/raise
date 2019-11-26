import React, { ReactNode } from 'react';
import { getCalculations } from '../../utils/loanUtils';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import InvestCardView from '../InvestCardView';

interface LoanProps {
  auction: any;
  butter: any;
  link?: boolean;
  children?: ReactNode;
  className?: string;
}

const InvestCard: React.SFC<LoanProps> = (props: LoanProps) => {
  const { auction, butter, className, children } = props;
  const link = !!props.link;
  const borrowerInfo = useBorrowerInfo(butter, auction.originator, link);
  const calculations = getCalculations(auction);

  const investProps = {
    ...auction,
    ...borrowerInfo,
    ...calculations
  };
  return (
    <InvestCardView {...investProps} className={className} >
      {children}
    </InvestCardView>
  );
};

export default InvestCard;
