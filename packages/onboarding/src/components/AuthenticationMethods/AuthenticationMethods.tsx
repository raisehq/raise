import React, { useContext, useEffect, useState, Fragment } from 'react';
import { Image } from 'semantic-ui-react';
import {
  ChooseMethodWrapper,
  ChooseMethodButtonList,
  ChooseMethodSubtitleWrapper,
  ChooseMethodSubTitle
} from './styles';
import { IContext, Steps } from '../types';
import AppContext from '../App.context';
import { Button, BloomButton } from '@raisehq/components';

const AuthenticationMethods = ({ method }) => {
  const { onSetStep, onSetStepWithParam } = useContext<IContext>(AppContext);

  return (
    <ChooseMethodWrapper>
      <ChooseMethodSubtitleWrapper>
        <ChooseMethodSubTitle>Select how you want to {method.toLowerCase()}</ChooseMethodSubTitle>
      </ChooseMethodSubtitleWrapper>
      <ChooseMethodButtonList>
        <Button
          idAttr="btn-sign-in-email"
          onClick={() => onSetStep(method === 'Sign Up' ? 'SignUpWithEmail' : 'SignInWithEmail')()}
          size="large"
          type="secondary"
          text={`with Email`}
          fullWidth={true}
        />
        <BloomButton
          onClick={() =>
            onSetStepWithParam(method === 'Sign Up' ? 'SignUpWithBloom' : 'SignInWithBloom')('')()
          }
          size="large"
          text={`with`}
          fullWidth={true}
        />
      </ChooseMethodButtonList>
    </ChooseMethodWrapper>
  );
};

export default AuthenticationMethods;
