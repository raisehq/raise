import React from 'react';
import { Button } from '@raisehq/components';
import { useRootContext } from '../../contexts/RootContext';
import { SignupButton } from './VisitorsMenu.styles';
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

  return (
    <>
      <Button text="Log in" type="tertiary" size="standard" onClick={openLogin} />
      <SignupButton text="Sign up" type="secondary" size="standard" onClick={openSignUp} />
    </>
  );
};

export default VisitorsMenu;
