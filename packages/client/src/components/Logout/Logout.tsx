import React, { useContext, useCallback } from 'react';
import { Button } from 'semantic-ui-react';
import AppContext from '../AppContext';
import { getHost } from '../../utils/index';
import { SignupButton, LoginButton } from './Logout.styles';

const Logout = (props: any) => {
  const {
    store: {
      auth: {
        login: { logged: isLogged }
      }
    },
    actions: {
      auth: { onSignout }
    }
  }: any = useContext(AppContext);

  const goToSignup = useCallback(() => {
    window.location.href = `${getHost('APP')}/join`;
  }, []);

  if (isLogged) {
    return (
      <Button onClick={onSignout} {...props}>
        Log out
      </Button>
    );
  }
  return (
    <>
      <LoginButton onClick={onSignout} {...props}>
        Log in
      </LoginButton>
      <SignupButton onClick={goToSignup} {...props}>
        Sign up
      </SignupButton>
    </>
  );
};
export default Logout;
