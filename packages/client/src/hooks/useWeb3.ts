import { browserName } from 'react-device-detect';
import Web3 from 'web3';
import CryptoWallets from '../commons/cryptoWallets';
import _ from 'underscore';

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

    const { web3Ethereum } = window as any;
    if (web3Ethereum && web3Ethereum.currentProvider) {
      // @ts-ignore
      return web3Ethereum;
    }
    // @ts-ignore
    const { ethereum } = window as any;
    if (ethereum) {
      // @ts-ignore
      window.web3Ethereum = new Web3(ethereum);
      // @ts-ignore
      return window.web3Ethereum;
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
        const accounts = await connection.eth.getAccounts();
        if (!accounts || accounts.length === 0) {
          console.log(' ACCOUNTS FUCK METAMASK ', accounts);
          throw new Error(' Metamask are not enabled ');
        }
      } catch (error) {
        console.error('[useWeb3] Error enable wallet.', error);
        throw error;
      }
    }
  };
  const getCurrentProviderName = (provider?: any) => {
    const conn = provider || Connection.getProvider();
    if (!conn) return CryptoWallets.NotConnected;
    if (conn.isMetaMask) return CryptoWallets.Metamask;
    if (conn.isWalletLink) return CryptoWallets.Coinbase;
    const { __CIPHER__ } = window as any;
    if (typeof __CIPHER__ !== 'undefined') return 100;
    if (conn.constructor.name === 'EthereumProvider') return 101;
    if (conn.constructor.name === 'Web3FrameProvider') return 102;
    if (conn.host && conn.host.indexOf('infura') !== -1) return 103;
    if (conn.host && conn.host.indexOf('localhost') !== -1) return 104;
    if (browserName && browserName.includes('Opera')) return CryptoWallets.Opera;
    return CryptoWallets.Unknow;
  };

  const setNewProvider = async provider => {
    try {
      const connection = Connection.get();
      if (
        (getCurrentProviderName() !== CryptoWallets.Opera ||
          getCurrentProviderName(provider) !== getCurrentProviderName()) &&
        !_.isEqual(provider, connection ? connection.currentProvider : null)
      ) {
        const newWeb3 = new Web3(provider);
        // @ts-ignore
        Connection.set(newWeb3);
      }
    } catch (error) {
      throw error;
    }
  };
  const setNewProviderAndCheck = async provider => {
    try {
      await setNewProvider(provider);
      const connection = Connection.get();
      const accounts = await connection.eth.getAccounts();
      if (!accounts || accounts.length === 0) {
        throw new Error(' The wallet are not enabled ');
      }
    } catch (error) {
      throw error;
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
      name: prevWeb3 ? getCurrentProviderName(prevWeb3.currentProvider) : CryptoWallets.Unknow
    };
  };

  const requestSignature = async () => {
    try {
      const connection = Connection.get();
      const address = await getPrimaryAccount();

      const message = 'Prove to Raise platform that you own this address.';
      const signature = await connection.eth.personal.sign(message, address, '');
      return { address, signature };
    } catch (error) {
      console.error(`Error making signature: ${error.message}`, error);
      throw new Error(`Error making signature: ${error.message}`);
    }
  };

  return {
    getWeb3: Connection.get,
    enableWeb3,
    setNewProvider,
    setNewProviderAndCheck,
    getCurrentProviderName,
    getPrimaryAccount,
    getDefaultWeb3,
    requestSignature
  };
};

export default useWeb3;
