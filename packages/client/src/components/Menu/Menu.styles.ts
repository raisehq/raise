import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import theme from '../../theme';

export const MenuList = styled('div')`
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    position: relative;

    a {
      display: block;
      color: #fff;
      padding: 15px 20px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  li.active {
    background: #fff;

    a {
      color: ${theme.colors.main};
    }
  }
`;

export const MenuIcon: any = styled(Icon)`
  margin-right: 20px !important;
`;

export const MenuIconActive: any = styled(Icon)`
  position: absolute;
  top: 17px;
  right: 10px;
`;
