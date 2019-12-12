import React, { useContext } from 'react';
import AppContext from '../App.context';
import {
  ChooseSignUpWrapper,
  ChooseSignUpSignInWrapper,
  ChooseSignUpButtonList,
  ChooseSignUpSubtitleWrapper,
  ChooseSignUpSubTitle,
  CallToSignIn,
  ChooseSignUpButton
} from '../styles';

const GetStarted = () => {
  const { onSetStep } = useContext<IContext>(AppContext);

  return (
    <ChooseSignUpWrapper>
      <ChooseSignUpSubtitleWrapper>
        <ChooseSignUpSubTitle>Select how you want to Get Started</ChooseSignUpSubTitle>
      </ChooseSignUpSubtitleWrapper>
      <ChooseSignUpButtonList>
        <ChooseSignUpButton onClick={() => onSetStep('SignUpWithEmail')()}>
          Sign up with Email
        </ChooseSignUpButton>
        <ChooseSignUpButton>Sign With Bloom</ChooseSignUpButton>
      </ChooseSignUpButtonList>

      <ChooseSignUpSignInWrapper>
        <CallToSignIn>
          Already have an account?
          <button className="callToSignIn" type="button" onClick={() => onSetStep('SignIn')()}>
            Sign In
          </button>
        </CallToSignIn>
      </ChooseSignUpSignInWrapper>
    </ChooseSignUpWrapper>
  );
};

export default GetStarted;
