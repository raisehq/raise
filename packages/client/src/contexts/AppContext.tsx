import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import LogRocket from 'logrocket';
import useAsyncEffect from '../hooks/useAsyncEffect';
import UseWebSockets from '../hooks/useWebSockets';
import { getGraphWSEndpoint, getDaiWSEndpoint } from '../utils';

import Queryies from '../helpers/queryies';

import useWeb3Checker from '../hooks/useWeb3Checker';
import { useRootContext } from './RootContext';
import LocalData from '../helpers/localData';

export const AppContext = createContext({
  modalRefs: {},
  webSocket: {},
  setWebSocket: {},
  daiWebSocket: {},
  setDaiWebSocket: {},
  onSetGetStarted: {},
  getStarted: false,
  web3Status: {},
  isLoading: true,
  setLoading: {},
  setGetStarted: {}
});

export const useAppContext = () => useContext(AppContext);

export function Updater() {
  const {
    store: {
      auth: {
        login: { logged: isLogged, checked: isChecked }
      },
      blockchain: { contracts },
      config: { network },
      kyc: { token },
      user: {
        details: { id, accounttype_id: accounttypeId, email, status },
        cryptoAddress: { address, cryptotypeId }
      }
    },
    actions: {
      auth: { onVerifyAuth },
      user: { onGetCryptoAddressByUser, onGetUser, onGetUserFromBC },
      blockchain: { fetchContracts },
      kyc: { onInitKyc },
      config: { updateNetwork }
    }
  }: any = useRootContext();

  const {
    setLoading,
    web3Status: { networkMatches, walletNetworkId, walletNetwork, hasProvider },
    setGetStarted,
    setWebSocket,
    setDaiWebSocket,
    webSocket,
    firstLogin,
    daiWebSocket
  }: any = useAppContext();

  if (process.env.REACT_APP_LOGROCKET === 'true') {
    LogRocket.init('rjsyho/raisehq');
  }

  // Enabling connectionsStart
  useEffect(() => {
    if (networkMatches && network !== walletNetwork && walletNetwork !== 'NO_NETWORK') {
      setLoading(false);
      setWebSocket({});
      setDaiWebSocket({});
      updateNetwork(walletNetwork, walletNetworkId);
    }
  }, [network, networkMatches, walletNetwork]);
  // Enabling connections

  useEffect(() => {
    if (!isLogged) {
      setGetStarted(false);
    } else if (firstLogin && firstLogin.includes('first')) setGetStarted(true);
  }, [isLogged]);

  useEffect(() => {
    if (Object.keys(webSocket).length === 0) {
      const webSocketInstance = new UseWebSockets(getGraphWSEndpoint(network), 'graphql-ws');
      setWebSocket({ webSocket: webSocketInstance });
    }
  }, [webSocket, network]);

  useEffect(() => {
    if (Object.keys(daiWebSocket).length === 0) {
      const webSocketInstance = new UseWebSockets(getDaiWSEndpoint(network), 'graphql-ws');
      setDaiWebSocket({ webSocket: webSocketInstance });
    }
  }, [daiWebSocket, network]);

  useEffect(() => {
    if (Object.keys(webSocket).length !== 0 && address) {
      const { query, subscriptionName } = Queryies.subscriptions.userStatus;
      const variables = {
        address
      };
      const callback = onGetUserFromBC;
      webSocket.webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, address]);

  useAsyncEffect(async () => {
    if (isLogged) {
      onGetCryptoAddressByUser();
      onGetUser();

      // CHECK IF NOT KCYED
      if (!token) {
        await onInitKyc();
      }
    } else {
      await onVerifyAuth();
    }

    if (contracts === null) fetchContracts();
  }, [isLogged, token, address, network]);

  useEffect(() => {
    if (process.env.REACT_APP_LOGROCKET === 'true') {
      if (isLogged) {
        LogRocket.identify(id, {
          id,
          email,
          accounttypeId,
          status,
          availWidth: window.innerWidth,
          availHeight: window.innerHeight
        });
      } else {
        // @ts-ignore
        LogRocket.identify(undefined, {
          availWidth: window.innerWidth,
          availHeight: window.innerHeight
        });
      }
    }
  }, [isLogged, id, accounttypeId, email, status]);

  useEffect(() => {
    if (isChecked && hasProvider !== undefined && contracts) {
      if (isLogged) {
        // if is logged we need to wait until we check the cryptotypeId
        if (cryptotypeId !== null) setLoading(false);
      } else {
        // if we are not logged simply disable loading
        setLoading(false);
      }
    }
  }, [isChecked, hasProvider, cryptotypeId, contracts]);

  return null;
}

export default function Provider({ children }) {
  const firstLogin = LocalData.get('firstLogin');
  const {
    store: {
      user: {
        cryptoAddress: { address }
      }
    }
  }: any = useRootContext();
  const [getStarted, setGetStarted] = useState(!!(firstLogin && firstLogin.includes('first')));
  const [isLoading, setLoading] = useState(true);

  const modalRefs = useRef<HTMLDivElement>(null);

  const [webSocket, setWebSocket]: any = useState({});
  const [daiWebSocket, setDaiWebSocket]: any = useState({});
  const web3Status = useWeb3Checker(address);

  const onSetGetStarted = () => setGetStarted(!getStarted);

  return (
    <AppContext.Provider
      value={{
        getStarted,
        onSetGetStarted,
        modalRefs,
        webSocket,
        setGetStarted,
        isLoading,
        setLoading,
        daiWebSocket,
        web3Status,
        setWebSocket,
        setDaiWebSocket
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
