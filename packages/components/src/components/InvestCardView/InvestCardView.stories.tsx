import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InvestCard from './InvestCardView';
import BN from 'bn.js';
import { toWei } from 'web3-utils';

const basicProps = {
  companyName: 'HERO Fintech Solutions Ptd. Ltd.',
  shortDescription: 'HERO Fintech develops innovative business models ',
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

storiesOf('InvestCard', module).add('Simple', () => (
  <div style={{ padding: 10 }}>
    <InvestCard {...basicProps} />
  </div>
));
