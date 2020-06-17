import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ReferralProgram } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
`;

const props = {
  shareLink: 'https://raise.it/referral/65415465',
  totalCount: 135,
  withdrawAction: () => {},
  amountToWithdraw: '50000000000000000000',
  coin: {
    address: '0x463E69954EeE4463c2F1b11e7e3FF2cDb4bb8967',
    decimals: 18,
    icon: 'coin-dai.svg',
    key: '0',
    text: 'DAI',
    value: 'DAI',
  },
  kycStatus: 3,
};

storiesOf('ReferralProgram', module).add('Referral Program', () => (
  <Wrapper>
    <ReferralProgram {...props} />
  </Wrapper>
));
