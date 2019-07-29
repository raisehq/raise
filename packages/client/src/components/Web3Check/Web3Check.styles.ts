import styled from 'styled-components';
import { Card, Segment } from 'semantic-ui-react';
import { OnlyActive } from '../../commons/OnlyActive';
import Web3Address from './Web3Address';

export const StyledAddress = styled(Web3Address)`
  font-size: 14px;
  margin: 0px 0px 0px 10px;
`;

export const NoticeHeader = styled(Card.Header)`
  &&&&&&&&& {
    margin: 0px 0px 40px;
    padding: 0px !important;
    font-weight: bold;
    font-size: 26px;
    border: none;
  }
`;

export const HelpMessage = styled.div`
  position: 'absolute';
  bottom: 10;
  left: 0;
  right: 0;
  textalign: 'center';
`;
export const SuccessMessage = styled.div`
  margin: '20px 0px';
  height: 60;
  fontsize: '76px';
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
  }
`;
export const CardContent = styled(Card.Content)`
  &&& {
    padding: 50px !important;
    font-size: 14px;
    code {
      background: lightgrey;
      padding: 5px;
      font-size: 12px;
      color: black;
    }
    .icon {
      display: inline-block !important;
      width: 28px !important;
      height: 28px !important;
      line-height: 2.8 !important;
      padding: 0px !important;
      margin-right: 10px;
    }
  }
`;

export const Web3Card = styled(Card)`
  &&& {
    width: 100%;
    min-height: 490px;
    max-width: 512px;
    margin: 0 auto;
    color: #5c5d5d;
    position: relative;
    &&&&&&&&&& > .content {
    }
    &&&&&&&&&& .description {
    }
  }
`;
export const NoticeSegment = styled(Segment)``;

export const NoticeValue = styled.span`
&&& {
  color: ${(props: OnlyActive) => (props.active ? 'green' : 'red')}
  margin-right: 8px;
  font-size: 1.3rem;
}
`;
