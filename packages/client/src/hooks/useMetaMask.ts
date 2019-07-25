import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { getWeb3 } from '../utils';
import useAsyncEffect from './useAsyncEffect';

const HERO_CONTRACTS =
  'https://blockchain-definitions.s3-eu-west-1.amazonaws.com/v2/contracts.json';

const useMetaMask = () => {
  const [metamask, setMetaMask]: any = useState(null);
  const [heroContracts, setHeroContracts]: any = useState(null);
  const web3 = getWeb3();
  const contracts = useRef({});
  useAsyncEffect(async () => {
    const contracts = await axios.get(HERO_CONTRACTS);

    setHeroContracts(contracts.data);
  }, []);

  useEffect(() => {
    const web3 = getWeb3();
    if (web3 && heroContracts) {
      setMetaMask({
        heroContracts,
        isConnected: web3.eth.net.isListening,
        addContract: async (name: string) => {
          const contract = await web3.eth.Contract(
            heroContracts[name].abi,
            heroContracts[name].address
          );
          contracts.current = { ...contract.current, [name]: contract };
          return contract;
        },
        utils: web3.utils,
        getContract: (name: string) => contracts.current[name],
        getContracts: () => contracts.current,
        getAccounts: web3.eth.getAccounts,
        enable: web3._currentProvider.connection.enable
      });
    }
  }, [web3, heroContracts]);

  return metamask;
};

export default useMetaMask;
