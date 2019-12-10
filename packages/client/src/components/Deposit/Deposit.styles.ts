import styled from 'styled-components';
import { Grid, Button, Image, Loader, Segment, Label, List, Icon } from 'semantic-ui-react';
import Web3Address from '../Web3Address';
import { device } from '../../commons/breakpoints';

export const StyledAddress = styled(Web3Address)`
  float: right;
`;

export const ListItemPadding = styled(List.Item)`
  &&& {
    font-size: 18px;
  }
  &&&:first-child {
    margin-bottom: 25px;
  }
`;

export const LabelPadding = styled(Label)`
  &&& {
    font-size: 14px !important;
    margin-right: 8px !important;
  }
`;
export const IconSuccess = styled(Icon)`
  &&& {
    margin: 0 !important;
  }
`;
export const LabelPaddingLoader = styled(LabelPadding)`
  &&& {
    position: relative;
    margin-bottom: -7px;
  }
`;
export const MicroLoader = styled(Loader)`
  &&& {
    width: 1rem;
    height: 1rem;
    font-size: 0.78571429em;
  }
  &&&:before,
  &&&:after {
    width: 10px;
    height: 10px;
    margin: 2px 0 0 -0.35rem;
  }
`;
export const SegmentPadded = styled(Segment)`
  &&& {
    padding: 2em !important;
    margin-top: 15% !important;
    @media ${device.mobileS} {
      padding: 3em !important;
    }
  }
`;
export const Message = styled.p`
  font-size: 20px;
  color: #767676;
  padding-top: 20px;
`;

export const AutoConfirmStyled = styled.div`
  &&& {
    position: fixed;
    bottom: 200px;
    left: 33px;
  }
`;

export const CenteredContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 570px;
  width: 512px;
`;
export const Title = styled.div`
  color: #104a50;
  font: 40px bold;
  line-height: 48px;
`;

export const Credits = styled.em`
  font-size: 1em;
`;
export const HeaderRow = styled(Grid.Row)`
  &&& {
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const Amount = styled.p`
  &&& {
    color: #5c5d5d;
    font-size: 50px;
    font-weight: 300;
    line-height: 16px;
    padding-top: 45px;
    text-align: center;
    margin: 0px 105px;
  }

  &&&::before {
    color: #7f8fa4;
    font-size: 12px;
    float: left;
    margin-top: 9px;
    line-height: 21px;
    content: 'Amount';
  }
  &&&::after {
    color: #7f8fa4;
    font-size: 12px;
    float: right;
    margin-top: 9px;
    line-height: 21px;
    content: 'Tokens';
  }
`;

export const HowToGetHeroToken = styled.a`
  height: 21px;
  width: 147px;
  color: #00a76f;
  font-size: 14px;
  line-height: 45px;
  text-align: center;
  text-decoration: underline;
`;

export const BlockAmount = styled.div`
  &&& {
    display: block;
    margin: 0px 0px 20px 0px;
  }
`;
export const FooterRow = styled(Grid.Row)`
  &&& {
    padding: 16px 0;
    text-align: center;
  }
`;

export const ButtonGreen = styled(Button)`
  &&&,
  &&&:focus {
    height: 62px;
    width: 100%;
    ${({ blocked }) => (blocked ? 'opacity: 0.4 !important;' : '')}
    background: linear-gradient(134.72deg, #00A76F 0%, #00DA9E 100%);
    color: white;
    font: 18px bold;
    line-height: 24px;
  }
  &&&:hover {
    background-color: #ffffff;
    box-sizing: border-box;
    border: 1px solid #00a870;
    border-radius: 4px;
    color: #00a76f;
    font-weight: bold;
  }
  &&&:active {
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    color: white;
    font-weight: bold;
  }
`;

export const ButtonRetry = styled(Button)`
  &&& {
    height: 62px;
    width: 100%;
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    color: white;
    font: 18px bold;
    line-height: 24px;
  }
  &&&:hover {
    background-color: #ffffff;
    color: white;
    font-weight: bold;
  }
`;

export const ImageSized = styled(Image)`
  &&& {
    height: 268px;
  }
`;
