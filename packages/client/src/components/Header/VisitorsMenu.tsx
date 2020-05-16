import React from 'react';
import { Button } from '@raisehq/components';
import { isMobile } from 'react-device-detect';
import { useRootContext } from '../../contexts/RootContext';
import {
  SignupButton,
  ButtonWrapper,
  MobileLinkWrapper,
  LinkContainer
} from './VisitorsMenu.styles';
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
        <button type="button" onClick={openLogin}>Login</button>
      </LinkContainer>
      <LinkContainer>
        <button type="button" onClick={openSignUp}>Sign Up</button>
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
