import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LoanHeader } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
`;

const propsFirst = {
  logo: 'logo',
  auction: {
    auctionEndTimestamp: '1589450840',
    auctionEnded: true,
    auctionLength: '2592000',
    auctionStartTimestamp: '1587733664',
    borrowerDebt: '10083335133744855973',
    id: '0x3d40b04ea4b8301e4bc2cb15d9745dc1dcd78b90',
    interestRate: '833351337448559737',
    investorCount: 1,
    maxAmount: '10000000000000000000',
    maxInterestRate: '1666666666666666700',
    minInterestRate: '833333333333333400',
    minimumReached: true,
    netBalance: '9800000000000000000',
    operatorBalance: '200000000000000000',
    operatorFee: '2000000000000000000',
    originator: '0x387c4df58b6bd24725774037ba8d4b3d123a2b66',
    principal: '10000000000000000000',
    state: 2,
    termEndTimestamp: '1590325720',
    termLength: '2592000',
    tokenAddress: '0x463e69954eee4463c2f1b11e7e3ff2cdb4bb8967',
  },
};

const propsSecond = {
  logo: 'logo',
  auction: {
    auctionEndTimestamp: '1590325664',
    auctionEnded: true,
    auctionLength: '2592000',
    auctionStartTimestamp: '1587733664',
    borrowerDebt: '10083335133744855973',
    id: '0x3d40b04ea4b8301e4bc2cb15d9745dc1dcd78b90',
    interestRate: '833351337448559737',
    investorCount: 1,
    maxAmount: '10000000000000000000',
    maxInterestRate: '1666666666666666700',
    minInterestRate: '833333333333333400',
    minimumReached: true,
    netBalance: '9800000000000000000',
    operatorBalance: '200000000000000000',
    operatorFee: '2000000000000000000',
    originator: '0x387c4df58b6bd24725774037ba8d4b3d123a2b66',
    principal: '10000000000000000000',
    state: 2,
    termEndTimestamp: '1590325720',
    termLength: '2592000',
    tokenAddress: '0x463e69954eee4463c2f1b11e7e3ff2cdb4bb8967',
  },
};

storiesOf('LoanHeader', module).add('Loan Header first example', () => (
  <Wrapper>
    <LoanHeader {...propsFirst} />
  </Wrapper>
));

storiesOf('LoanHeader', module).add('Loan Header second example', () => (
  <Wrapper>
    <LoanHeader {...propsSecond} />
  </Wrapper>
));
