import React from 'react';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import { IPHONE_SE } from '../src/commons/TestViewports';
import InvestCard from '../src/components/InvestCard';

const auction = {
  auctionEndTimestamp: '1575021892',
  auctionEnded: false,
  auctionLength: '604800',
  auctionStartTimestamp: '1574417092',
  borrowerDebt: '0',
  id: '0x4198645543440f6fd466078eb01dbc68f61a09ac',
  interestRate: null,
  investorCount: 0,
  maxAmount: '1000000000000000000000',
  maxInterestRate: '958333333333333400',
  minInterestRate: '549999999999999900',
  minimumReached: false,
  netBalance: null,
  operatorBalance: '0',
  operatorFee: '1000000000000000000',
  originator: '0xb77b7ac1ec7abac2a37d3df504eee4f3a3618ae6',
  principal: '0',
  state: 0,
  termEndTimestamp: '0',
  termLength: '7776000',
};

const company = {
  companyName: 'HERO Fintech Solutions Ptd. Ltd.',
  description: '',
  shortDescription:
    'Speck SL was funded  in 1997 and have 17 millions  of yearly revenue. The company is focused in offering the best gastronomy  experience. Vestibulum quam tempus non tortor vel, ullamcorper ullamcorper augue.',
  background: 'https://cdn.buttercms.com/SnV5NXlFQDmHObRHyU2n',
  logo: 'https://cdn.buttercms.com/YzIsSDsTvCCpZ7pbbaVW',
  slug: 'hero',
};

const bigAuction = {
  ...auction,
  principal: '1000000000000000000000000',
  maxAmount: '1000000000000000000000000',
};

it('mobile: renders correctly', async () => {
  // @ts-ignore
  window.innerWidth = 320;
  // @ts-ignore
  window.innerHeight = 568;
  // @ts-ignore
  window.dispatchEvent(new Event('resize'));

  render(
    <InvestCard
      auction={auction}
      borrower={company}
      coinIcon="coin-dai.svg"
      link
    />
  );

  const screenshot = await generateImage(IPHONE_SE);

  // @ts-ignore
  expect(screenshot).toMatchImageSnapshot();
});

it('mobile: renders correctly if amounts are big', async () => {
  // @ts-ignore
  window.innerWidth = 320;
  // @ts-ignore
  window.innerHeight = 568;
  // @ts-ignore
  window.dispatchEvent(new Event('resize'));

  render(
    <InvestCard
      auction={bigAuction}
      borrower={company}
      coinIcon="coin-dai.svg"
      link
    />
  );

  const screenshot = await generateImage(IPHONE_SE);

  // @ts-ignore
  expect(screenshot).toMatchImageSnapshot();
});
