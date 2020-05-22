import React from 'react';
import { Button, MobileButtonLink } from '@raisehq/components';
import { MobileView, DefaultView } from '../MediaQueries';
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

  return (
    <>
      {/** Mobile view */}
      <MobileView>
        <MobileLinkWrapper>
          <LinkContainer>
            <MobileButtonLink onClick={openLogin} text="Login" />
          </LinkContainer>
          <LinkContainer>
            <MobileButtonLink onClick={openSignUp} text="Sign Up" />
          </LinkContainer>
        </MobileLinkWrapper>
      </MobileView>
      {/** Desktop view */}
      <DefaultView>
        <ButtonWrapper>
          <Button text="Log in" type="tertiary" size="small" onClick={openLogin} />
          <SignupButton text="Sign up" type="secondary" size="small" onClick={openSignUp} />
        </ButtonWrapper>
      </DefaultView>
    </>
  );
};

export default VisitorsMenu;
