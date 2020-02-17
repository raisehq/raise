import React, { useContext } from 'react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import {
  KYCWrapper,
  KYCHolder,
  OnGoBackButton,
  GetStartedSumTitle,
  GetStartedSumSubtitle,
  GetStartedSumDescription
} from './Kyc.styles';
import AppContext from '../AppContext';
import GetStarted from '../GetStarted';
import { Button, Image } from 'semantic-ui-react';

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
      <GetStartedSumTitle as="h2">Verify your account</GetStartedSumTitle>
      <GetStartedSumSubtitle>
        <span>with</span>
        <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
      </GetStartedSumSubtitle>
      <GetStartedSumDescription>
        <span>
          This process will take approximately 3 minutes to complete and it will be verified by a
          third-party organization. After submission, you will receive an email confirming your
          approval or to verify further information. The time-frame for approval can vary on a user
          to user basis.
        </span>
      </GetStartedSumDescription>
      <KYCHolder>
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
