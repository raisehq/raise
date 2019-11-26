import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InvestCard from './InvestCard';
import Butter from 'buttercms';

const butterApiKey = process.env.STORYBOOK_BUTTER || '';

const butter = new Butter(butterApiKey);

const auction = {
  "auctionEndTimestamp": "1575021892",
  "auctionEnded": false,
  "auctionLength": "604800",
  "auctionStartTimestamp": "1574417092",
  "borrowerDebt": "0",
  "id": "0x4198645543440f6fd466078eb01dbc68f61a09ac",
  "interestRate": null,
  "investorCount": 0,
  "maxAmount": "1000000000000000000000",
  "maxInterestRate": "958333333333333400",
  "minInterestRate": "549999999999999900",
  "minimumReached": false,
  "netBalance": null,
  "operatorBalance": "0",
  "operatorFee": "1000000000000000000",
  "originator": "0xb77b7ac1ec7abac2a37d3df504eee4f3a3618ae6",
  "principal": "0",
  "state": 0,
  "termEndTimestamp": "0",
  "termLength": "7776000"
}

storiesOf('InvestCard', module).add('InvestCard with auction data', () => (
  <div style={{ padding: 10 }}>
    <InvestCard auction={auction} butter={butter} />
  </div>
));