import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InvestCard from './InvestCardView';
import BN from 'bn.js';
import { toWei } from 'web3-utils';

const basicProps = {
  link: true,
  companyName: 'HERO Fintech Solutions Ptd. Ltd.',
  shortDescription:
    'Speck SL was funded  in 1997 and have 17 millions  of yearly revenue. The company is focused in offering the best gastronomy  experience. Vestibulum quam tempus non tortor vel, ullamcorper ullamcorper augue.',
  background: 'https://cdn.buttercms.com/SnV5NXlFQDmHObRHyU2n',
  logo: 'https://cdn.buttercms.com/YzIsSDsTvCCpZ7pbbaVW',
  slug: 'hero',
  currentAmount: 7,
  totalAmount: 10,
  maxAmount: '10',
  times: {
    loanTerm: '1 month',
    auctionTimeLeft: '1 month',
    loanTermLeft: '1 month',
  },
  currentAPR: '1 %',
  principal: '7',
  investorCount: '3',
  maxInterestRate: new BN(toWei('0.90', 'ether')),
  minInterestRate: new BN(toWei('0.40', 'ether')),
  auctionStartTimestamp: new Date().getTime() / 1000,
  auctionEndTimestamp:
    new Date(new Date().setMonth(new Date().getMonth() + 1)).getTime() / 1000,
};

const noLink = {
  ...basicProps,
  link: false,
};

storiesOf('InvestCardView', module).add('Example with link', () => (
  <div style={{ padding: 10 }}>
    <InvestCard {...basicProps} />
  </div>
));

storiesOf('InvestCardView', module).add('Example with no link', () => (
  <div style={{ padding: 10 }}>
    <InvestCard {...noLink} />
  </div>
));
