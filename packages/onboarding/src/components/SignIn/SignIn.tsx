import React, { useContext } from 'react';
import { IContext } from '../types';
import AppContext from '../App.context';
import AuthenticationMethods from '../AuthenticationMethods/AuthenticationMethods';
import { ChooseMethodWrapper } from './styles';
import { ChooseSignUpSignInWrapper, CallToSignIn } from '../styles';

const Signin = () => {
  const { onSetStep } = useContext<IContext>(AppContext);

  return (
    <ChooseMethodWrapper>
      <AuthenticationMethods method="Login" />
      <ChooseSignUpSignInWrapper>
        <CallToSignIn>
          Don&apos;t have an account yet?
          <button className="callToSignIn" type="button" onClick={() => onSetStep('Start')()}>
            Sign Up
          </button>
        </CallToSignIn>
      </ChooseSignUpSignInWrapper>
    </ChooseMethodWrapper>
  );
};

export default Signin;
