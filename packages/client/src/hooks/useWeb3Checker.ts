import { useState, useContext, useEffect } from 'react';
import useAsyncEffect from './useAsyncEffect';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import hasIn from 'lodash/hasIn';
import { toChecksumAddress } from 'web3-utils';
import { RootContext } from '../context';
import { getWeb3, parseNetwork, getContractsDefinition } from '../utils';
import { Web3State } from '../commons/Web3State';

// @ts-ignore
const web3CheckList = window['web3CheckList'] = (
  web3,
  accounts,
  targetAddress,
  network,
  targetNetwork,
  hasDeposit
) => ({
  hasProvider: !!get(web3, 'currentProvider', false),
  isMetamask: !!get(web3, 'currentProvider.isMetaMask', false),
  unlocked: accounts && !!accounts.length,
  account: get(accounts, '[0]', null),
  accountMatches:
    !!targetAddress &&
    !!accounts &&
    !!accounts.length &&
    toChecksumAddress(accounts[0]) === toChecksumAddress(targetAddress),
  network,
  networkMatches: !!targetNetwork.find(x => x === network),
  targetNetwork, // this need to be set by config/env
  hasDeposit
});

const hasDeposited = async (web3, definitions, address) => {
  const netId = await web3.eth.net.getId();
  if (!definitions || !address || !web3 || !hasIn(definitions, `address.${netId}`)) {
    return false;
  }
  const contract = new web3.eth.Contract(
    get(definitions, `abi.Deposit`),
    get(definitions, `address.${netId}.Deposit`)
  );
  const deposited = await contract.methods.hasDeposited(address).call();
  return deposited;
};

const useWeb3Checker = (): Web3State => {
  const {
    store: {
      user: {
        cryptoAddress: { address: targetAddress }
      }
    }
  }: any = useContext(RootContext);
  const web3 = getWeb3();
  const [contracts, setContracts]: any = useState(null);
  const [targetNetwork, setTargetNetwork]: any = useState([]);
  const [definitions, setDefs]: any = useState(null);
  const [web3State, setWeb3State]: [Web3State, any] = useState(
    web3CheckList(web3, [], targetAddress, 'Not connected', targetNetwork, false)
  );

  useAsyncEffect(async () => {

    const contractsDef = { data: await getContractsDefinition() };
    setContracts(contractsDef);
    setTargetNetwork(
      Object.keys(contractsDef.data.address)
        .map(x => parseNetwork(Number(x)))
        .filter(availableId => ['mainnet', 'kovan', 'test'].find(id => id === availableId))
    );
    setDefs(contractsDef.data);
  }, []);

  const verifyCheckList = async () => {
    const web3 = getWeb3();
    try {
      const accounts = await web3.eth.getAccounts();
      const netName = parseNetwork(await web3.eth.net.getId());
      const hasDeposit =
        accounts && !!accounts.length && (await hasDeposited(web3, definitions, accounts[0]));

      const newWeb3State = web3CheckList(
        web3,
        accounts,
        targetAddress,
        netName,
        targetNetwork,
        hasDeposit
      );
      // Only update state if changes, prevent renders
      setWeb3State(prevWeb3State =>
        isEqual(newWeb3State, prevWeb3State) ? prevWeb3State : newWeb3State
      );
    } catch (err) {

      const errorState = web3CheckList(
        web3,
        [],
        targetAddress,
        'Not connected',
        targetNetwork,
        false
      );
      // Only update state if changes, prevent renders
      setWeb3State(prevWeb3State =>
        isEqual(errorState, prevWeb3State) ? prevWeb3State : errorState
      );
    }
  };

  useEffect(() => {
    let accountInterval;
    const web3 = getWeb3();

    const defaultCheckList = web3CheckList(
      web3,
      [],
      targetAddress,
      'Not connected',
      targetNetwork,
      false
    );
    setWeb3State(prevWeb3State =>
      isEqual(defaultCheckList, prevWeb3State) ? prevWeb3State : defaultCheckList
    );

    if (web3 && web3.givenProvider) {
      accountInterval = setInterval(verifyCheckList, 500);
    }
    return () => {
      if (accountInterval) {
        clearInterval(accountInterval);
      }
    };
  }, [targetAddress, targetNetwork, definitions]);

  // return a "check list" to operate with web3
  return { ...web3State, ...contracts };
};

export default useWeb3Checker;
