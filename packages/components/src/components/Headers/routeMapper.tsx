import React from 'react';
import { Route } from './interfaces';

const routeMapper = (Parent) => ({ title, path, component: Component }: Route) => (
  <Parent key={title}>
    <Component key={path} to={path} title={title} />
  </Parent>
);

export default routeMapper;
