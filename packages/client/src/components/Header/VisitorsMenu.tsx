import React from 'react';
import { Button } from '@raisehq/components';
import { useRootContext } from '../../contexts/RootContext';
import {
  SignupButton,
  ButtonWrapper,
  MobileLinkWrapper,
  LinkContainer
} from './VisitorsMenu.styles';
import { isMobile } from 'react-device-detect';
import useRouter from '../../hooks/useRouter';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';

const VisitorsMenu = () => {
  const { history } = useRouter();
  const tagManager = useGoogleTagManager();

  const {
    actions: {
      onboarding: { showOnboarding }
    }
  }: any = useRootContext();

  const openLogin = () => showOnboarding('login');

  const openSignUp = () => {
    const isBorrowerProfile = history.location.pathname.split('/').filter((pt) => pt === 'c');
    tagManager.sendEventCategory(
      'Signup',
      TMEvents.Click,
      isBorrowerProfile ? 'borrower_profile' : 'marketplace'
    );
    showOnboarding('join');
  };

  return isMobile ? (
    <MobileLinkWrapper>
      <LinkContainer>
        <a onClick={openLogin}>Login</a>
      </LinkContainer>
      <LinkContainer>
        <a onClick={openSignUp}>Sign Up</a>
      </LinkContainer>
    </MobileLinkWrapper>
  ) : (
    <ButtonWrapper>
      <Button
        text="Log in"
        type="tertiary"
        size={isMobile ? 'small' : 'standard'}
        onClick={openLogin}
      />
      <SignupButton
        text="Sign up"
        type="secondary"
        size={isMobile ? 'small' : 'standard'}
        onClick={openSignUp}
      />
    </ButtonWrapper>
  );
};

export default VisitorsMenu;
