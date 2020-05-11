import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import { SubheaderProps, Route } from './interfaces';

const SubBar = styled.div`
  height: 44px;
  display: flex;
  padding: 0px 1em;
  background: #eb3f93;

  @media screen and ${device.tablet} {
    padding: 0 8em;
  }
`;

const SubItem = styled.div`
  height: 44px;
  background: #eb3f93;
  color: white;
  padding: 10px 14px;
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
