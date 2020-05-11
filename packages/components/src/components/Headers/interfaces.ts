import React from 'react';

export interface LinkComponent {
  key?: string;
  to?: string;
  href?: string;
  title: string;
}

export interface Logo {
  alt?: string;
  src: string;
}

export interface Route {
  title: string;
  path: string;
  component:
    | React.FunctionComponent<LinkComponent>
    | React.ComponentClass<LinkComponent, any>;
}

export interface HeaderProps {
  logo: Logo;
  routes: Route[];
  pageRoutes: Route[];
  children: React.ReactChildren;
}

export interface SubheaderProps {
  routes: Route[];
}
