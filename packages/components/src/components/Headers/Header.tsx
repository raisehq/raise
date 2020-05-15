import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from './interfaces';
import { NavBar } from './Header.styles';

import TopHeader from './SubHeaders/TopHeader';
import SubHeader from './SubHeaders/SubHeader';
import SubPageHeader from './SubHeaders/SubPageHeader';

const HeaderRaw: React.SFC<HeaderProps> = ({
  children,
  logo,
  routes,
  disabled = false,
  pageRoutes,
  ...rest
}) => (
  <NavBar {...rest}>
    <TopHeader logo={logo}>{children}</TopHeader>
    {!disabled && <SubHeader routes={routes} />}
    {!disabled && !!pageRoutes.length && <SubPageHeader routes={pageRoutes} />}
  </NavBar>
);

const Header = styled(HeaderRaw)``;

export default Header;
