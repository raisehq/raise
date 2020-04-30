import React from 'react';
import { Icon } from 'semantic-ui-react';
import { LinkContent, ButtonMyAccount } from './DesktopHeader.styles';

const MyAccountButton = () => (
  <LinkContent to="/account">
    <ButtonMyAccount basic icon>
      <Icon name="user" />
    </ButtonMyAccount>
  </LinkContent>
);

export default MyAccountButton;
