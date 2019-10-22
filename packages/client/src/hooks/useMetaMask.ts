//
import { useState, useEffect, useRef, useContext } from 'react';
import hasIn from 'lodash/hasIn';
import { isAddress } from 'web3-utils';
import get from 'lodash/get';
import { getWeb3, getContractsDefinition } from '../utils';
import useAsyncEffect from './useAsyncEffect';
import { AppContext } from '../components/App';

//
const useMetaMask = () => {
  const {
    web3Status: { network }
  }: any = useContext(AppContext);
  const [metamask, setMetaMask]: any = useState(null);
  const [heroContracts, setHeroContracts]: any = useState(null);
  const web3 = getWeb3();
  const contracts = useRef({});

  useAsyncEffect(async () => {
    setHeroContracts(await getContractsDefinition());
  }, []);

  useEffect(() => {
    const web3 = getWeb3();
    if (web3 && network && heroContracts) {
      setMetaMask({
        heroContracts,
        isConnected: web3.eth.net.isListening,
        addContract: async (name: string) => {
          const netId = await web3.eth.net.getId();
          if (!hasIn(heroContracts, `address.${netId}.${name}`)) {
            throw new Error(`contract not found in current network ${netId}`);
          }
          const contract = new web3.eth.Contract(
            get(heroContracts, `abi.${name}`),
            get(heroContracts, `address.${netId}.${name}`)
          );
          contracts.current = { ...contract.current, [name]: contract };
          return contract;
        },
        addContractByAddress: async (name: string, address: string) => {
          if (!address || !isAddress(address)) {
            throw new Error('address not valid or null');
          }
          if (!hasIn(heroContracts, `abi.${name}`)) {
            throw new Error(`contract not found in abi metadata list`);
          }
          const contract = new web3.eth.Contract(get(heroContracts, `abi.${name}`), address);
          contracts.current = { ...contract.current, [name]: contract };
          return contract;
        },
        utils: web3.utils,
        getContract: (name: string) => contracts.current[name],
        getContracts: () => contracts.current,
        getAccounts: web3.eth.getAccounts,
        getCurrentProviderName: () => {
          if (!web3) return 'unknown';

          if (web3.currentProvider.isMetaMask) return 'metamask';

          if (web3.currentProvider.isDapper) return 'dapper';

          if (web3.currentProvider.isTrust) return 'trust';

          if (web3.currentProvider.isGoWallet) return 'goWallet';

          if (web3.currentProvider.isAlphaWallet) return 'alphaWallet';

          if (web3.currentProvider.isStatus) return 'status';

          if (web3.currentProvider.isToshi) return 'coinbase';
          //  @ts-ignore
          // eslint-disable-next-line
          if (typeof window.__CIPHER__ !== 'undefined') return 'cipher';

          if (web3.currentProvider.constructor.name === 'EthereumProvider') return 'mist';

          if (web3.currentProvider.constructor.name === 'Web3FrameProvider') return 'parity';
          // eslint-disable-next-line
          if (web3.currentProvider.host && web3.currentProvider.host.indexOf('infura') !== -1) {
            // eslint-disable-next-line
            return 'infura';
          }

          if (web3.currentProvider.host && web3.currentProvider.host.indexOf('localhost') !== -1) {
            // eslint-disable-next-line
            return 'localhost';
          }

          return 'unknown';
        }
      });
    }
  }, [web3, network, heroContracts]);

  return metamask;
};

export default useMetaMask;
