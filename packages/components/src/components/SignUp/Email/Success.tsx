import React from 'react';
import { Icon } from 'semantic-ui-react';
import { SignUpResponseContainer, SignUpResponseTitle, SignUpResponseSubText } from '../styles';

const Success = () => (
  <SignUpResponseContainer>
    <Icon name="envelope" size="huge" />
    <SignUpResponseTitle>Check your email</SignUpResponseTitle>
    <SignUpResponseSubText>
      Check your inbox to verify your email address. Note that for the time being you will need a desktop browser to access Raise. 
    </SignUpResponseSubText>
  </SignUpResponseContainer>
);

export default Success;
