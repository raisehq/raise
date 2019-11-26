import * as React from 'react';
const ReactTestRenderer = require('react-test-renderer');

import InvestCard from './InvestCard';
import Butter from 'buttercms';
require('dotenv').config();

const butterApiKey = process.env.REACT_APP_BUTTER || '';

const butter: any = new Butter(butterApiKey)

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

test('InvestCard should render', () => {
  ReactTestRenderer.create(<InvestCard auction={auction} butter={butter} />)
});