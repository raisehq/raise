import React from 'react';
import { Card } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';
import { InvestModal } from '../InvestModal';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import useGetCoin from '../../hooks/useGetCoin';

const Auction = ({ auction }: { auction: any }) => {
  const { companyName, background, logo, route } = useBorrowerInfo(auction.originator);
  const coin = useGetCoin(auction);
  const calcs = getCalculations(auction, coin.decimals);
  const {
    maxAmount,
    expectedRoiFormated,
    times,
    currentAmount,
    totalAmount,
    principal,
    lenderAmount
  } = calcs;

  const auctionTimeLeft = `${times.auctionTimeLeft} left`;

  return (
    <Card>
      <Card.Image src={background} to={route} />
      <Card.Content topRight={auctionTimeLeft} logo={logo} to={route}>
        <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
        <Card.Header
          title="Amount invested"
          amount={<Amount principal={lenderAmount} coin={coin} />}
        />
        <Card.Separator />
        <Card.Grid spaceBetween nobottom>
          <Card.SubHeader
            title="Raised so far"
            amount={<Amount principal={principal} coin={coin} />}
          />
          <Card.SubHeader title="Target" amount={<Amount principal={maxAmount} coin={coin} />} />
        </Card.Grid>
        <Card.Separator />
        <Card.Progress color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
        <Card.Grid>
          <Card.Row notop title="Loan Term" content={times.loanTerm} />
          <Card.Vertical />
          <Card.Row notop title="Investors" content={auction.investorCount} />
          <Card.Vertical />
          <Card.Row notop title="Expected ROI" content={expectedRoiFormated} />
        </Card.Grid>
        <InvestModal loan={auction} />
      </Card.Content>
    </Card>
  );
};

export default Auction;
