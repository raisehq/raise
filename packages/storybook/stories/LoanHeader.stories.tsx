import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LoanHeader } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
`;

const props = {
  logo: 'logo',
  endAuctionDate: '1590325664',
  raisedAmount: '70,000.00',
  targetAmount: '100,000.00',
  raiseInvestmentAmount: '10',
};

storiesOf('LoanHeader', module).add('Loan Header', () => (
  <Wrapper>
    <LoanHeader {...props} />
  </Wrapper>
));
