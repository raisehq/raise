import React, { useContext } from 'react';
import { Button, BloomButton } from '@raisehq/components';
import {
  ChooseMethodWrapper,
  ChooseMethodButtonList,
  ChooseMethodSubtitleWrapper,
  ChooseMethodSubTitle
} from './styles';
import { IContext } from '../types';
import AppContext from '../App.context';

const AuthenticationMethods = ({ method }: { method: string }) => {
  const { onSetStep, onSetStepWithParam } = useContext<IContext>(AppContext);

  return (
    <ChooseMethodWrapper>
      <ChooseMethodSubtitleWrapper>
        <ChooseMethodSubTitle>Select how to {method.toLowerCase()}</ChooseMethodSubTitle>
      </ChooseMethodSubtitleWrapper>
      <ChooseMethodButtonList>
        <Button
          idAttr="btn-sign-in-email"
          onClick={() => onSetStep(method === 'Sign Up' ? 'SignUpWithEmail' : 'SignInWithEmail')()}
          size="large"
          type="secondary"
          text="with Email"
          fullWidth
        />
        <BloomButton
          onClick={() =>
            onSetStepWithParam(method === 'Sign Up' ? 'SignUpWithBloom' : 'SignInWithBloom')('')()
          }
          size="large"
          text="with"
          fullWidth
        />
      </ChooseMethodButtonList>
    </ChooseMethodWrapper>
  );
};

export default AuthenticationMethods;
