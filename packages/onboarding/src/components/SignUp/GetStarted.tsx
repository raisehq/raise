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
import { redirectFromBloomApp } from '../../services';
import { Image } from 'semantic-ui-react';
import LocalData from '../localData';
import { verifyBloomLogin } from '../../services';
import useInterval from '../../hooks/useInterval';

const GetStarted = () => {
  const { onSetStep, onLoginWithBloom } = useContext<IContext>(AppContext);

  useInterval(async () => {
    if (window.location.href.includes('bloom')) {
      const path = window.location.search.split('=');
      const token = path[path.length - 1];
      const response = await verifyBloomLogin(token);
      response.fold(
        error => {
          console.log(error);
        },
        response => {
          const {
            data: {
              data: { result }
            }
          } = response;

          if (result.id) {
            onLoginWithBloom(result);
          }
        }
      );
    }
  }, 3000);

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
