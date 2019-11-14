import { useRef, useState } from 'react';
import _ from 'underscore';
// import get from 'lodash/get';
// import hasIn from 'lodash/hasIn';
import { toChecksumAddress } from 'web3-utils';
import { NULL_ADDRESS } from '../commons/constants';
import useForceUpdate from './useForceUpdate';
// import useInterval from './useInterval';
import useWeb3 from './useWeb3';
import useDepositContract from './useDepositContract';
import useWallet from './useWallet';
import { useEffect } from 'react';

// const hasDeposited = async (web3, definitions, address) => {
//   const netId = 42; // CHECK COMO SE CONECTA EL WALLET DE COINBASE POR QUE ESTA OBLIGADO A HACERLO CON LA CUENTA DEFGAULT
//   if (!definitions || !address || !web3 || !hasIn(definitions, `address.${netId}`)) {
//     return false;
//   }
//   const contract = new web3.eth.Contract(
//     get(definitions, `abi.Deposit`),
//     get(definitions, `address.${netId}.Deposit`)
//   );
//   const deposited = await contract.methods.hasDeposited(address).call();
//   return deposited;
// };

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
const matchProvider = web3 => {
  if (web3 && web3.currentProvider) return true;
  return false;
};

const checkHasDeposit = async (depositContract, walletAccount) => {
  try {
    if (walletAccount && walletAccount !== NULL_ADDRESS) {
      console.log('WALLET ACCOUNT ', walletAccount);
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
  walletAccount,
  storedAccount,
  accountMatches: matchAccount(walletAccount, storedAccount),
  walletNetwork,
  walletNetworkId,
  targetNetwork,
  networkMatches: matchNetwork(targetNetwork, walletNetwork),
  hasDeposit
});

const useWeb3Checker = storedAccount => {
  const { getWeb3, getPrimaryAccount } = useWeb3();
  // const connection = getWeb3();
  const [connection, setConnection]: any = useState();
  const forceUpdate = useForceUpdate();
  const wallet = useWallet(connection);
  const depositContract = useDepositContract(connection);

  const web3State = useRef(
    web3CheckList(getWeb3(), null, storedAccount, 'NO_NETWORK', -1, 'NO_NETWORK', false)
  );
  //
  // ON WALLET CONNECTION
  // useEffect(() => {
  //   console.log('WALLET !!!! ', wallet);
  //   if (wallet) forceUpdate();
  // }, [getWeb3, wallet]);

  const check = async () => {
    const web3 = getWeb3();
    console.log(' *********** DEPOSIT CONTRACT : ', depositContract);
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
          storedAccount,
          walletNetwork,
          walletNetworkId,
          targetNetwork,
          hasDeposit
        );
        console.log('NEWSTATE : ', newState);
        if (!_.isEqual(newState, web3State.current)) {
          web3State.current = newState;
          forceUpdate();
        }
      } catch (err) {
        console.error(' SET INTERATE ERROR ', err);

        // const errorState = web3CheckList(
        //   web3,
        //   null,
        //   NULL_ADDRESS,
        //   'NO_NETWORK',
        //   'NO_NETWORK',
        //   false
        // );
        // web3State.current = errorState;
      }
    } else {
      if (web3 && web3.currentProvider) setConnection(getWeb3());
      console.log(' NOT CONNECTED ', web3, depositContract);
    }
  };
  useEffect(() => {
    let interval;
    if (interval) clearInterval(interval);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ NEW ITERATION ~~~~~~~~~~~~~~~~ ');
    console.log('DEPOSIT CONTRACT ', depositContract, wallet);
    setInterval(check, 2000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [wallet]);

  return web3State.current;
};

export default useWeb3Checker;
