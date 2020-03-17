import styled from 'styled-components';
import { Button, Modal as SemanticModal, Image, Checkbox } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

export const Modal = styled(SemanticModal)`
  height: 640px;
  width: 500px;
  background-color: #fcfcfc;
  border-radius: 4px;
  box-shadow: 0 10px 26px 0 rgba(6, 52, 40, 0.1);

  @media ${device.laptop} {
    max-width: 500px;
  }
  @media ${device.tablet} {
    max-width: 500px;
  }

  @media (max-width: 500px) {
    &.ui.modal {
      width: 100%;
      border-radius: 0;
    }
    height: 100%;
    box-shadow: none;
    margin: 0;
    overflow-y: auto;
  }
`;

export const WarningContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
`;

export const WarningName = styled.div`
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  text-align: center;
  margin-bottom: 16px;
`;
export const WarningDescription = styled.div`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 16px;
`;
export const WarningCheckbox = styled(Checkbox)`
  height: 21px;
  width: 198px;
  color: #5a5a5a;
  font-family: Lato;
  font-size: 14px;
  line-height: 21px;
`;

export const WarningImage = styled(Image)`
  height: 189.72px;
  width: 254.74px;
`;

export const WarningButton = styled(Button)`
  &&& {
    box-sizing: border-box;
    height: 42px;
    width: 122px;
    background-color: white;
    border: 1px solid #3c4251;
    border-radius: 4px;
  }
`;

export const ButtonText = styled.div`
  color: #3c4251;
  font-size: 18px;
  text-align: center;
`;

export const WarningLink = styled.div`
  color: #00a76f;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 16px;
`;

export const OnboardingCell: any = styled.div``;

export const OnboardCheckbox: any = styled(Checkbox)`
  &&& {
    position: relative;
    margin-right: 10px;
    top: 3px;
  }
`;

export const OnboardDisclaimerBorrower = styled.div`
  line-height: 20px;
  display: flex;
  margin-bottom: 29px;
  .disclaimerBTN {
    border: none;
    background: none;
    padding: 0px 2px 0px 2px;
    margin: 0;
    cursor: pointer;
  }
`;
