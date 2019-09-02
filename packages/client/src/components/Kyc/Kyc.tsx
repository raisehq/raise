import React, { useEffect } from 'react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
//import { AppContext } from '../App';
import { getToken } from '../../services/external_kyc';

const KYC = () => {
  useAsyncEffect(async () => {
    getToken();
  }, []);

  useEffect(() => {
    window['idensic'].init(
      '#idensic',
      {
        clientId: 'hero',
        externalUserId: 'random-buh5rdjsmi',
        accessToken: '_act-2fc1fcea-d3c4-469b-9eb4-1517acab70b3'
      },
      function(messageType, payload) {
        console.log('[IDENSIC DEMO] Idensic message:', messageType, payload);
      }
    );
  }, []);

  return <div id="idensic"></div>;
};

export default KYC;
