import styled from 'styled-components';
import {
  Button,
  Modal as SemanticModal,
  Progress,
  Icon,
  List,
  Label,
  Loader,
  Segment,
  Grid
} from 'semantic-ui-react';
import { device } from '../LayoutV2/breakpoints';

interface ModalInputProps {
  roi?: boolean;
}

interface InputLabelProps {
  green?: boolean;
}

export const ExitButton = styled(Icon)`
  &&& {
    position: absolute;
    top: 20px;
    right: 20px;
    pointer: pointer;
  }
`;

export const LenderButton = styled(Button)`
  &&& {
    cursor: pointer;
    color: white;
    background-color: #eb3f93;
    text-transform: uppercase;
  }

  &&&:hover {
    color: white;
    background-color: #eb3f93;
  }
`;

export const Modal = styled(SemanticModal)`
  width: 100%;
  height: fit-content;
  background-color: #fcfcfc;
  border-radius: 4px;
  box-shadow: 0 10px 26px 0 rgba(6, 52, 40, 0.1);
  &&& .content {
    padding: 40px 75px;
  }
  @media ${device.laptop} {
    max-width: 500px;
  }
  @media ${device.tablet} {
    max-width: 500px;
  }
`;

export const Header = styled.h2`
  color: #3c4251;
  font-family: Lato;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  margin-top: 20px;
`;

export const ModalInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  -webkit-flex-flow: row wrap;
`;

export const InputContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const ModalInputBox = styled.div<ModalInputProps>`
  height: 48px;
  width: 173px;
  border: 1px solid #cfd0d4;
  border-radius: 4px;
  background-color: ${({ roi }) => (roi ? '#ECEDEE' : '#FFFFFF')};
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  & > div {
    flex: 0.99;
  }
`;

export const InputLabel = styled.div<InputLabelProps>`
  margin-top: 12px;
  text-align: center;
  color: ${({ green }) => (green ? '#00A76F' : '#5A5A5A')};
`;


export const FundAllLabel = styled.div<InputLabelProps>`
display: inline-block
  margin-top: 12px;
  text-align: center;
  color: #00A76F;
  cursor: pointer;
  margin-left: 60px;
`;

export const InvestResume = styled.div`
  height: fit-content;
  border: 1px solid #cfd0d4;
  border-radius: 4px;
  background-color: #ffffff;
  color: #5a5a5a;
  margin: 18px 0px 22px;
  padding: 20px;

  @media ${device.laptop} {
    min-width: 350px;
  }

`;

export const FlexSpacedLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const RaisedAmountBox = styled.div`
  & > p:first-child {
    text-align: left;
    font-size: 12px;
    margin: 0;
  }
`;
export const RaisedAmountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Amount = styled.span`
  font-size: 26px;
  color: #3C4251;
  line-height: 36px;
  font-weight: bold;
`

export const ResumeItemBox = styled.div`
  width: 98px;
  margin-top: 16px;

  & > p {
    text-align: center;
  }
  & > p:first-child {
    font-size: 12px;
    font-weight: bold;
  }
  & > p:last-child {
    font-size: 10px;
  }
`;

export const ProgressLayout = styled(FlexSpacedLayout)`
  margin-top: 10px;
`;

export const AuctionProgress = styled(Progress)`
  &&&& {
    flex: 3;
    margin: 0;
    border-radius: 0;
  }
  &&&& .bar {
    background-color: #eb3f93;
    height: 10px;
    margin: 0;
    border-radius: 0;
  }
`;

export const Percentage = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ConfirmButton = styled(LenderButton)`
  &&& {
    height: 48px;
    width: 100%;
    font-size: 16px;
    color: #ffffff;
  }
  &&&:hover,
  &&&:focus {
    background-color: #ff047f;
    color: #ffffff;
  }
`;

// processing state
export const RetryButton = styled(LenderButton)`
  &&& {
    height: 48px;
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    margin-top: 10px;
  }
  &&&:hover,
  &&&:focus {
    background-color: #ff047f;
    color: #ffffff;
  }
`;

export const BlankSpace = styled.div`
  &&& {
    height: 48px;
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
  }
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
    background-color: #ff047f;
    color: #ffffff;
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
    background-color: #ff047f;
    color: #ffffff;
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

export const ButtonGreen = styled(Button)`
  &&& {
    height: 58px;
    width: 100%;
    background: linear-gradient(134.72deg, #00A76F 0%, #00DA9E 100%);
    color: white;
  }
  
`;

export const Action = styled(Grid.Row)`
  color: #3C4251;
  font-size: 18px;
  line-height: 28px;
`;

export const Explanation = styled(Grid.Row)`
  color: #5A5A5A;
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;
`;
