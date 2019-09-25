import React, { useContext } from 'react';
import { NavHashLink } from 'react-router-hash-link';
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
import { AppContext } from '../App';
import useMenuVisibility from '../../hooks/useMenuVisibility';

const DesktopHeader = () => {
  const { history, onSetGetStarted }: any = useContext(AppContext);
  const visible = useMenuVisibility();

  return visible ? (
    <Header>
      <HeaderWrapper>
        <HeaderGroup>
          <HeaderLogo onClick={() => history.push('/')}>
            <img src={`${theme.resources}/images/logo.svg`} />
          </HeaderLogo>
          <HeaderMenu>
            <HeaderMenuItem onClick={onSetGetStarted}>Get Started</HeaderMenuItem>
            <HeaderMenuItem>
              <NavHashLink
                to="/#my-activity"
                scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
              >
                My activity
              </NavHashLink>
            </HeaderMenuItem>
          </HeaderMenu>
        </HeaderGroup>
        <HeaderGroup className="right">
          <Balance />
          <Web3Address />
          <HeaderLogout />
        </HeaderGroup>
      </HeaderWrapper>
    </Header>
  ) : null;
};

export default DesktopHeader;
