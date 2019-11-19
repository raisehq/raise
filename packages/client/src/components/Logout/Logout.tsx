import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import AppContext from '../AppContext';

export const Logout = props => {
  const {
    actions: {
      auth: { onSignout }
    }
  }: any = useContext(AppContext);

  return (
    <Button onClick={onSignout} {...props}>
      Log out
    </Button>
  );
};
