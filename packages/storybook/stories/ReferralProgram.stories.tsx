import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ReferralProgram } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
`;

storiesOf('ReferralProgram', module).add('Referral Program', () => (
  <Wrapper>
    <ReferralProgram />
  </Wrapper>
));
