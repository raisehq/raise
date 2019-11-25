import React from 'react';
import Card from '../Card';
import { CardContent } from './InvestCardView.styles';
import Amount from '../Amount';

import { times } from '../../types';

interface InvestInfoProps {
  companyName: string;
  shortDescription: string;
  background: string;
  logo: string;
  slug: string;
  currentAmount: number;
  totalAmount: number;
  maxAmount: string;
  times: times;
  principal: string;
}

const InvestInfo = (props: InvestInfoProps) => {
  const {
    companyName,
    shortDescription,
    background,
    logo,
    slug,
    currentAmount,
    totalAmount,
    maxAmount,
    times,
    principal,
  } = props;
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const borrowerUrl = `/borrowers/${slug}`;

  return (
    <>
      <Card.Image to={borrowerUrl} src={background} />
      <CardContent to={borrowerUrl} topRight={auctionTimeLeft} logo={logo}>
        <a href={borrowerUrl}>
          <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          <Card.Description>{shortDescription}</Card.Description>
        </a>
        <Card.Grid spaceBetween alignBottom nobottom>
          <Card.Header
            title="Raised so far"
            amount={<Amount principal={principal} />}
          />
          <Card.Header
            title="Target"
            amount={<Amount principal={maxAmount} />}
          />
        </Card.Grid>
        <Card.Progress
          color="#eb3f93"
          currentAmount={currentAmount}
          totalAmount={totalAmount}
        />
      </CardContent>
    </>
  );
};

export default InvestInfo;
