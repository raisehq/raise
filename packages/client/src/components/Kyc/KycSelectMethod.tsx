import React, { useContext } from 'react';
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
  KycButtonLinkIconContainer
} from './Kyc.styles';
import { Link } from '../Link';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';
import AppContext from '../AppContext';

const KycSelectMethod = () => {
  const { history }: any = useContext(AppContext);
  return (
    <KycWrapper>
      <OnboardingProgressBar step={3} isMobile={isMobile} />
      <KycContainer>
        <KycTitleWrapper>
          <CardTitle>It's time to verify your account</CardTitle>

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
            <KycButton className="btn-kyc-sumsub" onClick={() => history.push('/kyc-sumsub')}>
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
            <KycButton onClick={() => history.push('/kyc-bloom')}>
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
              <li>A selfie holding you ID</li>
            </ul>
          </KycMessageContent>
          <KycMessageContent>This process will only take 3 minutes</KycMessageContent>
        </KycMessage>
        <LinkWrap>
          <Link to="/">Do it later</Link>
        </LinkWrap>
      </KycContainer>
    </KycWrapper>
  );
};

export default KycSelectMethod;
