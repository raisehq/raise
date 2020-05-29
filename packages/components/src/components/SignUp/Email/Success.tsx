import React from 'react';
import { Icon } from 'semantic-ui-react';
import { SignUpResponseContainer, SignUpResponseTitle, SignUpResponseSubText } from '../styles';

const Success = () => (
  <SignUpResponseContainer>
    <Icon name="envelope" size="huge" />
    <SignUpResponseTitle>Check your email</SignUpResponseTitle>
    <SignUpResponseSubText>
      Check your inbox to verify your email address and access Raise on desktop device. We are
      working to integrate a Web3 wallet provider that’s compatible with mobile
    </SignUpResponseSubText>
  </SignUpResponseContainer>
);

export default Success;
