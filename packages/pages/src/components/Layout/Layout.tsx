import React from 'react';
import { Footer } from '@raisehq/components';
import { HeroLayout } from './Layout.styles';

interface IDefaultProps {
  children: any;
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<IDefaultProps> = ({ children }: any) => (
  <HeroLayout>
    {children}
    <Footer />
  </HeroLayout>
);

export default Layout;
