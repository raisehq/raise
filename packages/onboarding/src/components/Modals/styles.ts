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
  flex: 0 1 100%;
`;

export const OnboardingFormContent: any = styled.div`
  flex: 0 1 100%;
  padding: 5%;
  border-left: 1px solid #dfe3e9;
`;

export const OnboardingImage: any = styled.img``;

export const OnboardingTitle: any = styled.div`
  flex: 0 1 100%;
`;
