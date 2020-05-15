import React from 'react';
import { SubHeader, SubPageHeader, TopHeader, HeaderProps } from '@raisehq/components';
import { RawHeader } from './RawHeader.styles';

const HeaderBasic: React.SFC<HeaderProps> = ({ children, logo, routes, pageRoutes, ...rest }) => (
  <RawHeader {...rest}>
    <TopHeader logo={logo}>{children}</TopHeader>
    <SubHeader routes={routes} />
    {!!pageRoutes.length && <SubPageHeader routes={pageRoutes} />}
  </RawHeader>
);

export default HeaderBasic;
