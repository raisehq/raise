/* eslint-disable no-unused-expressions */
/* eslint-disable no-confusing-arrow */
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import { Checkbox, Form, Icon, Input } from 'semantic-ui-react';
import Button from '../commons/ButtonControl/Button';
import BloomButton from '../commons/ButtonControl/BloomButton';
import { device, size } from '../../utils/breakpoints';

interface IBackground {
  background: string;
}

interface IContainer {
  type: string;
}

export const MyRecapcha = styled(ReCAPTCHA)`
  .grecaptcha-badge {
    visibility: hidden;
    right: auto
    left: 0
    pointer-events: none
  }
`;

export const SignUpContainer = styled.div<IContainer>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-shadow: 0px 8px 25px rgba(60, 66, 81, 0.25);
  border-radius: 4px;
  background: ${({ type }) => (type === 'email' ? '#eb3f93' : 'white')};
  width: 100%;
  @media screen and ${device.laptop} {
    width: 1128px;

    height: 570px;
  }
`;
export const SignUpInfo = styled.div<IBackground>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 552px;
  ${({ background }) =>
    background ? `background-image: url(${background})` : 'background: #EB3F93'};
  background-repeat: no-repeat;
  background-size: cover;
`;
export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-top: 20px;
  @media screen and ${device.laptop} {
    padding-left: 91px;
    padding-right: 85px;
    max-width: 576px;
    padding-top: 0px;
    padding-top: 0px;
  }
`;

export const SignUpInputContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
  width: 100%;

  .ui.input {
    width: 100%;
  }

  input {
    height: 48px;
    width: 100%;
    max-width: 500px;
    border: 1px solid #dfe3e9;
    border-radius: 4px;
    box-sizing: border-box;
    color: #5a5a5a;
    padding: 20px;
    padding-left: 54px;
    text-indent: 42px;
  }

  .icon {
    position: absolute;
    top: 14px;
    left: 14px;
    color: #cacbcd !important;
  }
  i.big.icon {
    font-size: 20px;
  }

  .errorText {
    color: #ed1c24;
    position: absolute;
    top: 55px;
    left: 0;
  }

  .errorTextSelect {
    color: #ed1c24;
    position: absolute;
    top: 60px;
    left: 0;
  }
`;
export const SignUpInput = styled(Input)``;

export const InputCountries = styled(Form.Field)`
  .icon {
    display: none !important;
  }

  .search {
    width: 100% !important;
    padding: 16px !important;
    border: 1px solid #dfe3e9;
    box-sizing: border-box !important;
    color: #5a5a5a !important;
    text-indent: 0 !important;
    padding-left: 47px !important;
  }
`;
export const SignUpIcon = styled(Icon)``;

export const CheckBoxText = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #5a5a5a;
  .disclaimerBTN {
    border: none;
    background: none;
    padding: 0px 2px 0px 2px;
    margin: 0;
    color: #00a76f;
    cursor: pointer;
  }
`;

export const RaiseTerms = styled.div`
  margin-bottom: 42px;

  font-size: 14px;
  line-height: 21px;
  display: flex;
`;

export const RaiseUpdates = styled.div`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 14px;
  color: #5a5a5a;
`;

export const SignUpCheckbox = styled(Checkbox)`
  &&& {
    position: relative;
    margin-right: 4px;
    top: 3px;
  }
`;

export const SignUpButton = styled(Button)``;

export const SignUpText = styled.div`
  color: #ffffff;
  max-width: 307px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  margin-top: 86px;
  margin-bottom: 113px;

  margin-left: 20px;
  @media screen and ${device.laptop} {
    margin-left: 97px;
  }
`;
export const RaiseLogo = styled.img`
  width: 132px;
  height: 41px;
  margin-top: 112px;
  margin-left: 20px;
  @media screen and ${device.laptop} {
    margin-left: 97px;
  }
`;

export const SignUpResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SingUpResponseImage = styled.img`
  width: 76px;
  height: 68px;
`;

export const SignUpResponseTitle = styled.div`
  max-width: 400px;
  margin-top: 40px;

  font-weight: bold;
  font-size: 26px;
  line-height: 36px;

  text-align: center;
`;

export const SignUpResponseSubText = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  text-align: center;

  color: #5a5a5a;
  margin-top: 1px;

  max-width: 221px;
  @media screen and ${device.laptop} {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 400px;
  }
`;

export const BackButtonWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  align-self: center;
`;

export const BackButton = styled(Button)``;

export const BButton = styled(BloomButton)``;

/** Bloom */
export const BloomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 8px 25px rgba(60, 66, 81, 0.25);
  border-radius: 4px;
  background: white;
  width: 100%;
  @media screen and ${device.laptop} {
    width: 1128px;

    height: 570px;
  }
`;

export const GetStartedBloomHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const BloomLogo = styled.img`
  width: 96px;
  height: 25.52px;
`;
export const GetStartedBloomTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  color: #3c4251;
  margin-top: 41px;
`;
export const GetStartedBloomTitleError = styled.div`
  text-align: center;
  font-size: 25px;
  margin-top: 15px;
  @media (max-width: ${size.mobileL}) {
    font-size: 25px;
  }
`;
export const GetStartedBloomSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  color: #6067f1;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  span {
    padding: 10px;
  }
`;

export const GetStartedBloomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 250px;
  margin-top: 40px;
`;

export const GetStartedBloomQRSection = styled.div`
  justify-content: center;
  @media screen and ${device.laptop} {
    justify-content: flex-end;
    margin-right: 40px;
  }
`;

export const GetStartedBloomInstructionsSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${size.mobileL}) {
    align-items: center;
  }
`;

export const GetStartedBloomInfoErrorSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 15px;
  height: 300px;
  margin: 0px 10%;
  padding-top: 20%;
  @media (max-width: ${size.mobileL}) {
    align-items: center;
    margin: 0px;
  }
`;

export const GetStartedBloomFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const InstructionsWrapper = styled.div`
  padding: 0;
  max-width: 200px;
  @media (max-width: ${size.mobileL}) {
    padding: 0 10% 10% 10%;
    width: 100%;
    max-width: none;
  }
`;

export const FollowingStepsTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 5% 0;
  line-height: 24px;
`;

export const HelpWithBloomWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 5%;
  max-width: 250px;
  min-height: 250px;
  text-align: center;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
  line-height: 21px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    max-width: none;
    align-items: stretch;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  align-self: flex-end;
`;

export const SignUpWithBloomText = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  color: #5c6bf2;
`;

export const SignUpWithBloomWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 40px;
  @media screen and ${device.laptop} {
    margin-bottom: 0px;
  }
`;

export const SignUpWithBloomLogo = styled.img`
  width: 78.95px;
  height: 20px;
  margin-left: 10px;
`;

export const Asterisc = styled.span`
  vertical-align: top;
  font-size: 24px;
`;
