import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InvestCard from './InvestCard';

const basicProps = {
  companyName: "Raise",
  shortDescription: "Raise aims to bring a loan marketplace between peers.",
  background: "",
  logo: "",
  slug: "raise",
  currentAmount: 10000,
  totalAmount: 100000,
  maxAmount: 100000,
  times: {},
  currentAPR: 1000000000,
  principal: 10000,
  investorCount: 3,
}
storiesOf('InvestCard', module)
  .add('Basic', () => (
    <InvestCard {...basicProps} />
  ))
