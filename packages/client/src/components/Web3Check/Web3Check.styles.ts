import styled from 'styled-components';
import { Card, Segment } from 'semantic-ui-react';
import { OnlyActive } from '../../commons/OnlyActive';


export const NoticeHeader = styled(Card.Header)`
&&&&&&&&& {
  margin: 0px 0px 40px;
  padding: 0px !important;
  font-weight: bold;
  font-size: 26px;
  border: none;
}
`
export const Web3Card = styled(Card)`
&&& {
  width: 100%;
  max-height: 490px;
  max-width: 512px;
  margin: 0 auto;
  color: #5C5D5D;
  position: relative;
  &&&&&&&&&& > .content { 
    padding: 50px;
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
  &&&&&&&&&&  .description {
    min-height: 210px;
    padding: 27px 50px;
    background-color: #ECEDEE;
    border-top: none;
    font-size: 16px;
    h6 {
      font-size: 18px;
      margin: 0px 0px 10px;
    }
  }
}
`
export const NoticeSegment = styled(Segment)`
`

export const NoticeValue = styled.span`
&&& {
  color: ${(props: OnlyActive) => props.active ? 'green' : 'red'}
  margin-right: 8px;
  font-size: 1.3rem;
}
`