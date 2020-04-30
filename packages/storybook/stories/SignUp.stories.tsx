import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { SignUp } from '@raisehq/components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;
storiesOf('SignUp', module).add('SignUp', () => (
  <Wrapper>
    <SignUp onSignUp={() => {}} checkEmail={() => {}} SignUpId="test" />
  </Wrapper>
));
