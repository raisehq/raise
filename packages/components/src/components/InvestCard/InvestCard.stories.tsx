import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Router } from 'react-router-dom';
import InvestCard from './InvestCard';
import BN from 'bn.js';
import { toWei } from 'web3-utils';

const basicProps = {
  companyName: "",
  shortDescription: "",
  background: "",
  logo: "",
  slug: "",
  currentAmount: 10,
  totalAmount: 10,
  maxAmount: "10",
  times: {
    loanTerm: "",
    auctionTimeLeft: "",
    loanTermLeft: ""
  },
  currentAPR: '1 %',
  principal: "10",
  investorCount: "3",
  maxInterestRate: new BN(toWei('1', 'ether')),
  minInterestRate: new BN(toWei('1', 'ether')),
  auctionStartTimestamp: 666666666,
  auctionEndTimestamp: 6666666667
}


storiesOf('InvestCard', module)
  .add('Simple', () => (
      <InvestCard {...basicProps} />
  ))
