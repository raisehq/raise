import React from 'react';
import { InvestCard, InvestButton } from './Suggested.styles';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import useGetCoin from '../../hooks/useGetCoin';

interface LoanProps {
  auction: any;
}

const Loan: React.SFC<LoanProps> = ({ auction }: LoanProps) => {
  const borrower = useBorrowerInfo(auction.originator);
  const coin = useGetCoin(auction);
  console.log('what', coin);
  return (
    <InvestCard
      coinIcon={coin && coin.icon}
      auction={auction}
      borrower={borrower}
      link
      className="suggested-card"
    >
      <InvestButton loan={auction} />
    </InvestCard>
  );
};

export default Loan;
