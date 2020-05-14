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
  endAuctionDate: '1590325664',
  raisedAmount: '70,000.00',
  targetAmount: '100,000.00',
  raiseInvestmentAmount: '10',
};

const propsSecond = {
  logo: 'logo',
  endAuctionDate: '1590325664',
  raisedAmount: '51,320.00',
  targetAmount: '80,000.00',
  raiseInvestmentAmount: '10',
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
