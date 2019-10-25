import { useRef, useState, useEffect } from 'react';
import { browserName } from 'react-device-detect';
import Web3 from 'web3';

const useWeb3 = () => {
  const [connection, setConnection]: any = useState(null);
  const defaultProvider: any = useRef(
    // @ts-ignore
    window.ethereum ? window.ethereum : (window.web3 && window.web3.currentProvider) || null
  );

  useEffect(() => {
    // Default connection
    if (connection === null) setConnection(new Web3(defaultProvider));
  }, [defaultProvider.current]);

  const enableWeb3 = async () => {
    if (connection.currentProvider) {
      try {
        await connection.currentProvider.enable();
        connection.currentProvider.autoRefreshOnNetworkChange = false; // prevent Metamask refresh webpage
      } catch (error) {
        console.error('[useWeb3] Error connecting to the wallet.', error);
      }
    }
  };
  const setNewProvider = provider => {
    const newWeb3 = new Web3(provider);
    // @ts-ignore
    window.web3 = newWeb3; // Set the new connection to window element
    setConnection(newWeb3);
  };
  const getCurrentProviderName = () => {
    if (!connection) return 'web3-unknown';

    if (connection.currentProvider.isMetaMask) return 'metamask';

    if (connection.currentProvider.isDapper) return 'dapper';

    if (connection.currentProvider.isTrust) return 'trust';

    if (connection.currentProvider.isGoWallet) return 'goWallet';

    if (connection.currentProvider.isAlphaWallet) return 'alphaWallet';

    if (connection.currentProvider.isStatus) return 'status';

    if (connection.currentProvider.isToshi) return 'coinbase';
    //  @ts-ignore
    // eslint-disable-next-line
    if (typeof window.__CIPHER__ !== 'undefined') return 'cipher';

    if (connection.currentProvider.constructor.name === 'EthereumProvider') return 'mist';

    if (connection.currentProvider.constructor.name === 'Web3FrameProvider') return 'parity';
    // eslint-disable-next-line
    if (
      connection.currentProvider.host &&
      connection.currentProvider.host.indexOf('infura') !== -1
    ) {
      // eslint-disable-next-line
      return 'infura';
    }

    if (
      connection.currentProvider.host &&
      connection.currentProvider.host.indexOf('localhost') !== -1
    ) {
      // eslint-disable-next-line
      return 'localhost';
    }
    if (browserName && browserName.includes('Opera')) return 'opera-wallet';

    return 'unknown';
  };
  const getPrimaryAccount = async () => {
    if (connection) {
      const accounts = await connection.eth.getAccounts();
      if (accounts && accounts.length > 0) return accounts[0];
    }
    return false;
  };
  return {
    web3: connection,
    enableWeb3,
    setNewProvider,
    getCurrentProviderName,
    getPrimaryAccount
  };
};

export default useWeb3;
