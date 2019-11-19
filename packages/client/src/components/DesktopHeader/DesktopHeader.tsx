import React, { useContext } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Header,
  HeaderWrapper,
  HeaderGroup,
  HeaderLogo,
  HeaderMenu,
  HeaderLogout,
  HeaderMenuItem
} from './DesktopHeader.styles';
import Balance from '../Balance';
import Web3Address from '../Web3Address';
import theme from '../../theme';
import AppContext from '../AppContext';
import useMenuVisibility from '../../hooks/useMenuVisibility';
import MyAccountButton from './MyAccountButton';
import { HEADER_MENU_SIZE } from '../../commons/constants';

const DesktopHeader = () => {
  const {
    history,
    onSetGetStarted,
    store: { user }
  }: any = useContext(AppContext);
  const visible = useMenuVisibility();

  const scrollToTop = () => scroll.scrollToTop();

  const navigateAndScroll = () => {
    history.push('/');
    scrollToTop();
  };

  return visible ? (
    <Header>
      <HeaderWrapper>
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
      </HeaderWrapper>
    </Header>
  ) : null;
};

export default DesktopHeader;
