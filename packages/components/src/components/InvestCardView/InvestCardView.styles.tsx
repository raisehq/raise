import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Card, { CardWrapper } from '../Card';

export const InvestCardBody = styled(CardWrapper)`
  min-height: 470px;
  max-width: 372px;
  width: 100%;
`;

export const CardContent = styled(Card.Content)`
  padding: 40px 20px 0px 20px;
`;

export const CardBottom = styled.div`
  padding: 0px 20px 20px 20px;
  ${Card.Grid}:first-child {
    margin-bottom: 0px;
  }
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

export const SpacedDiv = styled.div`
  width: 56.293px;
  height: 27.2px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  flex: 2;
  &&& > span {
    padding-left: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  height: 65px;
  padding: 0 10px;
  cursor: pointer;
`;
