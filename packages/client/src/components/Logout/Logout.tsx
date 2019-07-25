import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { AppContext } from '../App';

export const Logout = (props) => {
  const {
    actions: {
      auth: { onSignout }
    }
  }: any = useContext(AppContext);

  return (
    <Button onClick={onSignout} {...props}>
      Logout
    </Button>
  );
} 