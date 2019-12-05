import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Header,
  HeaderWrapper,
  HeaderGroup,
  HeaderLogo,
  HeaderMenu,
  HeaderLogout,
  HeaderMenuItem,
  RaiseHeader
} from './DesktopHeader.styles';
import Balance from '../Balance';
import Web3Address from '../Web3Address';
import theme from '../../theme';
import AppContext from '../AppContext';
import useMenuVisibility from '../../hooks/useMenuVisibility';
import MyAccountButton from './MyAccountButton';
import { HEADER_MENU_SIZE } from '../../commons/constants';
import TopBanner from '../TopBanner';

const DesktopHeader = () => {
  const [isSticky, setSticky]: any = useState(false);
  const ref: any = useRef(null);
  const {
    history,
    onSetGetStarted,
    store: { user }
  }: any = useContext(AppContext);
  const {
    details: { kyc_status, accounttype_id }
  } = user;
  const enableKyc = accounttype_id === 2;
  const enabledHeight = kyc_status !== 3;

  const visible = useMenuVisibility();
  const onKYC = () => history.push('/kyc');
  const scrollToTop = () => scroll.scrollToTop();

  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top < 0);
  };

  const navigateAndScroll = () => {
    history.push('/');
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return visible ? (
    <HeaderWrapper ref={ref} enabledHeight={enabledHeight}>
      <Header sticky={isSticky} enabledHeight={enabledHeight}>
        <TopBanner kycStatus={kyc_status} enabled={enableKyc} action={onKYC} />
        <RaiseHeader>
          <HeaderGroup>
            <HeaderLogo onClick={() => history.push('/')}>
              <img src={`${theme.resources}/images/logo.svg`} />
            </HeaderLogo>
            <HeaderMenu>
              {user.details.accounttype_id === 1 ? (
                <HeaderMenuItem onClick={() => history.push('/create-loan')}>
                  Create loan
                </HeaderMenuItem>
              ) : (
                  <Link
                    to="toGetStarted"
                    spy
                    smooth
                    duration={500}
                    offset={HEADER_MENU_SIZE.toGetStarted}
                  >
                    <HeaderMenuItem onClick={onSetGetStarted}>Get Started</HeaderMenuItem>
                  </Link>
                )}
              <HeaderMenuItem>
                <Link
                  onClick={() => history.location.pathname !== '/' && navigateAndScroll()}
                  to="myActivity"
                  spy
                  smooth
                  duration={500}
                  offset={HEADER_MENU_SIZE.myActivity}
                >
                  My activity
                </Link>
              </HeaderMenuItem>
            </HeaderMenu>
          </HeaderGroup>
          <HeaderGroup className="right">
            <Balance />
            <Web3Address />
            <MyAccountButton />
            <HeaderLogout />
          </HeaderGroup>
        </RaiseHeader>
      </Header>
    </HeaderWrapper>
  ) : null;
};

export default DesktopHeader;
