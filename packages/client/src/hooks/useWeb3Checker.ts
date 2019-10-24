import { useState, useEffect } from 'react';
import get from 'lodash/get';
import { toChecksumAddress } from 'web3-utils';
import { NULL_ADDRESS } from '../commons/constants';
// import useAsyncEffect from './useAsyncEffect';
// import { RootContext } from '../context';
//
//import { Web3State } from '../commons/Web3State';
import useWeb3 from './useWeb3';
// import useWallet from './useWallet';

// Matches
const matchAccount = (walledAccount, storedAccount) =>
  walledAccount &&
  storedAccount &&
  toChecksumAddress(walledAccount) === toChecksumAddress(storedAccount);
const matchNetwork = (targetNetwork, network) => targetNetwork.indexOf(network) !== -1;

// @ts-ignore
const web3CheckList = (
  web3,
  walletAccounts,
  storedAccount,
  network,
  targetNetwork,
  hasDeposit
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

const useWeb3Checker = (storedAccount, targetNetwork) => {
  const { web3, getPrimaryAccount } = useWeb3();
  const [web3State, setWeb3State] = useState(
    web3CheckList(web3, [], NULL_ADDRESS, 'Not connected', 'Not connected', false)
  );

  // useAsyncEffect(async () => {
  //   const contractsDef = { data: await getContractsDefinition() };
  //   setContracts(contractsDef);
  //   setTargetNetwork(
  //     Object.keys(contractsDef.data.address)
  //       .map(x => parseNetwork(Number(x)))
  //       .filter(availableId => ['mainnet', 'kovan', 'test'].find(id => id === availableId))
  //   );
  //   setDefs(contractsDef.data);
  // }, []);

  useEffect(() => {
    let accountInterval;

    const verifyCheckList = async () => {
      if (web3) {
        try {
          // @ts-ignore
          const walletAccount = await getPrimaryAccount();
          // const hasDeposit =
          //   accounts && !!accounts.length && (await hasDeposited(web3, definitions, accounts[0]));
          const newState = web3CheckList(
            web3,
            [],
            walletAccount,
            'Not connected',
            targetNetwork,
            false
          );
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
    if (targetNetwork) {
      const defaultCheckList = web3CheckList(
        web3,
        [],
        storedAccount,
        'Not connected',
        targetNetwork,
        false
      );
      setWeb3State(defaultCheckList);
      // @ts-ignore
      if (web3 && web3.currentProvider) {
        accountInterval = setInterval(verifyCheckList, 500);
      }
    }
    return () => {
      if (accountInterval) {
        clearInterval(accountInterval);
      }
    };
  }, [storedAccount, targetNetwork, web3]);

  // return a "check list" to operate with web3
  return web3State;
};

export default useWeb3Checker;
