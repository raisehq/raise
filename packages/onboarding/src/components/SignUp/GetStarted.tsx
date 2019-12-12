import React, { useContext } from 'react';
import AppContext from '../App.context';
import {
  ChooseSignUpWrapper,
  ChooseSignUpSignInWrapper,
  ChooseSignUpButtonList,
  ChooseSignUpSubtitleWrapper,
  ChooseSignUpSubTitle,
  CallToSignIn,
  OnboardButton
} from '../styles';

const GetStarted = () => {
  const { onSetStep } = useContext<IContext>(AppContext);

  return (
    <ChooseSignUpWrapper>
      <ChooseSignUpSubtitleWrapper>
        <ChooseSignUpSubTitle>Select how you want to Get Started</ChooseSignUpSubTitle>
      </ChooseSignUpSubtitleWrapper>
      <ChooseSignUpButtonList>
        <OnboardButton onClick={() => onSetStep('SignUpWithEmail')()}>
          Sign up with Email
        </OnboardButton>
        <OnboardButton>Sign With Bloom</OnboardButton>
      </ChooseSignUpButtonList>

      <ChooseSignUpSignInWrapper>
        <CallToSignIn>
          Already have an account?
          <button className="callToSignIn" type="button" onClick={() => {}}>
            Sign In
          </button>
        </CallToSignIn>
      </ChooseSignUpSignInWrapper>
    </ChooseSignUpWrapper>
  );
};

export default GetStarted;
