import React from 'react';
import styled from 'styled-components';
import { SubBar } from './styles';
import { TopHeaderProps } from './interfaces';

const Bar = styled(SubBar)`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  padding: 0px 10px;
`;
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

const TopHeader = styled(TopHeaderNotStyled)<TopHeaderProps>``;

export default TopHeader;
