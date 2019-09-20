import React from 'react';
import { Card } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import numeral from '../../commons/numeral';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';
import { InvestModal } from '../InvestModal';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';

const Auction = ({ auction }: { auction: any }) => {
  const { companyName, background, logo, slug } = useBorrowerInfo(auction.originator);
  const calcs = getCalculations(auction);
  const { maxAmount, expectedRoiFormated, times, currentAmount, totalAmount, principal } = calcs;

  const lenderAmount = numeral(fromWei(auction.lenderAmount)).format();
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const borrowerUrl = `/borrowers/${slug}`

  return (
    <Card>
      <Card.Image src={background} to={borrowerUrl} />
      <Card.Content topRight={auctionTimeLeft} logo={logo} to={borrowerUrl} >
        <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
        <Card.Header title="Amount invested" amount={<Amount principal={lenderAmount} />} />
        <Card.Separator />
        <Card.Grid spaceBetween nobottom>
          <Card.SubHeader title="Raised so far" amount={<Amount principal={principal} />} />
          <Card.SubHeader title="Target" amount={<Amount principal={maxAmount} />} />
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
