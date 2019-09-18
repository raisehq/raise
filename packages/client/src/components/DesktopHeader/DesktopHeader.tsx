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
import theme from '../../theme';
import { AppContext } from '../App';

const DesktopHeader = () => {
  const { history }: any = useContext(AppContext);

  return (
    <Header>
      <HeaderWrapper>
        <HeaderGroup>
          <HeaderLogo onClick={() => history.push('/')}>
            <img src={`${theme.resources}/images/logo.svg`} />
          </HeaderLogo>
          <HeaderMenu>
            <HeaderMenuItem>Get Started</HeaderMenuItem>
            <HeaderMenuItem onClick={() => history.push('/create-loan')}>
              My activity
            </HeaderMenuItem>
          </HeaderMenu>
        </HeaderGroup>
        <HeaderGroup className="right">
          WIDGET
          <HeaderLogout />
        </HeaderGroup>
      </HeaderWrapper>
    </Header>
  );
};

export default DesktopHeader;
