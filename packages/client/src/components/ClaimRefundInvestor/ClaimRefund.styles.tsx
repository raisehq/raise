import styled from 'styled-components';
import { Button, Modal as SemanticModal, Icon, Loader as RawLoader } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';
import { ReactLink } from '../Links';

export const StyledLink = styled(ReactLink)`
  color: #eb3f93;
  text-align: center;
  font-size: 14px;
  width: 100%;
  margin: 34px 0px 0px;
  display: block;
  &:hover,
  &:focus {
    color: #eb3f93;
  }
`;

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
    font-size: 16px;
  }

  &&&:hover {
    color: white;
    background-color: #eb3f93;
  }
`;

export const RefundButton = styled(LenderButton)`
  &&&& {
    height: 56px;
    border: 1px solid #cfd0d4;
    background: #ffffff;
    color: #3c4251;
    &&&&:hover {
      border: 2px solid #cfd0d4;
      color: #3c4251;
      background: #ffffff;
    }
  }
`;

export const RefundInfo = styled.p`
  margin-top: 34px;
`;

export const Modal = styled(SemanticModal)`
  &&&& {
    text-align: center;
    width: 350px;
    height: 392px;
    background-color: #fcfcfc;
    border-radius: 4px;
    box-shadow: 0 10px 26px 0 rgba(6, 52, 40, 0.1);
    &&& .content {
      padding: 40px 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
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
  align-items: flex-center;
  flex-wrap: wrap;
`;

export const ResumeItemBoxBig = styled.div`
  margin-top: 20px;

  & > p {
    text-align: center;
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
  }
`;

export const CardCenteredText = styled.div`
  &&& {
    text-align: center;
  }
`;
export const CardTitle = styled.div`
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px 20px 0px;
`;

export const CardSubtitle = styled.div`
  &&& {
    color: #5a5a5a;
    font-size: 14px;
    text-align: center;
  }
`;

export const Loader = styled(RawLoader)`
  &&&&&&&&:before {
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }

  &&&&&&&&:after {
    border-color: #000 transparent transparent;
  }
`;

export const ProcessingButton = styled(Button)`
  height: auto;
`;
