import React from 'react';
import { Footer } from '@raisehq/components';
import { HeroLayout } from './Layout.styles';
import GatsbyHeader from '../Header';

interface IDefaultProps {
  children: any;
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<IDefaultProps> = ({ children }: any) => (
  <HeroLayout>
    <GatsbyHeader />
    {children}
    <Footer />
  </HeroLayout>
);

export default Layout;
