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
};

storiesOf('ReferralProgram', module).add('Referral Program', () => (
  <Wrapper>
    <ReferralProgram {...props} />
  </Wrapper>
));
