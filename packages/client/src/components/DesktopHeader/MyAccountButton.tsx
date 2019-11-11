import React from 'react';
import { LinkContent } from './DesktopHeader.styles';
import { Button, Icon } from 'semantic-ui-react';

const MyAccountButton = () => (
  <LinkContent to="/account">
    <Button basic icon>
      <Icon name="user" />
    </Button>
  </LinkContent>
);

export default MyAccountButton;
