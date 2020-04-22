import React, { lazy, Suspense } from 'react';
import { Card } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import useGetCoin from '../../hooks/useGetCoin';
import CardTopSection from './CardTopSection';
import { Content } from './Dashboard.styles';

const InvestSidebar = lazy(() => import('../InvestSidebar/InvestWithSidebar'));

const Auction = ({ auction }: { auction: any }) => {
  const { companyName, logo, route, slug } = useBorrowerInfo(auction.originator);
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
      <CardTopSection src={logo} href={slug} />
      <Card.Content topRight={auctionTimeLeft} to={route}>
        <Content>
          <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          <Card.Header
            title="Amount invested"
            amount={<Amount principal={lenderAmount} coin={coin} />}
          />
        </Content>
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
        <Suspense fallback={<div>...</div>}>
          <InvestSidebar loan={auction} />
        </Suspense>
      </Card.Content>
    </Card>
  );
};

export default Auction;
