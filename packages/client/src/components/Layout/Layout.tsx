import React from 'react';
import Menu from '../Menu';
import { HeroLayout, Separator } from './Layout.styles';
import Web3Address from '../Web3Address';
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
      <div className="menu">
        <div className="logo" />
        <Web3Address />
        <Menu />
        <Separator />
      </div>
      <div className="content">
        <Component {...matchProps} />
      </div>
    </HeroLayout>
  )} />
};

export default Layout;
