import { useState, useEffect, useRef, useContext } from 'react';
import hasIn from 'lodash/hasIn';
import { isAddress } from 'web3-utils';
import get from 'lodash/get';
import useWeb3 from './useWeb3';
import RootContext from '../context';

import { parseNetwork } from '../utils';

const useWallet = () => {
  const {
    store: {
      blockchain: { contracts: heroContracts, web3 }
    }
  }: any = useContext(RootContext);

  const [wallet, setWallet]: any = useState(null);

  const instanceContracts = useRef({});
  const { getPrimaryAccount } = useWeb3();

  console.log('PUTO WALLET ', web3);
  useEffect(() => {
    console.log(' ################## CHECK WALLET ', web3);
    if (web3 && heroContracts) {
      console.log('###########  SET AGAIN AND AGAIN  ##################');
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
        getContractsNetwork: () => {
          return Object.keys(heroContracts.address)
            .map(x => parseNetwork(Number(x)))
            .filter(availableId => ['mainnet', 'kovan', 'test'].find(id => id === availableId));
        },
        addContract: async (name: string) => {
          const netId = await web3.eth.net.getId();
          if (!hasIn(heroContracts, `address.${netId}.${name}`)) {
            throw new Error(`contract not found in current network ${netId}`);
          }
          if (instanceContracts.current[name]) return instanceContracts.current[name];
          const contract = new web3.eth.Contract(
            get(heroContracts, `abi.${name}`),
            get(heroContracts, `address.${netId}.${name}`)
          );
          instanceContracts.current = { ...contract.current, [name]: contract };
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
          instanceContracts.current = { ...contract.current, [name]: contract };
          return contract;
        },
        utils: web3.utils,
        getContract: (name: string) => instanceContracts.current[name],
        getContracts: () => instanceContracts.current,
        getPrimaryAccount
      });
    }
  }, [heroContracts, web3]);

  return wallet;
};

export default useWallet;
