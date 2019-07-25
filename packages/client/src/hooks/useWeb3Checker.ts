import { useState, useContext, useEffect } from 'react';
import useDepositContract from './useDepositContract';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import { toChecksumAddress} from 'web3-utils';
import { RootContext } from '../context';
import { getWeb3 } from '../utils'
import { Web3State } from '../commons/Web3State';

const parseNetwork = id => {
  switch (id) {
    case 1:
      return 'main';
    case 3:
      return 'ropsten';
    case 4:
      return 'rinkeby';
    case 42:
      return 'kovan';
    default:
      return 'private';
  }
};

export const web3CheckList = (web3, accounts, targetAddress, network, targetNetwork, hasDeposit) => ({
  hasProvider: !!get(web3, 'currentProvider', false),
  isMetamask: !!get(web3, 'currentProvider.isMetaMask', false),
  unlocked: accounts && !!accounts.length,
  account: get(accounts, '[0]', null),
  accountMatches: !!targetAddress && !!accounts && !!accounts.length && toChecksumAddress(accounts[0]) === toChecksumAddress(targetAddress),
  network,
  networkMatches: network === targetNetwork,
  targetNetwork, // this need to be set by config/env
  hasDeposit,
})

const useWeb3Checker = () : Web3State => {
  const { store: { user: { cryptoAddress: { address: targetAddress } }, config: { targetNetwork: targetNetId } } }: any = useContext(RootContext);
  const web3 = getWeb3();
  const depositContract = useDepositContract();
  const targetNetwork = parseNetwork(targetNetId);
  const [web3State, setWeb3State]: [Web3State, any] = useState(web3CheckList(web3, [], targetAddress, 'Not connected', targetNetwork, false));

  const verifyCheckList = async () => {
    const web3 = getWeb3();
    try {
      const accounts = await web3.eth.getAccounts();
      const netName = parseNetwork(await web3.eth.net.getId());
      const hasDeposit = accounts && !!accounts.length && depositContract && await depositContract.hasDeposited(accounts[0]);
      const newWeb3State = web3CheckList(web3, accounts, targetAddress, netName, targetNetwork, hasDeposit)
      // Only update state if changes, prevent renders
      setWeb3State(prevWeb3State => isEqual(newWeb3State, prevWeb3State) ? prevWeb3State : newWeb3State);
    } catch (err) {
      const errorState = web3CheckList(web3, [], targetAddress, 'Not connected', targetNetwork, false);
      // Only update state if changes, prevent renders
      setWeb3State(prevWeb3State => isEqual(errorState, prevWeb3State) ? prevWeb3State : errorState);
    }
  }
  
  useEffect(() => {
    let accountInterval;
    const web3 = getWeb3();

    const defaultCheckList = web3CheckList(web3, [], targetAddress, 'Not connected', targetNetwork, false);
    setWeb3State(prevWeb3State => isEqual(defaultCheckList, prevWeb3State) ? prevWeb3State : defaultCheckList);

    if (web3 && web3.givenProvider) {
      accountInterval = setInterval(verifyCheckList, 500);
    }
    return (() => {
      if (accountInterval) {
        clearInterval(accountInterval);
      }
    });
  },
  [targetAddress, depositContract]
);

  // return a "check list" to operate with web3
  return web3State;
};

export default useWeb3Checker;
