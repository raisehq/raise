import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LoanInformation } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
`;

const props = {
  erc20Logo: 'coin-dai.svg',
  currency: 'DAI',
  currentAPR: '16.4%',
  investorsCount: 6,
  loanTerm: '160 days',
  repaymentMethod: 'Bullet',
};

storiesOf('LoanInformation', module).add('Loan Information', () => (
  <Wrapper>
    <LoanInformation {...props} />
  </Wrapper>
));
