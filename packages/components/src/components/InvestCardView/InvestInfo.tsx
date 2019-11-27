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
  link?: boolean;
}
interface aPropsInterface {
  href: string | undefined;
}

interface toPropsInterface {
  to: string | undefined;
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
    link,
  } = props;
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const aProps: aPropsInterface = { href: undefined };
  const toProps: toPropsInterface = { to: undefined };

  if (link) {
    aProps.href = slug;
    toProps.to = slug;
  }

  return (
    <>
      <Card.Image {...toProps} src={background} />
      <CardContent {...toProps} topRight={auctionTimeLeft} logo={logo}>
        <a {...aProps}>
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
