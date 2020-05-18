import React from 'react';
import { Link } from 'react-scroll';
import {
  HeaderWrapper,
  HeaderGroup,
  HeaderLogo,
  HeaderMenu,
  HeaderLogout,
  HeaderMenuItem,
  RaiseHeader
} from './DesktopHeader.styles';
import { Balance as HeaderBalance } from '../HeaderBalance';
import Web3Address from '../Web3Address';
import theme from '../../theme';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';

import useMenuVisibility from '../../hooks/useMenuVisibility';
import MyAccountButton from './MyAccountButton';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';

const DesktopHeader = () => {
  const { history }: any = useRouter();
  const {
    store: {
      user,
      auth: {
        login: { logged: isLogged }
      }
    },
    actions: {
      onboarding: { showOnboarding }
    }
  }: any = useRootContext();
  const { visible, visibleMenu } = useMenuVisibility();
  const tagManager = useGoogleTagManager();

  const openLogin = () => {
    showOnboarding('login');
  };

  const openSignup = () => {
    const isBorrowerProfile = history.location.pathname.split('/').filter((pt) => pt === 'c');
    tagManager.sendEventCategory(
      'Signup',
      TMEvents.Click,
      isBorrowerProfile ? 'borrower_profile' : 'marketplace'
    );

    showOnboarding('join');
  };

  // If there is a parent for TopBanner and HeaderWrapper,
  // it will break the sticky css rule and menu will not get fixed once scroll
  return visible ? (
    <>
      <HeaderWrapper>
        <RaiseHeader>
          <HeaderGroup>
            <HeaderLogo onClick={() => history.push('/')}>
              <img src={`${theme.resources}/images/logo.svg`} alt="Raise.it" />
            </HeaderLogo>
            {visibleMenu && (
              <HeaderMenu>
                <HeaderMenuItem>
                  <Link
                    onClick={() =>
                      history.location.pathname !== '/investing' && history.push('investing')
                    }
                    to="investing"
                    spy
                    smooth
                    duration={500}
                  >
                    Invest with Raise
                  </Link>
                </HeaderMenuItem>
                <HeaderMenuItem>
                  <Link
                    onClick={() =>
                      !history.location.pathname.includes('investmentopportunity') &&
                      history.push('investmentopportunity')
                    }
                    to="linvestmentopportunity"
                    spy
                    smooth
                    duration={500}
                  >
                    Loan of the month
                  </Link>
                </HeaderMenuItem>
                {isLogged && (
                  <>
                    {user.details.accounttype_id === 1 && (
                      <HeaderMenuItem onClick={() => history.push('/create-loan')}>
                        Create loan
                      </HeaderMenuItem>
                    )}
                  </>
                )}
              </HeaderMenu>
            )}
          </HeaderGroup>
          <HeaderGroup className="right">
            <>
              {isLogged && visibleMenu && (
                <>
                  <Web3Address border={false} />
                  <HeaderBalance />

                  <MyAccountButton />
                </>
              )}
              <HeaderLogout onLogin={openLogin} onSignup={openSignup} />
            </>
          </HeaderGroup>
        </RaiseHeader>
      </HeaderWrapper>
    </>
  ) : null;
};

export default DesktopHeader;
