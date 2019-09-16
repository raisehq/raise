import React, { useContext } from 'react';
import {
  Header,
  HeaderWrapper,
  HeaderGroup,
  HeaderLogo,
  HeaderMenu,
  HeaderLogout,
  HeaderMenuItem
} from './DesktopHeader.styles';
import { AppContext } from '../App';

const DesktopHeader = () => {
  const { history }: any = useContext(AppContext);

  return (
    <Header>
      <HeaderWrapper>
        <HeaderGroup>
          <HeaderLogo onClick={() => history.push('/')}>
            <img src="https://static.herodev.es/images/logo.svg" />
          </HeaderLogo>
          <HeaderMenu>
            <HeaderMenuItem>Get Started</HeaderMenuItem>
            <HeaderMenuItem>My activity</HeaderMenuItem>
          </HeaderMenu>
        </HeaderGroup>
        <HeaderGroup className="right">
          lolens molens
          <HeaderLogout />
        </HeaderGroup>
      </HeaderWrapper>
    </Header>
  );
};

export default DesktopHeader;
