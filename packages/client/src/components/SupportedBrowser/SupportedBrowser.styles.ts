import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

export const HelpMessage = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
`;

export const CardDescription = styled(Card.Description)`
  &&&&&&&&& {
    min-height: 210px;
    padding: 36px 50px 46px;
    background-color: #ecedee;
    border-top: none;
    font-size: 16px;
    h6 {
      font-size: 18px;
      margin: 0px 0px 10px;
    }
    span.emojis {
      margin: 20px 0px;
      height: 60px;
      font-size: 76px;
      display: block;
    }
  }
`;

export const CardCenteredText = styled.div`
  &&& {
    text-align: center;
  }
`;
export const CardTitle = styled.div`
  color: #3c4251;
  font: 26px bold;
  line-height: 36px;
  text-align: center;
  margin: 10px;
`;
export const CardSubtitle = styled.div`
  &&& {
    color: #99a6b6;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    margin: 19px;
  }
`;

export const CardBottom = styled.div`
  position: absolute;
  bottom: 22px;
  text-align: center;
  width: 324px;
`;
