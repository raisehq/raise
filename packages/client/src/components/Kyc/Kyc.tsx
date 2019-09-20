import React, { useContext } from 'react';
import { Header } from 'semantic-ui-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { KYCWrapper, KYCHolder, KYCDisclaimer } from './Kyc.styles';
import { AppContext } from '../App';

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
          clientId: 'hero',
          externalUserId: id,
          accessToken: token
        },
        function (messageType, payload) {
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
          officers to review and approve your account. This process will be held by Sumsub software.
        </KYCDisclaimer>
        <div id="idensic"></div>
      </KYCHolder>
    </KYCWrapper>
  );
};

export default KYC;
