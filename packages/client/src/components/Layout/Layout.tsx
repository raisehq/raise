import React from 'react';
import Menu from '../Menu';
import { HeroLayout, Separator } from './Layout.styles';
import Web3Address from '../Web3Address';

const Layout = ({ children }) => (
  <HeroLayout>
    <div className="menu">
      <div className="logo" />
      <Web3Address />
      <Menu />
      <Separator />
    </div>
    <div className="content">{children}</div>
  </HeroLayout>
);

export default Layout;
