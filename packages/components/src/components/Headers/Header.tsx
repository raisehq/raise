import React from 'react';
import styled from 'styled-components';
import SubHeader from './SubHeader';
import SubPageHeader from './SubPageHeader';
import { HeaderProps } from './interfaces';
import TopHeader from './TopHeader';

const HeaderRaw: React.SFC<HeaderProps> = ({ children, logo, routes, pageRoutes, ...rest }) => (
  <div {...rest}>
    <TopHeader logo={logo}>{children}</TopHeader>
    <SubHeader routes={routes} />
    {!!pageRoutes.length && <SubPageHeader routes={pageRoutes} />}
  </div>
);

const Header = styled(HeaderRaw)`
  width: 100%;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.25);
`;

export default Header;
