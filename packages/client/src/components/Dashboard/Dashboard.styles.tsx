import styled from 'styled-components';
import { Tab } from 'semantic-ui-react';
import theme from '../../theme';

export const DashboardTab: any = styled(Tab)`
  margin-bottom: 25px;

  &&& .ui.secondary.pointing.menu .active.item {
    border-color: ${theme.colors.complementary};
  }

  &&& .ui.secondary.pointing.menu {
    border-bottom: none;
    margin-bottom: 35px;
  }

  &&& .ui.secondary.pointing.menu .item {
    padding: 0 0 15px 0;
    margin-right: 25px;
  }

  &&& .ui.segment {
    background: none;
    padding: 0;
  }

  &&& .ui.attached.segment {
    border: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  display: block-inline;
  padding: 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #8c96a9;
  color: #3c4251;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
`;
