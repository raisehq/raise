import React, { useContext } from 'react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { KYCWrapper, KYCHolder, KYCDisclaimer, Title, OnGoBackButton } from './Kyc.styles';
import AppContext from '../AppContext';
import GetStarted from '../GetStarted';
import { Button } from 'semantic-ui-react';

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
    if (history.location.pathname === '/kyc-sumsub' && token) {
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
      <Title as="h2">Verify your account</Title>
      <KYCHolder>
        <KYCDisclaimer>
          <p>
            The process is simple and should take no more than 3 minutes. We will need two things
            from you: a <b>photo of your proof of ID</b> (e.g. passport), <b>and a live selfie</b>.
          </p>
          <p>
            Your application will be verified by a third-party organization. After submission, you
            will receive a notification confirming your approval or asking to verify further
            information. Approval usually takes a few minutes, but can sometimes take up to 24
            hours.
          </p>
          <p>
            Learn more:{' '}
            <a href="https://raise.it/blog/kyc-guide" rel="noorigin ">
              <i>How to pass our KYC in under 5 minutes</i>
            </a>
          </p>
        </KYCDisclaimer>
        <div id="idensic" />
      </KYCHolder>
      <OnGoBackButton>
        <Button basic color="black" onClick={() => history.push('/kyc')}>
          Go back
        </Button>
      </OnGoBackButton>
    </KYCWrapper>
  );
};

export default KYC;
