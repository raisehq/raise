import React, { useContext } from 'react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
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
import AppContext from '../AppContext';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';
import { Image } from 'semantic-ui-react';

const KYC = () => {
  const {
    history,
    store,
    store: {
      kyc: { token }
    },
    actions: {
      kyc: { onConnect }
    }
  }: any = useContext(AppContext);

  useAsyncEffect(async () => {
    if (history.location.pathname === '/kyc' && token) {
      const { id } = store.user.details;

      await onConnect();
      // @ts-ignore
      window.idensic.init(
        '#idensic',
        {
          clientId: process.env.REACT_APP_SUMSUB_CLIENTID,
          externalUserId: id,
          accessToken: token,
          excludedCountries: [
            'IRN',
            'IRQ',
            'COD',
            'BIH',
            'SDN',
            'SYR',
            'ZWE',
            'LBR',
            'ALB',
            'MKD',
            'XKX',
            'SRB',
            'MNE',
            'BLR',
            'MMR',
            'CIV',
            'CUB',
            'USA',
            'UMI',
            'SSD',
            'PRK'
          ]
        },
        (messageType, payload) =>
          console.log('[IDENSIC DEMO] Idensic message:', messageType, payload)
      );
    }
  }, [history, token]);

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
            <KycSumSub className="btn-kyc-sumsub" onClick={() => {}}>
              Verify with SumSub
            </KycSumSub>
          </KycButtonWrapper>
          <KycButtonWrapper>
            <KycBloom onClick={() => {}}>
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

export default KYC;
