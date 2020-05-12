import { useRef, useEffect, useState } from 'react';
import _ from 'lodash';
import { toChecksumAddress } from 'web3-utils';
import { NULL_ADDRESS } from '../commons/constants';
import useForceUpdate from './useForceUpdate';
import useInterval from './useInterval';
import useWeb3 from './useWeb3';
import useDepositContract from './useDepositContract';
import useWallet from './useWallet';

// Matches
const matchAccount = (walledAccount, storedAccount) => {
  try {
    if (
      walledAccount &&
      storedAccount &&
      toChecksumAddress(walledAccount) === toChecksumAddress(storedAccount)
    ) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
const matchNetwork = (targetNetwork, network) => targetNetwork.indexOf(network) !== -1;
const matchProvider = (web3) => {
  if (web3 && web3.currentProvider) return true;
  return false;
};

const checkHasDeposit = async (depositContract, walletAccount) => {
  try {
    if (walletAccount && walletAccount !== NULL_ADDRESS) {
      const hasDeposit = depositContract
        ? await depositContract.hasDeposited(walletAccount)
        : false;
      return hasDeposit;
    }
    return false;
  } catch (error) {
    console.error(' ERROR CHECK DEPOSIT ', error);
    return false;
  }
};

const web3CheckList = (
  web3, // Web3 object
  walletAccount, // Wallet Account
  storedAccount, // Wallet Stored in database
  walletNetwork, // Wallet Network
  walletNetworkId, // Wallet Network ID
  targetNetwork, // Default Network
  hasDeposit // Has Deposit
) => ({
  hasProvider: matchProvider(web3),
  unlocked: walletAccount !== undefined && walletAccount !== null && walletAccount !== NULL_ADDRESS,
  account: walletAccount,
  walletAccount,
  storedAccount,
  accountMatches: matchAccount(walletAccount, storedAccount),
  walletNetwork,
  walletNetworkId,
  targetNetwork,
  networkMatches: matchNetwork(targetNetwork, walletNetwork),
  hasDeposit
});

const useWeb3Checker = (storedAccount) => {
  const { web3, getPrimaryAccount } = useWeb3();
  const forceUpdate = useForceUpdate();
  const wallet = useWallet();
  const depositContract = useDepositContract();
  const [sAccount, setSAccount]: any = useState(storedAccount);
  const web3State = useRef(
    web3CheckList(web3, null, storedAccount, 'NO_NETWORK', -1, 'NO_NETWORK', false)
  );

  useEffect(() => {
    setSAccount(storedAccount);
  }, [storedAccount]);

  useInterval(async () => {
    if (web3 && web3.currentProvider && depositContract) {
      try {
        const walletAccount = await getPrimaryAccount();
        const hasDeposit = await checkHasDeposit(depositContract, walletAccount);
        const defaultNetwork = {
          name: 'NO_NETWORK',
          id: parseInt(process.env.REACT_APP_DEFAULT_NETWORK_ID || '1', 10)
        };
        const { name: walletNetwork, id: walletNetworkId } = wallet
          ? await wallet.getNetwork()
          : defaultNetwork;
        const targetNetwork = wallet ? await wallet.getContractsNetwork() : 'NO_NETWORK';
        const newState = web3CheckList(
          web3,
          walletAccount,
          sAccount,
          walletNetwork,
          walletNetworkId,
          targetNetwork,
          hasDeposit
        );
        if (!_.isEqual(newState, web3State.current)) {
          web3State.current = newState;
          forceUpdate();
        }
      } catch (err) {
        console.error('[useWeb3Checker] Error in check Interval ', err);
      }
    } else {
      // NOT CONNECTED
    }
  }, 2000);

  return web3State.current;
};

export default useWeb3Checker;
