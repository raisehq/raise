import { useRef } from 'react';
import { browserName } from 'react-device-detect';
import Web3 from 'web3';

const getConnection = ({ raiseWeb3, ethereum, web3 }) => {
  let conn: any = null;
  if (raiseWeb3) {
    conn = raiseWeb3;
  } else if (ethereum) {
    conn = new Web3(ethereum);
  } else if (web3) {
    conn = web3;
  }
  return conn;
};

const useWeb3 = () => {
  const connection: any = useRef(
    // @ts-ignore
    getConnection(window)
  );
  const defaultWeb3: any = useRef(
    // @ts-ignore
    getConnection(window)
  );

  const enableWeb3 = async () => {
    if (connection.current.currentProvider) {
      try {
        await connection.current.currentProvider.enable();
        connection.current.currentProvider.autoRefreshOnNetworkChange = false; // prevent Metamask refresh webpage
      } catch (error) {
        console.error('[useWeb3] Error connecting to the wallet.', error);
      }
    }
  };

  const setNewProvider = async provider => {
    const newWeb3 = new Web3(provider);
    // @ts-ignore
    window.raiseWeb3 = newWeb3; // Set the new connection to window element
    connection.current = newWeb3;
    await connection.current.currentProvider.enable();
    connection.current.currentProvider.autoRefreshOnNetworkChange = false; // prevent Metamask refresh webpage
  };

  const getCurrentProviderName = (defaultConn?: any) => {
    const conn = defaultConn || connection.current;
    if (!conn || !conn.currentProvider) return 'web3-unknown';

    if (conn.currentProvider.isMetaMask) return 'metamask';

    if (conn.currentProvider.isDapper) return 'dapper';

    if (conn.currentProvider.isTrust) return 'trust';

    if (conn.currentProvider.isGoWallet) return 'goWallet';

    if (conn.currentProvider.isAlphaWallet) return 'alphaWallet';

    if (conn.currentProvider.isStatus) return 'status';

    if (conn.currentProvider.isToshi) return 'coinbase';
    //  @ts-ignore
    // eslint-disable-next-line
    if (typeof window.__CIPHER__ !== 'undefined') return 'cipher';

    if (conn.currentProvider.constructor.name === 'EthereumProvider') return 'mist';

    if (conn.currentProvider.constructor.name === 'Web3FrameProvider') return 'parity';
    // eslint-disable-next-line
    if (conn.currentProvider.host && conn.currentProvider.host.indexOf('infura') !== -1) {
      // eslint-disable-next-line
      return 'infura';
    }

    if (conn.currentProvider.host && conn.currentProvider.host.indexOf('localhost') !== -1) {
      // eslint-disable-next-line
      return 'localhost';
    }
    if (browserName && browserName.includes('Opera')) return 'opera-wallet';

    return 'unknown';
  };
  const getPrimaryAccount = async () => {
    if (connection) {
      const accounts = await connection.current.eth.getAccounts();
      if (accounts && accounts.length > 0) return accounts[0];
    }
    return null;
  };

  const getDefaultWeb3 = () => {
    return { conn: defaultWeb3.current, name: getCurrentProviderName(defaultWeb3.current) };
  };

  return {
    web3: connection.current,
    enableWeb3,
    setNewProvider,
    getCurrentProviderName,
    getPrimaryAccount,
    getDefaultWeb3
  };
};

export default useWeb3;
