import React from 'react';
import styled from 'styled-components';
import { SubheaderProps, Route } from '../interfaces';
import { Navigation, SubItem } from '../styles';
import { SubBar } from './SubHeader.styles';
import routeMapper from '../routeMapper';

const SubHeaderRaw: React.FC<SubheaderProps> = ({ routes, ...props }: SubheaderProps) => {
  const generatedLinks = routes.map(routeMapper(SubItem));

  return (
    <SubBar {...props}>
      <Navigation>{generatedLinks}</Navigation>
    </SubBar>
  );
};

const SubHeader = styled(SubHeaderRaw)<SubheaderProps>``;

export default SubHeader;
