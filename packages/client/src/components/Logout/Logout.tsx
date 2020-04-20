import React, { useCallback } from 'react';
import { getHost } from '../../utils/index';
import { SignupButton, LoginButton, LogoutButton } from './Logout.styles';
import { useRootContext } from '../../contexts/RootContext';

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
  }: any = useRootContext();

  const goToLogin = useCallback(() => {
    if (onLogin) return onLogin();
    window.location.href = `${getHost('APP')}/login`;
    return true;
  }, []);
  const goToSignup = useCallback(() => {
    if (onSignup) return onSignup();
    window.location.href = `${getHost('APP')}/join`;
    return true;
  }, []);

  if (isLogged) {
    return (
      <LogoutButton onClick={onSignout} {...props}>
        Log out
      </LogoutButton>
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
