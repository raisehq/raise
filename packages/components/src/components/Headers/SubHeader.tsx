import React from 'react';
import styled from 'styled-components';
import { SubheaderProps, Route } from './interfaces';
import { SubBar as RawSubBar, Navigation, SubItem } from './styles';

const SubBar = styled(RawSubBar)`
  background: #eb3f93;
`;

const SubHeaderRaw: React.FC<SubheaderProps> = ({ routes, ...props }: SubheaderProps) => {
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

const SubHeader = styled(SubHeaderRaw)``;

export default SubHeader;
