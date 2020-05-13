import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import { SubheaderProps, Route } from './interfaces';

const SubBar = styled.div`
  height: 44px;
  display: flex;
  background: #eb3f93;
`;

const SubItem = styled.div`
  height: 44px;
  background: #eb3f93;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background: #b40065;
  }

  & > *,
  & > *:hover,
  & > *:focus {
    color: white;
    font-size: 16px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const SubHeader = ({ routes, ...props }: SubheaderProps) => {
  const routeMapper = routes.map(({ title, path, component }: Route) => {
    const body = React.createElement(component, { key: path, to: path, title });
    return <SubItem key={title}>{body}</SubItem>;
  });

  return <SubBar {...props}>{routeMapper}</SubBar>;
};

export default SubHeader;
