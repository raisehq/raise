import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import SubHeader from './SubHeader';
import SubPageHeader from './SubPageHeader';
import { HeaderProps } from './interfaces';

const Bar = styled.div`
  height: 72px;
  display: flex;
  padding: 0px 1em;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  align-items: center;

  @media screen and ${device.tablet} {
    padding: 0 8em;
  }
`;

const Header: React.SFC<HeaderProps> = ({ children, logo, routes, pageRoutes }) => (
  <div>
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
  </div>
);

export default Header;
