import styled from 'styled-components';
import { Modal, Button, Icon } from 'semantic-ui-react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px',
};

export const commonModal = {
  borderRadius: '4px',
  boxShadow: '0 10px 26px 0 rgba(6, 52, 40, 0.1)',
  margin: '0 !important',
  padding: '0 !important',
};

export const OnboardingCloseIcon = styled(Icon)``;

export const OnboardingCloseButton = styled(Button)`
  &&& {
    background: none;
    color: #fff;
    border: none;

    color: rgba(255, 255, 255, 0.7);

    i {
      font-size: 15px;
      color: black;
    }

    &:hover,
    &:focus {
      background: none;
      color: #fff;
    }
  }
`;

export const OnboardingModal: any = styled(Modal)`
  display: flex;
  flex-direction: row;
  overflow: hidden !important;

  @media (max-width: 500px) {
    overflow-y: auto !important;
    &&&&&&.ui.modal {
      border-radius: 0;
      width: 100%;
      position: absolute;
      top: 0;
    }
    &&&&&&.ui.dimmer {
      padding: 0%;
    }
    &&&&&&.ui.scrolling.modal {
      margin: 0;
    }
    height: 100%;
    box-shadow: none;
    margin: 0;
  }
`;

export const OnboardingModalContent: any = styled(Modal.Content)`
  &&&& {
    display: flex;
    flex-direction: column;
    min-height: 770px;
    @media (max-width: 500px) {
      border-radius: 0;
      margin: 0;
      padding: 0;
      overflow: auto;
      min-height: unset;
    }
  }
`;

export const OnboardingHeaderItemWrapper: any = styled.div`
  display: flex;
  align-items: stretch;
`;

export const OnboardingHeader: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #dfe3e9;
  margin: 0 5px 0 5px;

  div img {
    padding: 12%;
  }

  @media (max-width: ${size.mobileL}) {
    border-bottom: none;
  }
`;

export const OnboardingContentWrapper: any = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  @media (max-width: ${size.mobileL}) {
    flex-wrap: wrap;
    height: 100%;
  }
`;

export const OnboardingImageWrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 50%;
`;

export const OnboardingFormContent: any = styled.div`
  padding: 5%;
  border-left: 1px solid #dfe3e9;
  flex: 50%;

  @media (max-width: ${size.mobileL}) {
    flex: 60%;
    border-left: none;
  }
`;

export const OnboardingBloomContent: any = styled.div``;

export const OnboardingImage: any = styled.img`
  max-width: 100%;

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;

export const OnboardingTitle: any = styled.div`
  font-size: 50px;
  font-family: Lato;
  line-height: 60px;
  color: #3c4251;
  font-weight: bold;
  max-width: 260px;
  width: 100%;
  margin: 5%;

  @media (max-width: ${size.mobileL}) {
    font-size: 25px;
    font-family: Lato;
    line-height: 15px;
    height: auto;
    width: auto;
    text-align: center;
  }
`;

export const OnboardingSubTitle: any = styled.div`
  font-size: 23px;
  line-height: 36px;
  opacity: 0.59;
  color: #3c4251;
  font-family: Lato;
  height: 72px;
  max-width: 290px;
  width: 100%;
  margin: 5%;

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;
export const OnboardingTitleWrapper: any = styled.div`
  padding: 15%;

  @media (max-width: ${size.mobileL}) {
    flex: 0 1 20%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1%;
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

export const ConfirmLogo = styled.img`
  display: block;
  width: 100px;
  height: auto;
`;

export const ConfirmCros = styled(Icon)``;

export const ConfirmHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
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
