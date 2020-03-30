import { Image, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

export const Container = styled(Dropdown.Item)`
  &&&&&&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Child = styled.div`
  display: flex;
  align-items: center;
`;

export const TokenImage = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;
