import React, { useContext } from 'react';
import { Header } from 'semantic-ui-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { KYCWrapper, KYCHolder, KYCDisclaimer } from './Kyc.styles';
import AppContext from '../AppContext';

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

      window['idensic'].init(
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
        function(messageType, payload) {
          console.log('[IDENSIC DEMO] Idensic message:', messageType, payload);
        }
      );
    }
  }, [history, token]);

  return (
    <KYCWrapper>
      <Header as="h2">Verify your account</Header>
      <KYCHolder>
        <KYCDisclaimer>
          Please fill in your personal information and upload your documents for our compliance
          officers to review and approve your account. This process will be held by a third party.
        </KYCDisclaimer>
        <div id="idensic"></div>
      </KYCHolder>
    </KYCWrapper>
  );
};

export default KYC;
