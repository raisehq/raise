import React, { useContext } from 'react';
import { Header } from 'semantic-ui-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { KYCWrapper, KYCHolder, KYCDisclaimer } from './Kyc.styles';
import AppContext from '../AppContext';
import GetStarted from '../GetStarted';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';

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
    <KYCWrapper>
      <GetStarted />
      <OnboardingProgressBar step={3} isMobile={isMobile} />
      <Header as="h2">Verify your account</Header>
      <KYCHolder>
        <KYCDisclaimer>
          <p>
            The objective of verifying your account is to prevent Raise from being used by criminal
            elements for money laundering activities.
          </p>
          <p>
            This process will take approximately 3 minutes to complete and it will be verified by a
            third-party organization. After submission, you will receive an email confirming your
            approval or to verify further information. The time-frame for approval can vary on a
            user to user basis.
          </p>
        </KYCDisclaimer>
        <div id="idensic" />
      </KYCHolder>
    </KYCWrapper>
  );
};

export default KYC;
