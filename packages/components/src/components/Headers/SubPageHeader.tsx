import React from 'react';
import styled from 'styled-components';
import { SubheaderProps, Route } from './interfaces';
import { Navigation } from './styles';

const SubBar = styled.div`
  height: 44px;
  display: flex;
  background: white;
  border: 1px solid #d8d9dc;
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

const SubPageHeaderRaw: React.FC<SubheaderProps> = ({ routes, ...props }: SubheaderProps) => {
  const routeMapper = routes.map(({ title, path, component }: Route) => {
    const body = React.createElement(component, { key: path, to: path, title });
    return <SubItem key={title}>{body}</SubItem>;
  });

  return (
    <SubBar {...props}>
      <Navigation>{routeMapper}</Navigation>
    </SubBar>
  );
};

const SubPageHeader = styled(SubPageHeaderRaw)<SubheaderProps>``;

export default SubPageHeader;
