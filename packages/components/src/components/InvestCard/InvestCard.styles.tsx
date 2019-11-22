import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Card from '../Card';

export const CardContent = styled(Card.Content)`
  padding: 40px 20px 0px 20px;
`;

export const CardBottom = styled.div`
  padding: 0px 20px 20px 20px;
`;

export const GraphButton = styled(Button)`
  &&& {
    align-items: center;
    display: flex;
    justify-content: center;
    & > i:first-child {
      margin-right: 10px;
    }
  }
`;
