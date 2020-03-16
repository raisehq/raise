import React, { useContext } from 'react';
import AppContext from '../App.context';
import { IContext } from '../types';
import { ChooseMethodWrapper, ChooseSignUpSignInWrapper, CallToSignIn } from '../styles';
import AuthenticationMethods from '../AuthenticationMethods/AuthenticationMethods';

const GetStarted = () => {
  const { onSetStep } = useContext<IContext>(AppContext);

  return (
    <ChooseMethodWrapper>
      <AuthenticationMethods method={'Sign Up'} />
      <ChooseSignUpSignInWrapper>
        <CallToSignIn>
          Already have an account?
          <button className="callToSignIn" type="button" onClick={() => onSetStep('SignIn')()}>
            Sign In
          </button>
        </CallToSignIn>
      </ChooseSignUpSignInWrapper>
    </ChooseMethodWrapper>
  );
};

export default GetStarted;
