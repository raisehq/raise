import styled from 'styled-components';
import { Form } from 'semantic-ui-react';
import theme from '../theme';

const commonModal = {
  minHeight: '507px',
  borderRadius: '4px',
  boxShadow: '0 10px 26px 0 rgba(6, 52, 40, 0.1)',
  margin: '0 !important',
  padding: '0 !important',
  overflow: 'hidden'
};

export const OnePanelModal = {
  ...commonModal,
  width: '500px'
};

export const TwoPanelModal = {
  ...commonModal,
  width: '950px'
};

export const OnboardingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .content {
    margin: 0 !important;
    padding: 0 !important;
  }

  .visuals {
    flex: 0 1 450px;
    background: ${theme.gradient};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .process {
    flex: 0 1 500px;
    background: #fff;
    padding: 50px;
    box-sizing: border-box;
  }
`;

export const OnboardHeader = styled.h1`
  color: #3C4251;
`;

export const OnboardSubHeader = styled.h3`
  margin: 0 0 0 0 !important;
  padding: 0 !important;
  font-weight: 400;
  font-size: 14px;
`;

export const OnboardInput = styled.div`
  position: relative;
  margin: 55px 0 55px 0;

  input {
    height: 53px;
    width: 400px;
    border: 1px solid #dfe3e9;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
    color: ${theme.colors.darkgray}
    padding-left: 54px;
    text-indent: 42px;
  }

  .icon {
    position: absolute;
    top: 14px;
    left: 14px;
    color: #cacbcd !important;
  }

  .errorText {
    color: ${theme.colors.error};
    position: absolute;
    bottom: -20px;
    left: 0;
  }
`;

export const OnboardButton = styled.button`
  width: 100%;
  height: auto;
  padding: 25px;
  border-radius: 4px;
  border: none;
  background: ${theme.gradient};
  font-size: 18px;
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
  padding-top: 30px;

  .callToSignIn {
    background: none;
    border: none;
    color: ${theme.colors.green};
    cursor: pointer;
  }
`;

export const OnboardDisclaimer = styled.div`
  margin-top: 60px;
  padding-bottom: 30px;
  border-bottom: 1px solid #5a5a5a;

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
    height: 53px !important;
    width: 420px !important;
    padding: 20px !important;
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
  padding: 50px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin: 25px 0 45px 0;
  }
`;

export const ConfirmHeader = styled.h1`
  color: #188e9b;
  font-size: 26px;
  font-weight: bold;
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
  background: #1aa79f;
  margin-top: 40px;
`;
