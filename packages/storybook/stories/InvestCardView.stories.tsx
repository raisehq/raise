import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InvestCard } from '@raisehq/components';
import BN from 'bn.js';
import { toWei } from 'web3-utils';

const basicProps = {
  auction: {
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
  },
  link: true,
  companyName: 'HERO Fintech Solutions Ptd. Ltd.',
  shortDescription:
    'Speck SL was funded  in 1997 and have 17 millions  of yearly revenue. The company is focused in offering the best gastronomy  experience. Vestibulum quam tempus non tortor vel, ullamcorper ullamcorper augue.',
  background: 'https://cdn.buttercms.com/SnV5NXlFQDmHObRHyU2n',
  logo: 'https://cdn.buttercms.com/YzIsSDsTvCCpZ7pbbaVW',
  slug: 'hero',
  currentAmount: 7,
  totalAmount: 10,
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
