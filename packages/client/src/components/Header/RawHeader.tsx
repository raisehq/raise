import React from 'react';
import { SubHeader, SubPageHeader, TopHeader, HeaderProps } from '@raisehq/components';
import { RawHeader } from './RawHeader.styles';

const HeaderBasic: React.SFC<HeaderProps> = ({
  children,
  logo,
  disabled = false,
  routes,
  pageRoutes,
  ...rest
}) => (
  <RawHeader {...rest}>
    <TopHeader logo={logo}>{children}</TopHeader>
    {!disabled && <SubHeader routes={routes} />}
    {!disabled && !!pageRoutes.length && <SubPageHeader routes={pageRoutes} />}
  </RawHeader>
);

export default HeaderBasic;
