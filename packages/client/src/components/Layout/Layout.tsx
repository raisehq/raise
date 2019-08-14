import React from 'react';
import { Menu, TopMobileMenu } from '../Menu';
import { HeroLayout } from './Layout.styles';
import { Route } from "react-router-dom";

interface IDefaultProps {
  component: any
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<IDefaultProps> = (props) => {
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={matchProps => (
    <HeroLayout>
      <TopMobileMenu />
      <Menu />
      <div className="content">
        <Component {...matchProps} />
      </div>
    </HeroLayout>
  )} />
};

export default Layout;
