import React from 'react';
import { InvestCard, InvestModalButton, InvestSidebarButton } from './Suggested.styles';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import useGetCoin from '../../hooks/useGetCoin';

const FEATURE_FLAG_SWAP = process.env.REACT_APP_SWAP_ON === 'true';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const borrower = useBorrowerInfo(auction.originator);
  const coin = useGetCoin(auction);
  return (
    <InvestCard
      coinIcon={coin && coin.icon}
      auction={auction}
      borrower={borrower}
      link
      className="suggested-card"
    >
      {FEATURE_FLAG_SWAP ? (
        <InvestSidebarButton loan={auction} />
      ) : (
        <InvestModalButton loan={auction} />
      )}
    </InvestCard>
  );
};

export default Loan;
