import { browserName } from 'react-device-detect';
import Web3 from 'web3';

const Connection = {
  get: () => {
    // @ts-ignore
    const { instance } = window as any;
    if (instance) {
      return instance;
    }

    // @ts-ignore
    return window.instance;
  },
  getDefaultProvider: () => {
    // @ts-ignore
    const { ethereum } = window as any;
    if (ethereum) {
      return new Web3(ethereum);
    }

    const { web3 } = window as any;
    if (web3 && web3.currentProvider) {
      return web3.currentProvider;
    }

    return null;
  },
  getProvider: () => {
    const { currentProvider }: any = Connection.get() || {};
    return currentProvider;
  },
  set: conn => {
    // @ts-ignore
    window.instance = conn;
  },
  getPrevious: () => {
    // @ts-ignore
    const previous = Connection.getDefaultProvider();
    return new Web3(previous);
  }
};

const useWeb3 = () => {
  const enableWeb3 = async () => {
    const connection = Connection.get();
    if (connection.currentProvider) {
      try {
        await connection.currentProvider.enable();
        connection.currentProvider.autoRefreshOnNetworkChange = false;
      } catch (error) {
        console.error('[useWeb3] Error connecting to the wallet.', error);
      }
    }
  };
  const getCurrentProviderName = (provider?: any) => {
    const conn = provider || Connection.getProvider();
    if (!conn) return 'not_connected';
    if (conn.isMetaMask) return 'metamask';
    if (conn.isDapper) return 'dapper';
    if (conn.isTrust) return 'trust';
    if (conn.isGoWallet) return 'goWallet';
    if (conn.isAlphaWallet) return 'alphaWallet';
    if (conn.isStatus) return 'status';
    if (conn.isWalletLink) return 'coinbase';
    const { __CIPHER__ } = window as any;
    if (typeof __CIPHER__ !== 'undefined') return 'cipher';
    if (conn.constructor.name === 'EthereumProvider') return 'mist';
    if (conn.constructor.name === 'Web3FrameProvider') return 'parity';
    if (conn.host && conn.host.indexOf('infura') !== -1) return 'infura';
    if (conn.host && conn.host.indexOf('localhost') !== -1) return 'localhost';
    if (browserName && browserName.includes('Opera')) return 'opera-wallet';
    return 'unknown';
  };

  const setNewProvider = async provider => {
    try {
      console.log(
        ' NEW PROVIDER  : ',
        getCurrentProviderName(provider),
        ' OLD PROVIDER : ',
        getCurrentProviderName()
      );
      if (
        getCurrentProviderName() !== 'opera-wallet' ||
        getCurrentProviderName(provider) !== getCurrentProviderName()
      ) {
        const newWeb3 = new Web3(provider);
        // @ts-ignore
        Connection.set(newWeb3);
      }
      await enableWeb3();
    } catch (error) {
      console.error('[useWeb3] Error connecting to the wallet.', error);
    }
  };

  const getPrimaryAccount = async () => {
    try {
      const connection = Connection.get();
      if (connection && connection.eth) {
        const accounts = await connection.eth.getAccounts();
        if (accounts && accounts.length > 0) return accounts[0];
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const getDefaultWeb3 = () => {
    const prevWeb3 = Connection.getPrevious();
    return {
      conn: prevWeb3,
      name: prevWeb3 ? getCurrentProviderName(prevWeb3.currentProvider) : 'unknow'
    };
  };

  return {
    getWeb3: Connection.get,
    enableWeb3,
    setNewProvider,
    getCurrentProviderName,
    getPrimaryAccount,
    getDefaultWeb3
  };
};

export default useWeb3;
