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
      <AuthenticationMethods method={'Sign In'} />
      <ChooseSignUpSignInWrapper>
        <CallToSignIn>
          Don't you have an account?
          <button className="callToSignIn" type="button" onClick={() => onSetStep('Start')()}>
            Sign Up
          </button>
        </CallToSignIn>
      </ChooseSignUpSignInWrapper>
    </ChooseMethodWrapper>
  );
};

export default Signin;
