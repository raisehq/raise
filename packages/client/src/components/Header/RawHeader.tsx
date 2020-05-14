import React from 'react';
import styled from 'styled-components';
import { SubHeader, SubPageHeader, TopHeader, HeaderProps } from '@raisehq/components';

const HeaderBasic: React.SFC<HeaderProps> = ({ children, logo, routes, pageRoutes, ...rest }) => (
  <div {...rest}>
    <TopHeader logo={logo}>{children}</TopHeader>
    <SubHeader routes={routes} />
    {!!pageRoutes.length && <SubPageHeader routes={pageRoutes} />}
  </div>
);

const RawHeader = styled(HeaderBasic)`
  width: 100%;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.26);
`;

export default RawHeader;
