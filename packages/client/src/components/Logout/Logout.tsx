import React, { useContext, useCallback } from 'react';
import { Button } from 'semantic-ui-react';
import AppContext from '../AppContext';
import { getHost } from '../../utils/index';
import { SignupButton, LoginButton } from './Logout.styles';

const Logout = ({ onLogin, onSignup, ...props }: any) => {
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

  const goToLogin = useCallback(() => {
    if (onLogin) return onLogin();
    window.location.href = `${getHost('APP')}/login`;
  }, []);
  const goToSignup = useCallback(() => {
    if (onSignup) return onSignup();
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
      <LoginButton onClick={goToLogin} {...props}>
        Log in
      </LoginButton>
      <SignupButton onClick={goToSignup} {...props}>
        Sign up
      </SignupButton>
    </>
  );
};
export default Logout;
