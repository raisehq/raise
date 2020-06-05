import React from 'react';
import { Icon } from 'semantic-ui-react';
import { ConfirmWrapper, ConfirmHeader, ConfirmText } from './styles';

const Confirm = () => (
  <ConfirmWrapper>
    <Icon name="envelope" size="huge" />
    <ConfirmHeader>Check your inbox!</ConfirmHeader>
    <ConfirmText>
      Check your inbox to verify your email address. Note that for the time being you will need a
      desktop browser to access Raise.
    </ConfirmText>
  </ConfirmWrapper>
);

export default Confirm;
