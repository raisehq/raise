import styled from 'styled-components';
import theme from '../../theme';

export const HeroLayout = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;

  .menu {
    flex: 0 0 280px;
    background: ${theme.colors.main};
  }

  .content {
    max-width: 735px;
    background: ${theme.colors.background};
    box-sizing: border-box;
  }

  .logo {
    width: 100%;
    height: 177px;
  }
`;

export const Separator = styled('div')`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: #ffffff;
`;
