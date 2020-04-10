import { useState, useEffect } from 'react';
import hasIn from 'lodash/hasIn';
import { isAddress } from 'web3-utils';
import get from 'lodash/get';
import useWeb3 from './useWeb3';
import { useRootContext } from '../contexts/RootContext';

import { parseNetwork } from '../utils';

const useWallet = () => {
  const {
    store: {
      config: { networkId },
      blockchain: { contracts: heroContracts, instances: instanceContracts }
    },
    actions: {
      blockchain: { setNewInstance }
    }
  }: any = useRootContext();

  const [wallet, setWallet]: any = useState(null);

  // const instanceContracts = useRef({});
  const { web3, getPrimaryAccount } = useWeb3();

  useEffect(() => {
    if (web3 && heroContracts) {
      setWallet({
        web3,
        heroContracts,
        getNetwork: async () => {
          try {
            if (web3) {
              const id = await web3.eth.net.getId();
              return { id, name: parseNetwork(id) };
            }
            return {
              id: parseInt(process.env.REACT_APP_DEFAULT_NETWORK_ID || '1', 10),
              name: parseNetwork(parseInt(process.env.REACT_APP_DEFAULT_NETWORK_ID || '1', 10))
            };
          } catch (err) {
            console.error('[useWallet] Error detect network');
            return {
              id: parseInt(process.env.REACT_APP_DEFAULT_NETWORK_ID || '1', 10),
              name: parseNetwork(parseInt(process.env.REACT_APP_DEFAULT_NETWORK_ID || '1', 10))
            };
          }
        },
        getContractsNetwork: () =>
          Object.keys(heroContracts.address)
            .map(x => parseNetwork(Number(x)))
            .filter(availableId => ['mainnet', 'kovan', 'test'].find(id => id === availableId)),
        addContract: async (name: string) => {
          const netId = await web3.eth.net.getId();
          if (!hasIn(heroContracts, `address.${netId}.${name}`)) {
            throw new Error(`[useWallets] Contract not found in current network ${netId}`);
          }
          if (instanceContracts[netId] && instanceContracts[netId][name]) {
            return instanceContracts[netId][name];
          }
          const contract = new web3.eth.Contract(
            get(heroContracts, `abi.${netId}.${name}`),
            get(heroContracts, `address.${netId}.${name}`)
          );
          if (!instanceContracts[netId]) instanceContracts[netId] = {};
          instanceContracts[netId] = { ...instanceContracts[netId], [name]: contract };
          setNewInstance(instanceContracts);
          return contract;
        },
        addContractByAddress: async (name: string, address: string) => {
          const netId = await web3.eth.net.getId();
          if (!address || !isAddress(address)) {
            throw new Error('[useWallets] Address not valid or null');
          }
          if (!hasIn(heroContracts, `abi.${netId}.${name}`)) {
            throw new Error('[useWallets] Contract not found in abi metadata list');
          }
          // if (instanceContracts[netId] && instanceContracts[netId][name]) {
          //   return instanceContracts[netId][name];
          // }
          const contract = new web3.eth.Contract(
            get(heroContracts, `abi.${netId}.${name}`),
            address
          );
          if (!instanceContracts[netId]) instanceContracts[netId] = {};
          instanceContracts[netId] = { ...instanceContracts[netId], [name]: contract };
          setNewInstance(instanceContracts);

          return contract;
        },
        utils: web3.utils,
        getContract: (name: string) => instanceContracts[networkId][name], // TODO: DEPRECATED
        getContracts: () => instanceContracts[networkId], // TODO : DEPRECATED
        getPrimaryAccount
      });
    }
  }, [heroContracts, web3, networkId]);

  return wallet;
};

export default useWallet;
