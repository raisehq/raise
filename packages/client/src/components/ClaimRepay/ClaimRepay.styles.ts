import styled from 'styled-components';
import { Button, Icon, Checkbox } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const CheckboxDeposit = styled(Checkbox)``;

export const CheckboxDepositLabel = styled.div`
  font-size: 16px;
  line-height: 18px;
  width: 100%;
  margin-left: 10px;
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

export const Header = styled.h2`
  color: #3c4251;
  font-family: Lato;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  margin-top: 20px;
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
