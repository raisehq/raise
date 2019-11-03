import { useState, useEffect } from 'react';
import get from 'lodash/get';
import { toChecksumAddress } from 'web3-utils';
import { NULL_ADDRESS } from '../commons/constants';
// import useAsyncEffect from './useAsyncEffect';

import useWeb3 from './useWeb3';
import useDepositContract from './useDepositContract';
import useWallet from './useWallet';

// Matches
const matchAccount = (walledAccount, storedAccount) =>
  walledAccount &&
  storedAccount &&
  toChecksumAddress(walledAccount) === toChecksumAddress(storedAccount);
const matchNetwork = (targetNetwork, network) => targetNetwork.indexOf(network) !== -1;

// @ts-ignore
const web3CheckList = (
  web3, // Web3 object
  walletAccounts, // Wallet Account
  storedAccount, // Wallet Stored in database
  network, // Wallet Network
  targetNetwork, // Default Network
  hasDeposit // Has Deposit
) => ({
  hasProvider: get(web3, 'currentProvider', false),
  unlocked: walletAccounts !== undefined && walletAccounts !== NULL_ADDRESS,
  account: walletAccounts,
  accountMatches: matchAccount(walletAccounts, storedAccount),
  network,
  networkMatches: matchNetwork(targetNetwork, network),
  hasDeposit
});

// /*const hasDeposited = async (web3, definitions, address) => {
//   const netId = await web3.eth.net.getId();
//   if (!definitions || !address || !web3 || !hasIn(definitions, `address.${netId}`)) {
//     return false;
//   }
//   const contract = new web3.eth.Contract(
//     get(definitions, 'abi.Deposit'),
//     get(definitions, `address.${netId}.Deposit`)
//   );
//   const deposited = await contract.methods.hasDeposited(address).call();
//   return deposited;
// };*/

const useWeb3Checker = (storedAccount = NULL_ADDRESS, targetNetwork) => {
  const { web3, getPrimaryAccount } = useWeb3();

  const depositContract = useDepositContract();
  const wallet = useWallet();
  const [web3State, setWeb3State] = useState(
    web3CheckList(web3, [], storedAccount, 'Not connected', targetNetwork, false)
  );

  useEffect(() => {
    let accountInterval;

    const verifyCheckList = async () => {
      if (web3) {
        try {
          const walletAccount = await getPrimaryAccount();
          const hasDeposit = depositContract ? await depositContract.hasDeposited() : false;
          console.log(' WALLET : ', wallet);
          const walletNetwork = wallet ? await wallet.getNetwork() : 'NO_NETWORK';
          console.log(web3, walletAccount, storedAccount, walletNetwork, targetNetwork, hasDeposit);
          const newState = web3CheckList(
            web3,
            walletAccount,
            storedAccount,
            walletNetwork,
            targetNetwork,
            hasDeposit
          );
          console.log('STATE: ', newState);
          setWeb3State(newState);
        } catch (err) {
          console.error('[useWeb3Checker]', err);
          const errorState = web3CheckList(
            web3,
            [],
            NULL_ADDRESS,
            'Not connected',
            targetNetwork,
            false
          );
          setWeb3State(errorState);
        }
      }
    };

    // @ts-ignore
    if (web3 && web3.currentProvider) {
      accountInterval = setInterval(verifyCheckList, 500);
    }
    console.log('@@@@@@@@@@@@@@@@@@@@@ USEWEB3CHECKER :', web3);
    return () => {
      if (accountInterval) {
        clearInterval(accountInterval);
      }
    };
  }, [storedAccount, targetNetwork, web3, wallet]);

  return web3State;
};

export default useWeb3Checker;
