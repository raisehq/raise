import { useState, useEffect, useRef } from 'react';
import hasIn from 'lodash/hasIn';
import { isAddress } from 'web3-utils';
import get from 'lodash/get';
import useWeb3 from './useWeb3';
import { getContractsDefinition } from '../utils';
import useAsyncEffect from './useAsyncEffect';
import { parseNetwork } from '../utils';

const useWallet = () => {
  const [wallet, setWallet]: any = useState(null);
  const [heroContracts, setHeroContracts]: any = useState(null);
  const contracts = useRef({});
  const { web3, getPrimaryAccount } = useWeb3();
  useAsyncEffect(async () => {
    setHeroContracts(await getContractsDefinition());
  }, []);

  useEffect(() => {
    if (web3 && heroContracts) {
      setWallet({
        heroContracts,
        isConnected: web3.eth.net.isListening,
        getNetwork: () => {
          console.log(' GET NETWORK ', heroContracts);
          return Object.keys(heroContracts.address)
            .map(x => parseNetwork(Number(x)))
            .filter(availableId => ['mainnet', 'kovan', 'test'].find(id => id === availableId));
        },
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
        getPrimaryAccount
      });
    }
  }, [web3, heroContracts]);

  return wallet;
};

export default useWallet;
