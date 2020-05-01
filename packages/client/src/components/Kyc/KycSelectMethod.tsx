import React from 'react';
import {
  CardTitle,
  KycWrapper,
  KycContainer,
  KycTitleWrapper,
  InformationSection,
  HorizontalDivider
} from './Kyc.styles';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { useAppContext } from '../../contexts/AppContext';
import InformationContainer from './InformationSection';
import KycExtraInformation from './KycExtraInformation';

const KycSelectMethod = () => {
  const { isMobile }: any = useAppContext();

  return (
    <KycWrapper>
      <OnboardingProgressBar step={3} isMobile={isMobile} />
      <KycContainer>
        <KycTitleWrapper>
          <CardTitle>It&apos;s time to verify your account</CardTitle>
        </KycTitleWrapper>
        <KycExtraInformation />
      </KycContainer>
      <InformationSection>
        <InformationContainer title="How to verify with Sum&Sub" slug="kyc-sumsub-instructions" />
        <HorizontalDivider />
        <InformationContainer title="How to verify with Bloom" slug="kyc-bloom-instructions" />
      </InformationSection>
    </KycWrapper>
  );
};

export default KycSelectMethod;
