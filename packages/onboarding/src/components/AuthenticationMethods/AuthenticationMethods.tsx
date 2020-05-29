import React, { useContext } from 'react';
import { Button, BloomButton } from '@raisehq/components';
import { Icon } from 'semantic-ui-react';
import { DefaultView as DefaultViewRaw, MobileView } from '../MediaQueries';
import {
  ChooseMethodWrapper,
  ChooseMethodButtonList,
  CenteredAlert
  // ChooseMethodSubtitleWrapper,
  // ChooseMethodSubTitle
} from './styles';
import { IContext } from '../types';
import AppContext from '../App.context';

const AuthenticationMethods = ({ method }: { method: string }) => {
  const { onSetStep, onSetStepWithParam } = useContext<IContext>(AppContext);

  const isLogin = method !== 'Sign Up';
  const isSignup = method === 'Sign Up';
  const DefaultView = isSignup ? React.Fragment : DefaultViewRaw;

  return (
    <ChooseMethodWrapper>
      <ChooseMethodButtonList>
        {isLogin && (
          <MobileView>
            <Icon name="desktop" size="huge" />
            <CenteredAlert>
              Raise is not available on mobile for now. We are working to integrate a Web3 wallet
              provider that’s compatible with a mobile device
            </CenteredAlert>
          </MobileView>
        )}
        <DefaultView>
          <Button
            idAttr="btn-sign-in-email"
            onClick={() =>
              onSetStep(method === 'Sign Up' ? 'SignUpWithEmail' : 'SignInWithEmail')()
            }
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
        </DefaultView>
      </ChooseMethodButtonList>
    </ChooseMethodWrapper>
  );
};

export default AuthenticationMethods;
