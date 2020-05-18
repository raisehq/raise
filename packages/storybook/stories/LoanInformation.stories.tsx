import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LoanInformation } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
`;

const props = {
  currency: 'DAI',
  loanTerm: '160 days',
  repaymentMethod: 'Bullet',
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
    maxAmount: '100000000000000000000000',
    maxInterestRate: '1666666666666666700',
    minInterestRate: '1291666666666666700',
    minimumReached: false,
    netBalance: null,
    operatorBalance: '0',
    operatorFee: '2000000000000000000',
    originator: '0x1625c70892122cc928360416abd3416cbcbabf55',
    principal: '13201300000000012520000',
    state: 0,
    termEndTimestamp: '0',
    termLength: '15552000',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
};

storiesOf('LoanInformation', module).add('Loan Information', () => (
  <Wrapper>
    <LoanInformation {...props} />
  </Wrapper>
));
