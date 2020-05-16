import React from 'react';
import { isMobile } from 'react-device-detect';
import { Button, Link } from '@raisehq/components';
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
        <Link onClick={openLogin} text="Login" />
      </LinkContainer>
      <LinkContainer>
        <Link onClick={openSignUp} text="Sign Up" />
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
