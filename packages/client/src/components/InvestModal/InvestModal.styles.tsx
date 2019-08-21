import styled from 'styled-components';
import { Button, Modal as SemanticModal, Progress } from 'semantic-ui-react';
import { device } from '../LayoutV2/breakpoints';

interface ModalInputProps {
  roi?: boolean;
}

interface InputLabelProps {
  green?: boolean;
}

export const LenderButton = styled(Button)`
  &&& {
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
`;

export const ModalInputBox = styled.div<ModalInputProps>`
  width: 350px;
  height: 48px;
  width: 173px;
  border: 1px solid #cfd0d4;
  border-radius: 4px;
  background-color: ${({ roi }) => (roi ? '#ECEDEE' : '#FFFFFF')};
  display: flex;
  align-items: center;
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

export const InvestResume = styled.div`
  height: fit-content;
  width: 350px;
  border: 1px solid #cfd0d4;
  border-radius: 4px;
  background-color: #ffffff;
  color: #5a5a5a;
  margin: 18px 0px 22px;
  padding: 20px;
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
`;
