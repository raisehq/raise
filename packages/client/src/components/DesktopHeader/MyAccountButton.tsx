import React from 'react';
import { LinkContent, ButtonMyAccount } from './DesktopHeader.styles';
import { Icon } from 'semantic-ui-react';

const MyAccountButton = () => (
  <LinkContent to="/account">
    <ButtonMyAccount basic icon>
      <Icon name="user" />
    </ButtonMyAccount>
  </LinkContent>
);

export default MyAccountButton;
