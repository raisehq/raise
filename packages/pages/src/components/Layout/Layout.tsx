import React from 'react';
import { Footer } from '@raisehq/components';
import { isMobile } from 'react-device-detect';
import { HeroLayout } from './Layout.styles';
import GatsbyHeader from '../GatsbyHeader';
import Cookies from '../Cookies';

interface IDefaultProps {
  children: any;
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<IDefaultProps> = ({ children }: any) => (
  <HeroLayout>
    <GatsbyHeader />
    {children}
    <Footer isMobile={isMobile} />
    <Cookies />
  </HeroLayout>
);

export default Layout;
