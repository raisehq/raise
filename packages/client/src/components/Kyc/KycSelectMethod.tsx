import React, { useContext } from 'react';
import {
  CardTitle,
  CardSubTitle,
  KycWrapper,
  KycContainer,
  KycTitleWrapper,
  SelectKycMethodList,
  KycSumSub,
  KycBloom,
  KycButtonWrapper,
  LinkWrap
} from './Kyc.styles';
import { Link } from '../Link';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';
import { Image } from 'semantic-ui-react';
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
              The objective of verifying your account is to prevent Raise from being used by
              criminal elements for money laundering activities.
            </p>
          </CardSubTitle>
        </KycTitleWrapper>
        <SelectKycMethodList>
          <KycButtonWrapper>
            <KycSumSub className="btn-kyc-sumsub" onClick={() => history.push('/kyc-sumsub')}>
              Verify with SumSub
            </KycSumSub>
          </KycButtonWrapper>
          <KycButtonWrapper>
            <KycBloom onClick={() => {}} disabled>
              <span>Verify with </span>
              <Image
                src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`}
                size="tiny"
              />
            </KycBloom>
          </KycButtonWrapper>
        </SelectKycMethodList>
        <LinkWrap>
          <Link to="/">Do it later</Link>
        </LinkWrap>
      </KycContainer>
    </KycWrapper>
  );
};

export default KycSelectMethod;
