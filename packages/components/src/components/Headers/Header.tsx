import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from './interfaces';
import { NavBar } from './Header.styles';

import TopHeader from './SubHeaders/TopHeader';
import SubHeader from './SubHeaders/SubHeader';
import SubPageHeader from './SubHeaders/SubPageHeader';

const HeaderRaw: React.SFC<HeaderProps> = ({ children, logo, routes, pageRoutes, ...rest }) => (
  <NavBar {...rest}>
    <TopHeader logo={logo}>{children}</TopHeader>
    <SubHeader routes={routes} />
    {!!pageRoutes.length && <SubPageHeader routes={pageRoutes} />}
  </NavBar>
);

const Header = styled(HeaderRaw)``;

export default Header;
