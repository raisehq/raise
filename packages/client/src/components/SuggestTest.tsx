import React from 'react';
import Suggesteds from './Dashboard/Dashboard.Suggesteds';

const arr = [
  {
    auctionEndTimestamp: '1968647948',
    auctionEnded: false,
    auctionLength: '101001000',
    auctionStartTimestamp: '1568647648',
    borrowerDebt: '0',
    originator: '0xED9B65514409014aa06eBF4199AabA71AF8fAeA3',
    id: '0x691de9f5d3f5615865c11e227dc093aaa249f07f',
    interestRate: null,
    investorCount: 0,
    maxAmount: '1000000000000000000000000',
    maxInterestRate: '10000000000000000000',
    minimumReached: false,
    netBalance: null,
    operatorBalance: '0',
    operatorFee: '1000000000000000000',
    principal: '0',
    state: 0,
    termEndTimestamp: '0',
    termLength: '300'
  },
  {
    auctionEndTimestamp: '1968647948',
    auctionEnded: false,
    auctionLength: '101001000',
    auctionStartTimestamp: '1568647648',
    borrowerDebt: '0',
    originator: '0xED9B65514409014aa06eBF4199AabA71AF8fA2A3',
    id: '0x691de9f5d3f5615865c11e227dc093aaa249f07f',
    interestRate: null,
    investorCount: 0,
    maxAmount: '20000000000000000000000',
    maxInterestRate: '10000000000000000000',
    minimumReached: false,
    netBalance: null,
    operatorBalance: '0',
    operatorFee: '1000000000000000000',
    principal: '0',
    state: 0,
    termEndTimestamp: '0',
    termLength: '300'
  }
];

const Test = () => <Suggesteds auctions={arr} states={[0]} />;

export default Test;
