import { useRef, useEffect, useState, useCallback } from 'react';
import _ from 'underscore';
import { toChecksumAddress } from 'web3-utils';
import { NULL_ADDRESS } from '../commons/constants';

// import useAsyncEffect from './useAsyncEffect';

import useWeb3 from './useWeb3';
import useDepositContract from './useDepositContract';
import useWallet from './useWallet';

function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, []);
  return update;
}
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
const matchProvider = web3 => web3 && web3.currentProvider && true;
// @ts-ignore
const web3CheckList = (
  web3, // Web3 object
  walletAccount, // Wallet Account
  storedAccount, // Wallet Stored in database
  walletNetwork, // Wallet Network
  targetNetwork, // Default Network
  hasDeposit // Has Deposit
) => ({
  hasProvider: matchProvider(web3),
  unlocked: walletAccount !== undefined && walletAccount !== NULL_ADDRESS,
  walletAccount,
  storedAccount,
  accountMatches: matchAccount(walletAccount, storedAccount),
  walletNetwork,
  targetNetwork,
  networkMatches: matchNetwork(targetNetwork, walletNetwork),
  hasDeposit
});

const useWeb3Checker = storedAccount => {
  const { web3, getPrimaryAccount } = useWeb3();
  const forceUpdate = useForceUpdate();
  const depositContract = useDepositContract();
  const wallet = useWallet();
  const web3State = useRef(
    web3CheckList(web3, null, storedAccount, 'NO_NETWORK', 'NO_NETWORK', false)
  );

  useEffect(() => {
    let accountInterval;
    console.log('################# STORED ACCOUNT CHECK : ', storedAccount);
    const check = async () => {
      if (web3) {
        try {
          const walletAccount = await getPrimaryAccount();
          const hasDeposit = depositContract
            ? await depositContract.hasDeposited(walletAccount)
            : false;
          const walletNetwork = wallet ? await wallet.getNetwork() : 'NO_NETWORK';
          const targetNetwork = wallet ? await wallet.getContractsNetwork() : 'NO_NETWORK';

          const newState = web3CheckList(
            web3,
            walletAccount,
            storedAccount,
            walletNetwork,
            targetNetwork,
            hasDeposit
          );
          if (!_.isEqual(newState, web3State.current)) {
            console.log('OBJECTS ARE DIFFERENT : ', newState, web3State);
            web3State.current = newState;
            forceUpdate();
          } else {
            console.log(' NO UPDATE STATE ');
          }
        } catch (err) {
          console.error('ERROR: ', err);
          const errorState = web3CheckList(
            web3,
            null,
            NULL_ADDRESS,
            'NO_NETWORK',
            'NO_NETWORK',
            false
          );
          web3State.current = errorState;
        }
      }
    };
    // @ts-ignore
    if (web3 && web3.currentProvider) {
      if (accountInterval) clearInterval(accountInterval);
      accountInterval = setInterval(check, 1000);
    }
    return () => {
      if (accountInterval) {
        clearInterval(accountInterval);
      }
    };
  }, [storedAccount, web3, wallet]);

  return web3State.current;
};

export default useWeb3Checker;
