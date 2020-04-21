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
  Grid,
  Checkbox
} from 'semantic-ui-react';
import Balance from '../Balance';
import { device } from '../../commons/breakpoints';
import InvestmentBox from './components/InvestmentBox';

interface ModalInputProps {
  roi?: boolean;
  error?: boolean;
}

interface InputLabelProps {
  green?: boolean;
}

interface LabelPaddingProps {
  color?: string;
}

export const InvestSection = styled(InvestmentBox)`
  margin: 29px auto 0px auto;
  padding: 27px;
`;
export const LoanTermsCheckbox: any = styled(Checkbox)`
  &&& {
    position: relative;
    margin-right: 4px;
    top: 3px;
    font-size: 12px;
    line-height: 21px;
    color: red;
    @media ${device.laptop} {
      font-size: 14px;
    }
  }
`;

export const CheckContainer = styled.div`
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
`;

export const ExitButton = styled(Icon)`
  &&& {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    @media (screen and ${device.tablet}) {
      display: none;
    }
  }
`;

export const LenderButton = styled(Button)`
  &&& {
    cursor: pointer;
    color: white;
    background-color: #eb3f93;
    text-transform: uppercase;
    border-radius: 4px;
    height: 56px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    margin-top: auto;
    margin: 0px;
  }

  &&&:hover {
    color: white;
    background-color: #eb3f93;
  }
  &&&:disabled,
  &&&.disabled {
    cursor: default;
    opacity: 0.45 !important;
    background-image: unset !important;
    background: lightgray;
    box-shadow: none !important;
    pointer-events: none !important;
  }
`;

export const BorrowerButton = styled(LenderButton)`
  &&& {
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    &&&:hover {
      color: white;
      background: linear-gradient(134.72deg, #02bb7d 0%, #00efad 100%);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Modal = styled(SemanticModal)`
  background-color: #fcfcfc;
  border-radius: 4px;
  box-shadow: 0 10px 26px 0 rgba(6, 52, 40, 0.1);

  @media ${device.tablet} {
    max-width: ${({ size }) => (size === 'mini' ? '330px' : '500px')};
  }

  @media (max-width: 500px) {
    &.ui.modal {
      width: 100%;
      border-radius: 0;
    }
    height: 100%;
    box-shadow: none;
    margin: 0;
  }
`;

export const ModalContent: any = styled(SemanticModal.Content)`
  &&&.content {
    padding: 40px 50px;
  }

  @media (max-width: 500px) {
    border-radius: 0;
    margin: 0;
    height: 100%;
    overflow: auto;
    &&&.content {
      padding: 9px;
    }
  }
`;

export const ModalFlexWrapper = styled.div`
  min-height: 612px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
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
  margin-top: 10px;
  margin-bottom: 8px;
  -webkit-flex-flow: row wrap;
`;

export const InputContainer = styled.div`
  max-width: 173px;
  width: 100%;
`;

export const ModalInputBox = styled.div<ModalInputProps>`
  height: 48px;
  width: 173px;
  border-radius: 4px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#cfd0d4')};
  background-color: ${({ roi }) => (roi ? '#ECEDEE' : '#FFFFFF')};
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 8px;
  & > div {
    flex: 0.99;
  }
`;

export const InvestorBalance = styled(Balance)`
  cursor: pointer;
  color: #b1b3b9;
  font-size: 14px;

  &:hover {
    color: #00a76f;
  }
`;

export const InputLabel = styled.div<InputLabelProps>`
  color: #5a5a5a;
`;

export const FundAllLabel = styled.div<InputLabelProps>`
  display: inline-block;
  text-align: center;
  color: #00a76f;
  cursor: pointer;
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
  color: #3c4251;
  line-height: 36px;
  font-weight: bold;
`;

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

export const LabelPadding = styled(Label)<LabelPaddingProps>`
  &&& {
    font-size: 14px !important;
    margin-right: 8px !important;
    background-color: ${({ color }) => color || '#ff047f'};
    color: #ffffff;
  }
`;
export const IconSuccess = styled(Icon)`
  &&& {
    margin: 0 !important;
  }
`;
export const LabelPaddingLoader = styled(LabelPadding)<LabelPaddingProps>`
  &&& {
    position: relative;
    margin-bottom: -7px;
    background-color: ${({ color }) => color || '#ff047f'};
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
    padding: 0 10px;
  }
`;

export const CardTitle = styled.div`
  color: #3c4251;
  font-family: Lato;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  text-align: center;
  width: 100%;
`;

export const CardSubtitle = styled.div`
  color: #99a6b8;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 10px 0;
  width: 100%;
`;

export const ButtonGreen = styled(Button)`
  &&& {
    height: 58px;
    width: 100%;
    background: #eb3f93;
    color: white;
  }
`;

export const ButtonPink = styled(Button)`
  &&& {
    height: 58px;
    width: 100%;
    background: #eb3f93;
    color: white;
  }

  &&&:hover,
  &&&:focus {
    background-color: #ff047f;
    color: #ffffff;
  }
`;

export const Action = styled(Grid.Row)`
  color: #3c4251;
  font-size: 18px;
  line-height: 28px;
`;

export const Explanation = styled(Grid.Row)`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;
`;

export const UserBalance = styled(Balance)`
  margin-left: 30px;
`;

export const InvestHeader = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #000;
`;

export const ButtonContainerProcessing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;
