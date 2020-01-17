import React, { useContext, useEffect } from 'react';
import AppContext from '../App.context';
import { IContext } from '../types';
import {
  ChooseSignUpWrapper,
  ChooseSignUpSignInWrapper,
  ChooseSignUpButtonList,
  ChooseSignUpSubtitleWrapper,
  ChooseSignUpSubTitle,
  CallToSignIn,
  ChooseSignUpButton,
  ChooseSignUpWithBloomButton
} from '../styles';
import { Image } from 'semantic-ui-react';

const GetStarted = () => {
  const { onSetStep, onSetStepWithParam } = useContext<IContext>(AppContext);

  return (
    <ChooseSignUpWrapper>
      <ChooseSignUpSubtitleWrapper>
        <ChooseSignUpSubTitle>Select how you want to get started</ChooseSignUpSubTitle>
      </ChooseSignUpSubtitleWrapper>
      <ChooseSignUpButtonList>
        <ChooseSignUpButton onClick={() => onSetStep('SignUpWithEmail')()}>
          Sign Up with email
        </ChooseSignUpButton>
        <ChooseSignUpWithBloomButton onClick={() => onSetStepWithParam('SignUpWithBloom')('')()}>
          <span>Sign Up</span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </ChooseSignUpWithBloomButton>
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
