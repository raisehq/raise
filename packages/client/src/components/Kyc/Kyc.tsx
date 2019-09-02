import React, { useEffect, useContext } from 'react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { AppContext } from '../App';
import { getToken } from '../../services/external_kyc';

const KYC = () => {
  const { history }: any = useContext(AppContext);

  useAsyncEffect(async () => {
    if (history.location.pathname === '/kyc') {
      const token = await getToken();

      window['idensic'].init(
        '#idensic',
        {
          clientId: 'hero',
          externalUserId: 'random-buh5rdjsmi',
          accessToken: token
        },
        function(messageType, payload) {
          console.log('[IDENSIC DEMO] Idensic message:', messageType, payload);
        }
      );
    }
  }, [history]);

  useEffect(() => {}, []);

  return <div id="idensic"></div>;
};

export default KYC;
