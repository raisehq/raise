import React, { useContext } from 'react';
import { Image } from 'semantic-ui-react';
import {
  ChooseMethodWrapper,
  ChooseMethodButtonList,
  ChooseMethodButton,
  ChooseBloomMethodButton,
  ChooseMethodSubtitleWrapper,
  ChooseMethodSubTitle
} from './styles';
import { IContext } from '../types';
import AppContext from '../App.context';

const AuthenticationMethods = ({ method }) => {
  const { onSetStep, onSetStepWithParam } = useContext<IContext>(AppContext);

  return (
    <ChooseMethodWrapper>
      <ChooseMethodSubtitleWrapper>
        <ChooseMethodSubTitle>Select how you want to {method.toLowerCase()}</ChooseMethodSubTitle>
      </ChooseMethodSubtitleWrapper>
      <ChooseMethodButtonList>
        <ChooseMethodButton
          id="btn-sign-in-email"
          onClick={() => onSetStep(method === 'Sign Up' ? 'SignUpWithEmail' : 'SignInWithEmail')()}
        >
          {method} with email
        </ChooseMethodButton>
        <ChooseBloomMethodButton
          onClick={() =>
            onSetStepWithParam(method === 'Sign Up' ? 'SignUpWithBloom' : 'SignInWithBloom')('')()
          }
        >
          <span>{method} with</span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </ChooseBloomMethodButton>
      </ChooseMethodButtonList>
    </ChooseMethodWrapper>
  );
};

export default AuthenticationMethods;
