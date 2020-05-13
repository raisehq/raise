import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import { SubheaderProps, Route } from './interfaces';

const SubBar = styled.div`
  height: 44px;
  display: flex;
  padding: 0px 1em;
  background: white;
  border: 1px solid #d8d9dc;

  @media screen and ${device.tablet} {
    padding: 0 8em;
  }
`;

const SubItem = styled.div`
  height: 24px;
  color: #8a8e97;
  background: white;
  & > *,
  & > *:hover,
  & > *:focus {
    color: #8a8e97;
    font-size: 16px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const SubPageHeader = ({ routes, ...props }: SubheaderProps) => {
  const routeMapper = routes.map(({ title, path, component }: Route) => {
    const body = React.createElement(component, { key: path, to: path, title });
    return <SubItem key={title}>{body}</SubItem>;
  });

  return <SubBar {...props}>{routeMapper}</SubBar>;
};

export default SubPageHeader;
