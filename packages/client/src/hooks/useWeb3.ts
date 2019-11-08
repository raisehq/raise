import { browserName } from 'react-device-detect';
import Web3 from 'web3';
import CryptoWallets from '../commons/cryptoWallets';

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
        //console.error('[useWeb3] Error enable wallet.', error);
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
      console.log(
        ' NEW PROVIDER  : ',
        getCurrentProviderName(provider),
        ' OLD PROVIDER : ',
        getCurrentProviderName()
      );
      if (
        getCurrentProviderName() !== CryptoWallets.Opera ||
        getCurrentProviderName(provider) !== getCurrentProviderName()
      ) {
        const newWeb3 = new Web3(provider);
        // @ts-ignore
        Connection.set(newWeb3);
      }
      await enableWeb3();
    } catch (error) {
      //console.error('[useWeb3] Error connecting to the wallet.', error);
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
    getCurrentProviderName,
    getPrimaryAccount,
    getDefaultWeb3,
    requestSignature
  };
};

export default useWeb3;
