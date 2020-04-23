import React from 'react';
import {
  CardTitle,
  CardSubTitle,
  KycWrapper,
  KycContainer,
  KycTitleWrapper,
  SelectKycMethodList,
  KycButton,
  KycButtonMethodName,
  KycButtonWrapper,
  LinkWrap,
  KycMessage,
  KycMessageContent,
  KycButtonLogo,
  KycButtonText,
  KycButtonLinkIcon,
  KycButtonLinkIconContainer,
  InformationSection,
  HorizontalDivider
} from './Kyc.styles';
import { Link } from '../Link';
import OnboardingProgressBar from '../OnboardingProgressBar';
import useRouter from '../../hooks/useRouter';
import { useAppContext } from '../../contexts/AppContext';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import InformationContainer from './InformationSection';

const KycSelectMethod = () => {
  const { history }: any = useRouter();
  const { isMobile }: any = useAppContext();
  const tagManager = useGoogleTagManager('Kyc');

  const kycLabelMapps = {
    sumsub: 'sumsub',
    bloom: 'bloom'
  };

  const providerKYC = provider => {
    tagManager.sendEvent(TMEvents.Click, kycLabelMapps[provider]);

    switch (provider) {
      case 'sumsub':
        history.push('/kyc-sumsub');
        break;
      case 'bloom':
        history.push('/kyc-bloom');
        break;
      default:
        break;
    }
  };

  return (
    <KycWrapper>
      <OnboardingProgressBar step={3} isMobile={isMobile} />
      <KycContainer>
        <KycTitleWrapper>
          <CardTitle>It&apos;s time to verify your account</CardTitle>

          <CardSubTitle>
            <p>
              Our verification process is in place to make your Raise experience exceptional. We put
              measures in place to prevent our platform from being used for criminal purposes, such
              as money laundering, and to ensure the integrity and security of our system.
            </p>
          </CardSubTitle>
        </KycTitleWrapper>
        <SelectKycMethodList>
          <KycButtonWrapper>
            <KycButton className="btn-kyc-sumsub" onClick={() => providerKYC('sumsub')}>
              <KycButtonMethodName>
                <KycButtonLogo
                  src={`${process.env.REACT_APP_HOST_IMAGES}/images/sumsub_icon_80x80.png`}
                />
                <KycButtonText>Verify with Sum&Sub</KycButtonText>
              </KycButtonMethodName>
              <KycButtonLinkIconContainer>
                <KycButtonLinkIcon name="chevron right" size="big" />
              </KycButtonLinkIconContainer>
            </KycButton>
          </KycButtonWrapper>
          <KycButtonWrapper>
            <KycButton onClick={() => providerKYC('bloom')}>
              <KycButtonMethodName>
                <KycButtonLogo
                  src={`${process.env.REACT_APP_HOST_IMAGES}/images/bloom_icon_80x80.png`}
                />
                <KycButtonText>Verify with Bloom</KycButtonText>
              </KycButtonMethodName>
              <KycButtonLinkIconContainer>
                <KycButtonLinkIcon name="chevron right" size="big" />
              </KycButtonLinkIconContainer>
            </KycButton>
          </KycButtonWrapper>
        </SelectKycMethodList>
        <KycMessage>
          <KycMessageContent>
            To start this step, we will need two things from you
          </KycMessageContent>
          <KycMessageContent>
            <ul>
              <li>A photo of your proof of ID (e.g. passport)</li>
              <li>You will be required to take a selfie</li>
            </ul>
          </KycMessageContent>
          <KycMessageContent>This process will only take 3 minutes</KycMessageContent>
        </KycMessage>
        <LinkWrap>
          <Link to="/">Do it later</Link>
        </LinkWrap>
      </KycContainer>
      <InformationSection>
        <InformationContainer
          title={'How to verify with Sum&Sub'}
          slug={'kyc-sumsub-instructions'}
        />
        <HorizontalDivider />
        <InformationContainer title={'How to verify with Bloom'} slug={'kyc-bloom-instructions'} />
      </InformationSection>
    </KycWrapper>
  );
};

export default KycSelectMethod;
