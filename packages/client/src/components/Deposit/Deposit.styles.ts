import styled from 'styled-components';
import { Grid, Button, Image, Loader, Segment, Label, List, Icon, Divider } from 'semantic-ui-react';
import Web3Address from '../Web3Address';
import { device } from '../../commons/breakpoints';

interface DepositInputProps {
  big?: boolean;
}

export const LinkWrap = styled.div`
  text-align: center;
`;

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
export const GoBack = styled(Button)`
&&&&&&&&& {
  width: 122px;
  font-size: 18px;
  margin: 81px auto 0px;
}
`

export const DepositInput = styled.div<DepositInputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ big }) => big ? '18px' : '14px'};
  color: ${({ big }) => big ? '#3C4251' : '#5A5A5A'};
`

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
    margin: 30px 0px 0px;
    text-align: center;
  }
`;
export const CenteredText = styled.div`
  &&& {
    text-align: center;
  }
`;

export const FullDivider = styled(Divider)`
&&&:not(.vertical):not(.horizontal) {
  border-top: 1px solid #979797;
}
`
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
    margin: 19px 0px;
  }
`;
export const Error = styled.p`
&&&&&& {
  margin-top: 20px;
  color: #99a6b6;
  text-align: center;
}
`
export const Amount = styled.div`
  &&& {
    color: #5c5d5d;
    font-size: 50px;
    font-weight: 300;
    height: 50px;
    text-align: center;
    line-height: normal;
    margin: 0px 60px;
    position: relative;
  }

  &&&::before {
    color: #7f8fa4;
    font-size: 12px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: 'Amount';
  }
  &&&::after {
    color: #7f8fa4;
    font-size: 12px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    content: 'RAISE';
  }
`;

export const BalanceAmount = styled.div`
&&& {
  color: #5c5d5d;
  font-size: 50px;
  font-weight: 300;
  height: 50px;
  text-align: center;
  line-height: normal;
  margin: 0px 60px;
  position: relative;
}

&&&::before {
  color: #7f8fa4;
  font-size: 12px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  content: 'Balance';
}
&&&::after {
  color: #7f8fa4;
  font-size: 12px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  content: 'RAISE';
}
`;

export const HowToGetHeroToken = styled.a`
  color: #00a76f;
  font-size: 14px;
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
    min-height: 62px;
    width: 100%;
    font-weight: bold;
    ${({ blocked }) => (blocked ? 'opacity: 0.4 !important;' : '')}
    background: #00DA9E;
    color: white;
    font-size: 18px;
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
  &&&:disabled {
    background: rgba(0,0,0,0.3)
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
