import React from 'react';
import styled from 'styled-components';
import { Bar, LogoWrapper } from './TopHeader.styles';
import { TopHeaderProps } from '../interfaces';

const TopHeaderNotStyled: React.SFC<TopHeaderProps> = ({ logo, children, ...rest }) => (
  <Bar {...rest}>
    <LogoWrapper>
      <a href="/">
        <img src={logo.src} alt={logo.alt} />
      </a>
    </LogoWrapper>
    <div>{children}</div>
  </Bar>
);

// This component is a Wrapped styled so margins and grid prosition
// can be edited easily in the main component at Header, outside of this library
const TopHeader = styled(TopHeaderNotStyled)<TopHeaderProps>``;

export default TopHeader;
