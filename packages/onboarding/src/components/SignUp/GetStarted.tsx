import React, { useContext } from 'react';
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
import { redirectFormBloomApp } from '../../services';
import { Image } from 'semantic-ui-react';
import LocalData from '../localData';
import useAsyncEffect from '../../hooks/useAsyncEffect';

const GetStarted = () => {
  const { onSetStep, history } = useContext<IContext>(AppContext);

  useAsyncEffect(async () => {
    const auth = LocalData.getObj('auth');
    if (auth && auth.token) {
      window.location.href = redirectFormBloomApp();
    }
  }, [history.location.pathname]);

  return (
    <ChooseSignUpWrapper>
      <ChooseSignUpSubtitleWrapper>
        <ChooseSignUpSubTitle>Select how you want to get started</ChooseSignUpSubTitle>
      </ChooseSignUpSubtitleWrapper>
      <ChooseSignUpButtonList>
        <ChooseSignUpButton onClick={() => onSetStep('SignUpWithEmail')()}>
          Sign Up with Email
        </ChooseSignUpButton>
        <ChooseSignUpWithBloomButton onClick={() => onSetStep('SignUpWithBloom')()}>
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
