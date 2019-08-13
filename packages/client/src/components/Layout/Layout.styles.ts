import styled from 'styled-components';
import theme from '../../theme';
import { device } from '../LayoutV2/breakpoints';

export const HeroLayout = styled('div')`
  width: 100%;
  height: 100%;

  > .content {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background: ${theme.colors.background};
    box-sizing: border-box;
    padding: 20px;
    @media ${device.laptop} {
      padding-left: 300px;
    }
  }
`;

export const Separator = styled('div')`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: #ffffff;
`;
