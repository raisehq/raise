import React from 'react';
import { Icon } from 'semantic-ui-react';
import { ConfirmWrapper, ConfirmHeader, ConfirmText, MainImage } from './styles';

const Confirm = () => (
  <ConfirmWrapper>
    <Icon name="envelope" size="huge" />
    <ConfirmHeader>Check your inbox!</ConfirmHeader>
    <ConfirmText>
      Check your inbox to verify your email address and access Raise on desktop device. We are
      working to integrate a Web3 wallet provider that’s compatible with mobile
    </ConfirmText>
  </ConfirmWrapper>
);

export default Confirm;
