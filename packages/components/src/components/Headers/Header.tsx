import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import SubHeader from './SubHeader';
import SubPageHeader from './SubPageHeader';
import { HeaderProps } from './interfaces';

const NavBar = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  height: 72px;
  display: flex;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  align-items: center;
`;

const Header: React.SFC<HeaderProps> = ({ children, logo, routes, pageRoutes, ...rest }) => (
  <NavBar {...rest}>
    <Bar>
      <div>
        <a href="/">
          <img src={logo.src} alt={logo.alt} />
        </a>
      </div>
      <div>{children}</div>
    </Bar>
    <SubHeader routes={routes} />
    {!!pageRoutes.length && <SubPageHeader routes={pageRoutes} />}
  </NavBar>
);

export default Header;
