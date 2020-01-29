import styled from 'styled-components';
import { Form, Modal, Button, Checkbox, Icon } from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';
import theme from '../theme';

export const commonModal = {
  borderRadius: '4px',
  boxShadow: '0 10px 26px 0 rgba(6, 52, 40, 0.1)',
  margin: '0 !important',
  padding: '0 !important'
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  desktop: `(min-width: ${size.desktop})`
};

export const OnboardingCloseButton = styled(Button)`
  &&& {
    background: none;
    border: none;
    position: absolute;
    top: -30px;
    right: -40px;
    color: rgba(255, 255, 255, 0.7);

    i {
      font-size: 20px;
    }

    &:hover {
      background: none;
      color: #fff;
    }

    @media (max-width: ${size.mobileL}) {
      top: 5px;
      right: 0px;
      color: rgba(0, 0, 0, 0.87);
    }
  }
`;

export const OnboardingTwoModal: any = styled(Modal)`
  &&& {
    width: ${size.desktop};

    @media (max-width: ${size.mobileL}) {
      width: 100%;
    }

    @media (min-width: ${size.mobileL}) and (max-width: ${size.signUp}) {
      width: ${size.mobileL};
    }

    @media (max-width: ${size.signUp}) {
      .visuals {
        display: none;
      }
    }
  }
`;

export const OnboardCheckbox: any = styled(Checkbox)`
  &&& {
    position: relative;
    margin-right: 4px;
    top: 3px;
  }
`;

export const OnboardingSimpleModal: any = styled(Modal)`
  &&& {
    width: ${size.mobileL};

    @media (max-width: ${size.mobileL}) {
      width: 100%;
    }
  }
`;

export const OnboardingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;

  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content {
    margin: 0 !important;
    padding: 0 !important;
  }

  .visuals {
    flex: 0 1 100%;
    background: #f7fdff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .process {
    flex: 0 1 100%;
    background: #fff;
    padding: 50px;
    box-sizing: border-box;
  }

  .error.field {
    .ui.search {
      background-color: #fff6f6;
      border-color: #e0b4b4;
      box-shadow: none;
      color: #9f3a38 !important;
    }
  }
`;

export const OnboardHeader = styled.h1`
  color: #3c4251;
`;

export const OnboardHeaderBorrower = styled.h1`
  font-size: 23px;
  color: #3c4251;
`;

export const OnboardSubHeader = styled.h3`
  margin: 0 0 0 0 !important;
  padding: 0 !important;
  font-weight: 400;
  font-size: 14px;
`;

export const OnboardInput = styled.div`
  position: relative;
  margin: 50px 0 50px 0;
  width: 100%;

  .ui.input {
    width: 100%;
  }

  input {
    height: 48px;
    width: 100%;
    border: 1px solid #dfe3e9;
    border-radius: 4px;
    box-sizing: border-box;
    color: ${theme.colors.darkgray}
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
  i.big.icon{
    font-size: 20px;
  }

  .errorText {
    color: ${theme.colors.error};
    position: absolute;
    top: 55px;
    left: 0;
  }

  .errorTextSelect {
    color: ${theme.colors.error};
    position: absolute;
    top: 60px;
    left: 0;
  }
`;
export const OnboardInputSignUp = styled(OnboardInput)`
  margin: 0 0 40px 0;
`;

export const OnboardButton = styled.button`
  height: 60px;
  width: 100%;
  padding: 15px 0px;
  border-radius: 4px;
  border: none;
  background: ${theme.gradient.green};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
  }
`;

export const CallToSignIn = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10%;

  .callToSignIn {
    background: none;
    border: none;
    color: ${theme.colors.green};
    cursor: pointer;
  }
`;

export const OnboardingCell: any = styled.div``;

export const OnboardDisclaimer = styled.div`
  padding-bottom: 20px;
  line-height: 20px;
  display: flex;

  .disclaimerBTN {
    border: none;
    background: none;
    padding: 0px 2px 0px 2px;
    margin: 0;
    color: ${theme.colors.green};
    cursor: pointer;
  }
`;

export const OnboardMailingList = styled.div`
  line-height: 20px;
  padding-bottom: 20px;
  .disclaimerBTN {
    border: none;
    background: none;
    padding: 0px 2px 0px 2px;
    margin: 0;
    color: ${theme.colors.green};
    cursor: pointer;
  }
`;

export const OnboardCountries: any = styled(Form.Field)`
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

export const ConfirmWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ConfirmHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
`;
export const ConfirmLogo = styled.img`
  display: block;
  width: 100px;
  height: auto;
`;
export const ConfirmCros = styled(Icon)``;

export const ConfirmHeader = styled.h1`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

export const ConfirmText = styled.p`
  text-align: center;
  margin-top: 15px;
`;

export const ConfirmWallets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const WalletButton = styled.button`
  background-color: #eb3f93;
  height: 56px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 15px;
  border: none;
  cursor: pointer;
`;

export const ButtonText = styled.div`
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
`;

export const MainImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #dfe3e9;
  margin-top: 20px;
`;

export const OnboardLogo = styled.div`
  position: relative;
  top: 5px;
  float: right;
  width: 25px;
  height: 25px;
  border: none;
  background: url(${theme.resources}/favicons/ms-icon-150x150.png) center center no-repeat;
  background-size: cover;
`;

export const MyRecapcha = styled(ReCAPTCHA)`
    .grecaptcha-badge {
      visibility: hidden;
      right: auto
      left: 0
      pointer-events: none
    }
`;

export const GoogleCaptchaPolicies = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

export const OnboardDisclaimerBorrower = styled.div`
  padding-top: 43px;
  line-height: 20px;
  display: flex;

  .disclaimerBTN {
    border: none;
    background: none;
    padding: 0px 2px 0px 2px;
    margin: 0;
    color: ${theme.colors.green};
    cursor: pointer;
  }
`;

export const OnboardHeaderSubtitle = styled.div`
  font-size: 14px;
  margin-top: 8px;
  line-height: 21px;
`;

export const MiniBody = styled.div`
  width: 290px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
  padding: 16px;

  ${OnboardHeader} {
    margin-top: 8px;
    margin-bottom: 24px;
  }

  ${OnboardInput} {
    margin-top: 0px;
    margin-bottom: 55px;
  }

  ${OnboardDisclaimer}, ${OnboardMailingList} {
    padding-top: 0px;
    margin-top: 0px;
  }
`;

export const OnboardingSubTitle: any = styled.div`
  font-size: 23px;
  line-height: 36px;
  opacity: 0.59;
  color: #3c4251;
  font-family: Lato;
  height: 72px;
  width: 290px;
  margin: 5%;

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;

export const ChooseSignUpSignInWrapper = styled.div`
  margin: 2%;
`;

export const ChooseMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 480px;
  @media (max-width: ${size.mobileL}) {
    min-height: 0;
  }
`;
/************** GET STARTED BLOOM SCREEN ******************/

export const GetStartedBloomHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const GetStartedBloomTitle = styled.div`
  text-align: center;
  font-size: 50px;
  @media (max-width: ${size.mobileL}) {
    font-size: 25px;
  }
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
  align-items: center;
  text-align: center;
  color: #6067f1;
  font-size: 18px;

  span {
    padding: 10px;
  }
`;

export const GetStartedBloomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  flex: 0 1 100%;
  min-height: 400px;

  @media (max-width: ${size.mobileL}) {
    flex-wrap: wrap;
    min-height: 0;
  }
`;

export const GetStartedBloomQRSection = styled.div`
  flex: 1 1 100%;
  padding: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: ${size.mobileL}) {
    justify-content: center;
  }
`;

export const GetStartedBloomErrorSection = styled.div`
  flex: 1 1 100%;
  padding: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: ${size.mobileL}) {
    justify-content: center;
    padding: 0%;
  }
`;

export const GetStartedBloomInstructionsSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 5% 0;

  @media (max-width: ${size.mobileL}) {
    align-items: center;
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
  flex-direction: column;
  padding: 5%;
  max-width: 250px;
  min-height: 250px;
  text-align: center;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
  line-height: 21px;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    max-width: none;
    align-items: stretch;
  }
`;

export const IconWrapper = styled.div`
  align-self: flex-end;
`;
