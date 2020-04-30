import styled from 'styled-components';
import { Header, Message, Icon, Divider } from 'semantic-ui-react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const KYCWrapper = styled.div`
  width: 100%;
  padding: 0 20px 25px 20px;
  box-sizing: border-box;
`;

export const KYCHolder = styled.div`
  background: #ffffff;
  padding: 5%;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
`;

export const Title = styled(Header)`
  text-align: center;
`;

export const OnGoBackButton = styled.div`
  text-align: center;
  justify-content: center;
  padding: 5% 0;
`;
/*  Bloom  */

export const KycWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KycSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-height: 400px;
`;

export const MainImage = styled.img`
  width: 82px;
  height: 82px;
`;

export const KycSuccessHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  min-height: 250px;
`;

export const GreenActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 80%;
  border-radius: 4px;
  background-color: #00da9e;
  cursor: pointer;
  margin: 10px 0;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;

export const GreenActionTitleText = styled.div`
  width: 219px;
  color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

export const KycSuccessTitle = styled.div`
  text-align: center;
  font-size: 26px;
  line-height: 36px;
  font-weight: bold;
  color: #3c4251;
  @media (max-width: ${size.mobileL}) {
    font-size: 25px;
  }
`;

export const KycSuccessDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 21px;
  max-width: 400px;
`;

export const KycContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;
  width: 100%;
`;

export const KycTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 520px;
`;

export const CardTitle = styled.div`
  color: #3c4251;
  text-align: center;
  margin: 10px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`;

export const SelectKycMethodList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  max-width: 520px;
`;

export const CardSubTitle = styled.div`
  text-align: center;
`;

export const KycButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
  width: 100%;
`;

/*
  export const KycButton = styled.button`
  height: 48px;
  width: 100%;
  padding: 15px 0px;
  border-radius: 4px;
  border: none;
  font-family: Lato;
  font-size: 18px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
  }
`;
*/

export const KycButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  box-sizing: border-box;
  height: 71px;
  width: 300px;
  border: 1px solid #3c4251;
  border-radius: 4px;
  cursor: pointer;
`;

export const KycButtonMethodName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 22.5px;
`;

export const KycButtonLogo = styled.img`
  width: 43px;
  height: 43px;
`;

export const KycButtonText = styled.div`
  height: 24px;
  width: 155px;
  color: #3c4251;
  font-size: 16px;
  line-height: 24px;
  margin-left: 19px;
`;

export const KycButtonLinkIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const KycButtonLinkIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 27.5px;
  margin-top: 26px;
  margin-bottom: 27px;
  color: #3c4251;
`;

/*
export const KycSumSub = styled(KycButton)`
  background: ${theme.gradient.sumSub};
`;

export const KycBloom = styled(KycButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: white;
  color: #6067f1;
  border: 1px solid #6067f1;
  span {
    padding: 0 10px;
  }
`;
*/

export const LinkWrap = styled.div`
  text-align: center;
  padding: 5% 0;
  max-width: 520px;
`;

export const KycMessage = styled(Message)`
  &&& {
    background-color: #fef2d6;
    color: #8a6300;
    padding: 20px;
    box-shadow: 0 0 0 1px rgba(255, 182, 43, 0.9) inset, 0 0 0 0 transparent;

    width: 100%;
    max-width: 520px;
  }
`;

export const KycMessageContent = styled(Message.Content)``;

export const GetStartedSumTitle = styled.div`
  text-align: center;
  font-size: 26px;
  line-height: 36px;
  font-weight: bold;
  color: #3c4251;
  @media (max-width: ${size.mobileL}) {
    font-size: 25px;
  }
`;

export const GetStartedSumSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2a328f;
  font-size: 18px;
  line-height: 22px;

  span {
    padding: 10px;
  }

  @media (max-width: ${size.mobileL}) {
    padding-top: 0;
  }
`;

export const GetStartedSumDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 21px;
  max-width: 620px;
`;

export const InformationSection = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f9bc2e;
  border-bottom: 1px solid #f9bc2e;
  width: 100%;
`;

export const HorizontalDivider = styled(Divider)`
  &&&& {
    border-top: none;
    border-bottom: 1px solid #f9bc2e;
    padding: 0;
    margin: 0;
  }
`;
