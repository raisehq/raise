import styled from 'styled-components';
import { Button, Modal as SemanticModal, Icon } from 'semantic-ui-react';
import { device } from '../LayoutV2/breakpoints';

export const ExitButton = styled(Icon)`
  &&& {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
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
  &&&& {
    width: 350px;
    height: fit-content;
    background-color: #fcfcfc;
    border-radius: 4px;
    box-shadow: 0 10px 26px 0 rgba(6, 52, 40, 0.1);
    &&& .content {
      padding: 40px 50px;
    }
    @media ${device.laptop} {
      max-width: 350px;
    }
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

export const ClaimFundsResume = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #ffffff;
  color: #5a5a5a;
  padding: 0px 0px 30px 0px;
`;

export const FlexSpacedLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const ResumeItemBox = styled.div`
  width: 100%;
  margin-top: 20px;

  & > p {
    text-align: right;
  }
  & > p:first-child {
    font-size: 10px;
    color: #5c5d5d;
    font-weight: normal;
  }
  & > p:last-child {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    color: #3c4251;
    margin-top: -8px;
  }
`;

export const ResumeItemBoxBig = styled.div`
  margin-top: 20px;

  & > p {
    text-align: right;
  }
  & > p:first-child {
    font-size: 10px;
    color: #5c5d5d;
    font-weight: normal;
  }
  & > p:last-child {
    font-size: 28px;
    font-weight: bold;
    line-height: 24px;
    color: #3c4251;
    margin-top: 0px;
  }
`;

export const ClaimButton = styled(LenderButton)`
  &&& {
    margin: 20px 0px 0px 0px;
    height: 48px;
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    background: ${({ loading }) =>
      loading ? '#eff4f7' : 'linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%)'};
  }
`;

// processing state
export const RetryButton = styled(LenderButton)`
  &&& {
    margin: 193px 0px 0px 0px;
    height: 48px;
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
  }
  &&&:hover,
  &&&:focus {
    background-color: #ff047f;
    color: #ffffff;
  }
`;

export const CardCenteredText = styled.div`
  &&& {
    text-align: left;
  }
`;
export const CardTitle = styled.div`
  margin: 10px 0px 20px 0px;
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  text-align: left;
  margin: 10px 0px 20px 0px;
`;
export const CardSubtitle = styled.div`
  &&& {
    color: #5a5a5a;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
    margin: 0px -15px 95px 0px;
  }
`;

export const ButtonGreen = styled(Button)`
  &&& {
    margin-left: 0px;
    height: 58px;
    width: 100%;
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    color: white;
  }
`;
