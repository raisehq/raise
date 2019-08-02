import axios from 'axios';
import { useState, useEffect, useRef, useContext } from 'react';
import hasIn from 'lodash/hasIn';
import get from 'lodash/get';
import { getWeb3 } from '../utils';
import useAsyncEffect from './useAsyncEffect';
import { AppContext } from '../components/App'

const HERO_CONTRACTS =
  'https://blockchain-definitions.s3-eu-west-1.amazonaws.com/v4/contracts-temp.json';

const useMetaMask = () => {
  const { web3Status: { network } }: any = useContext(AppContext);
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
    if (web3 && network && heroContracts) {
      setMetaMask({
        heroContracts,
        isConnected: web3.eth.net.isListening,
        addContract: async (name: string) => {
          const netId = await web3.eth.net.getId()
          if (!hasIn(heroContracts, `address.${netId}.${name}`)) {
            throw new Error(`contract not found in current network ${netId}`)
          }
          const contract = await web3.eth.Contract(
            get(heroContracts, `abi.${name}`),
            get(heroContracts, `address.${netId}.${name}`)
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
  }, [web3, network, heroContracts]);

  return metamask;
};

export default useMetaMask;
