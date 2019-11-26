import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';

export const OnboardingModal: any = styled(Modal)`
  display: flex;
  flex-direction: row;
`;

export const OnboardingHeader: any = styled.div`
  display: flex;
  height: 110px;
  border-bottom: 1px solid #dfe3e9;
  margin: 0 5px 0 5px;
`;

export const OnboardingContentWrapper: any = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OnboardingImageWrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 45%;
`;

export const OnboardingFormContent: any = styled.div`
  flex: 0 1 55%;
  padding: 5%;
  border-left: 1px solid #dfe3e9;
`;

export const OnboardingImage: any = styled.img`
  max-width: 100%;
`;

export const OnboardingTitle: any = styled.div`
  font-size: 50px;
  font-family: Lato;
  line-height: 60px;
  color: #3c4251;
  font-weight: bold;
  height: 60px;
  width: 260px;
  margin: 5%;
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
`;
export const OnboardingTitleWrapper: any = styled.div`
  padding: 15%;
`;
