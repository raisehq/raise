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
  const heroContracts: any = useRef(null);
  const contracts = useRef({});
  const { getWeb3, getPrimaryAccount } = useWeb3();
  const web3 = getWeb3();
  useAsyncEffect(async () => {
    heroContracts.current = await getContractsDefinition();
  }, []);

  useEffect(() => {
    if (web3 && heroContracts.current) {
      // console.log(' NEW WEB3 ', web3.currentProvider.isWalletLink);
      setWallet({
        web3,
        heroContracts: heroContracts.current,
        getNetwork: async () => {
          try {
            if (web3) {
              return parseNetwork(await web3.eth.net.getId());
            }
            return process.env.REACT_APP_DEFAULT_NETWORK;
          } catch (err) {
            console.error('[useWallet] Error detect network');
            return process.env.REACT_APP_DEFAULT_NETWORK;
          }
        },
        getContractsNetwork: () => {
          return Object.keys(heroContracts.current.address)
            .map(x => parseNetwork(Number(x)))
            .filter(availableId => ['mainnet', 'kovan', 'test'].find(id => id === availableId));
        },
        addContract: async (name: string) => {
          const netId = await web3.eth.net.getId();
          if (!hasIn(heroContracts.current, `address.${netId}.${name}`)) {
            throw new Error(`contract not found in current network ${netId}`);
          }
          const contract = new web3.eth.Contract(
            get(heroContracts.current, `abi.${name}`),
            get(heroContracts.current, `address.${netId}.${name}`)
          );
          contracts.current = { ...contract.current, [name]: contract };
          return contract;
        },
        addContractByAddress: async (name: string, address: string) => {
          if (!address || !isAddress(address)) {
            throw new Error('address not valid or null');
          }
          if (!hasIn(heroContracts.current, `abi.${name}`)) {
            throw new Error(`contract not found in abi metadata list`);
          }
          const contract = new web3.eth.Contract(
            get(heroContracts.current, `abi.${name}`),
            address
          );
          contracts.current = { ...contract.current, [name]: contract };
          return contract;
        },
        utils: web3.utils,
        getContract: (name: string) => contracts.current[name],
        getContracts: () => contracts.current,
        getPrimaryAccount
      });
    }
  }, [heroContracts.current]);

  return wallet;
};

export default useWallet;
