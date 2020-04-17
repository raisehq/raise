import React from 'react';
import Card from '../Card';
import { CardContent } from './InvestCardView.styles';
import Amount from '../Amount';
import CardTopSection from './CardTopSection';

import { Times } from '../../types';

interface InvestInfoProps {
  companyName: string;
  shortDescription: string;
  background: string;
  logo: string;
  slug: string;
  currentAmount: number;
  totalAmount: number;
  maxAmount: string;
  times: Times;
  principal: string;
  link?: boolean;
  coinIcon: string;
  onOpenGraph?: any;
}
interface APropsInterface {
  href: string | undefined;
}

interface ToPropsInterface {
  to: string | undefined;
}

const InvestInfo = (props: InvestInfoProps) => {
  const {
    companyName,
    shortDescription,
    logo,
    slug,
    currentAmount,
    totalAmount,
    maxAmount,
    times,
    principal,
    link,
    coinIcon,
    onOpenGraph,
  } = props;
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const aProps: APropsInterface = { href: undefined };
  const toProps: ToPropsInterface = { to: undefined };

  if (link) {
    aProps.href = slug;
    toProps.to = slug;
  }

  return (
    <>
      <CardTopSection src={logo} onOpenGraph={onOpenGraph} href={aProps.href} />
      <CardContent {...toProps} topRight={auctionTimeLeft}>
        <a {...aProps}>
          <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          <Card.Description>{shortDescription}</Card.Description>
        </a>
        <Card.Grid spaceBetween alignBottom nobottom>
          <Card.Header
            title="Raised so far"
            amount={<Amount principal={principal} coinIcon={coinIcon} />}
          />
          <Card.Header
            title="Target"
            amount={<Amount principal={maxAmount} coinIcon={coinIcon} />}
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
