import { useState, useEffect } from 'react';
import _ from 'lodash';
import { browserName, isMobile } from 'react-device-detect';
import Web3 from 'web3';
import WalletLink from 'walletlink';
import CryptoWallets from '../commons/cryptoWallets';
import { useRootContext } from '../contexts/RootContext';

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

const getWalletLinkClient = (network, networkId) => {
  const walletLink = new WalletLink({
    appName: 'Raise.it',
    appLogoUrl: `https://${process.env.REACT_APP_HOST_IMAGES}/favicons/favicon.ico`
  });

  const ethereum = walletLink.makeWeb3Provider(
    `https://${network}.infura.io/v3/${process.env.REACT_APP_INFURA}`,
    networkId
  );

  // FIX BUG: Walletlink bug with web3
  // @ts-ignore
  ethereum.on = null;

  return ethereum;
};

const useWeb3 = () => {
  const {
    store: {
      blockchain: { web3 }
    },
    actions: {
      blockchain: { setWeb3 }
    }
  }: any = useRootContext();
  const [connection, setConnnection]: any = useState(web3);

  useEffect(() => {
    setConnnection(web3);
  }, [web3]);

  const enableWeb3 = async () => {
    // const connection = Connection.get();
    if (connection && connection.currentProvider) {
      try {
        await connection.currentProvider.enable();
        connection.currentProvider.autoRefreshOnNetworkChange = false;
        const accounts = await connection.eth.getAccounts();
        if (!accounts || accounts.length === 0) {
          throw new Error('[useWeb3] Metamask are not enabled ');
        }
      } catch (error) {
        console.error('[useWeb3] Error enable wallet.', error);
        // throw error;
      }
    }
  };
  const getCurrentProviderName = (provider?: any) => {
    const globalProvider = connection ? connection.currentProvider : undefined;
    const conn = provider || globalProvider;
    if (!conn) return CryptoWallets.NotConnected;
    if (conn.isMetaMask) return CryptoWallets.Metamask;
    if (conn.isWalletLink) return CryptoWallets.Coinbase;
    if (conn.isToshi) return CryptoWallets.Coinbase;
    if (conn.constructor.name === 'EthereumProvider') return 101;
    if (conn.constructor.name === 'Web3FrameProvider') return 102;
    if (conn.host && conn.host.indexOf('infura') !== -1) return 103;
    if (conn.host && conn.host.indexOf('localhost') !== -1) return 104;
    if (browserName && browserName.includes('Opera')) return CryptoWallets.Opera;
    return CryptoWallets.WebWallet;
  };

  const setNewProvider = async provider => {
    try {
      if (
        (getCurrentProviderName() !== CryptoWallets.Opera ||
          getCurrentProviderName(provider) !== getCurrentProviderName()) &&
        !_.isEqual(provider, connection ? connection.currentProvider : null)
      ) {
        const newWeb3 = new Web3(provider);
        // @ts-ignore
        Connection.set(newWeb3);
      }
      setWeb3(Connection.get());
    } catch (error) {
      throw error;
    }
  };

  const getPrimaryAccount = async () => {
    try {
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
      name: prevWeb3 ? getCurrentProviderName(prevWeb3.currentProvider) : CryptoWallets.Unknown
    };
  };

  const requestSignature = async () => {
    try {
      const address = await getPrimaryAccount();

      const message = 'Prove to Raise platform that you own this address.';
      const signature = await connection.eth.personal.sign(message, address, '');
      return { address, signature };
    } catch (error) {
      console.error(`[useWeb3] Error making signature: ${error.message}`, error);
      throw new Error(`[useWeb3] Error making signature: ${error.message}`);
    }
  };

  const connectWallet = async (cryptotypeId, network, networkId, checkBlock?) => {
    // Check the type of wallet and try to connect to the provider
    const defaultWeb3 = getDefaultWeb3();

    switch (cryptotypeId) {
      case CryptoWallets.Metamask:
        if (defaultWeb3.name !== CryptoWallets.Metamask) throw new Error('Wallet not alowed');
        await setNewProvider(defaultWeb3.conn.currentProvider);
        break;
      case CryptoWallets.Opera:
        if (defaultWeb3.name !== CryptoWallets.Opera) throw new Error('Wallet not alowed');
        await setNewProvider(defaultWeb3.conn.currentProvider);
        break;
      case CryptoWallets.Coinbase:
        if (isMobile) {
          await setNewProvider(defaultWeb3.conn.currentProvider);
        } else {
          await setNewProvider(getWalletLinkClient(network, networkId));
        }
        break;
      case CryptoWallets.WebWallet:
        if (defaultWeb3.name !== CryptoWallets.WebWallet) throw new Error('Wallet not alowed');
        await setNewProvider(defaultWeb3.conn.currentProvider);
        break;
      default:
        throw new Error('[useWeb3] Wallet not alowed default OPTION');
    }
    if (checkBlock) {
      // when we update the new provider, we update the window.interface and the context web3
      // we can not wait until the context was update so we get the web3 from the instance to try to get the accounts
      const accounts = await Connection.get().eth.getAccounts();
      if (!accounts || accounts.length === 0) {
        throw new Error('[useWeb3] The wallet are not enabled ');
      }
    }
  };

  return {
    web3: connection,
    getWeb3: Connection.get,
    enableWeb3,
    setNewProvider,
    getCurrentProviderName,
    getPrimaryAccount,
    getDefaultWeb3,
    requestSignature,
    connectWallet
  };
};

export default useWeb3;
