import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LoanHeader } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
`;

const props0 = {
  logo: 'logo',
  decimals: 18,
  auction: {
    auctionEndTimestamp: '1590832950',
    auctionEnded: false,
    auctionLength: '3888000',
    auctionStartTimestamp: '1586944950',
    borrowerDebt: '0',
    id: '0xf9213670b75ce7d36b54fe1b516b44a1a55be17b',
    interestRate: '1501165316358024724',
    investorCount: 17,
    maxAmount: '10000000000000000000000',
    maxInterestRate: '1666666666666666700',
    minInterestRate: '1291666666666666700',
    minimumReached: false,
    netBalance: null,
    operatorBalance: '0',
    operatorFee: '2000000000000000000',
    originator: '0x1625c70892122cc928360416abd3416cbcbabf55',
    principal: '100000000000000000000',
    state: 0,
    termEndTimestamp: '0',
    termLength: '15552000',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
};

const propsFirst = {
  logo: 'logo',
  decimals: 18,
  auction: {
    auctionEndTimestamp: '1590832950',
    auctionEnded: false,
    auctionLength: '3888000',
    auctionStartTimestamp: '1586944950',
    borrowerDebt: '0',
    id: '0xf9213670b75ce7d36b54fe1b516b44a1a55be17b',
    interestRate: '1501165316358024724',
    investorCount: 17,
    maxAmount: '10000000000000000000000',
    maxInterestRate: '1666666666666666700',
    minInterestRate: '1291666666666666700',
    minimumReached: false,
    netBalance: null,
    operatorBalance: '0',
    operatorFee: '2000000000000000000',
    originator: '0x1625c70892122cc928360416abd3416cbcbabf55',
    principal: '3000000000000000000000',
    state: 0,
    termEndTimestamp: '0',
    termLength: '15552000',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
};

const propsSecond = {
  logo: 'logo',
  decimals: 6,
  auction: {
    auctionEndTimestamp: '1590156450',
    auctionEnded: true,
    auctionLength: '2592000',
    auctionStartTimestamp: '1587564450',
    borrowerDebt: '10083357',
    id: '0xe84f680de2a0b323d16e48b5c4538a45d5560a4e',
    interestRate: '833570923353909531',
    investorCount: 1,
    maxAmount: '10000000',
    maxInterestRate: '1666666666666666700',
    minInterestRate: '833333333333333400',
    minimumReached: true,
    netBalance: '9800000',
    operatorBalance: '200000',
    operatorFee: '2000000000000000000',
    originator: '0xed9b65514409014aa06ebf4199aaba71af8faea3',
    principal: '10000000',
    state: 5,
    termEndTimestamp: '1590157189',
    termLength: '2592000',
    tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  },
};

storiesOf('LoanHeader', module).add('Loan Header no 10 investment', () => (
  <Wrapper>
    <LoanHeader {...props0} />
  </Wrapper>
));

storiesOf('LoanHeader', module).add('Loan Header 10 and a bit more', () => (
  <Wrapper>
    <LoanHeader {...propsFirst} />
  </Wrapper>
));

storiesOf('LoanHeader', module).add('Loan Header fully invested', () => (
  <Wrapper>
    <LoanHeader {...propsSecond} />
  </Wrapper>
));
