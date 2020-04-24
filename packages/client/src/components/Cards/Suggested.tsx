import React from 'react';
import { InvestCard, InvestSidebarButton } from './Suggested.styles';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import useGetCoin from '../../hooks/useGetCoin';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const borrower = useBorrowerInfo(auction.originator);
  const coin = useGetCoin(auction);
  return (
    <InvestCard
      coinIcon={coin && coin.icon}
      decimals={coin && coin.decimals}
      auction={auction}
      borrower={borrower}
      link
      className="suggested-card"
    >
      <InvestSidebarButton loan={auction} />
    </InvestCard>
  );
};

export default Loan;
