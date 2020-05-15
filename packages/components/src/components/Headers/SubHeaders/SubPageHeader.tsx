import React from 'react';
import styled from 'styled-components';
import { SubheaderProps } from './interfaces';
import { Navigation } from './styles';
import { SubBar, SubItem } from './SubPageHeader.styles';
import routeMapper from './RouteMapper';

const SubPageHeaderRaw: React.FC<SubheaderProps> = ({ routes, ...props }) => {
  const generatedLinks = routes.map(routeMapper(SubItem));
  return (
    <SubBar {...props}>
      <Navigation>{generatedLinks}</Navigation>
    </SubBar>
  );
};

const SubPageHeader = styled(SubPageHeaderRaw)<SubheaderProps>``;

export default SubPageHeader;
