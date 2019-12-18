import { useState, useContext } from 'react';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';
import AppContext from '../components/AppContext';

const useRefferalContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const wallet = useWallet();
  const {
    FollowTx: { watchTx }
  }: any = useContext(AppContext);

  useAsyncEffect(async () => {
    if (wallet) {
      try {
        const contract = await wallet.addContract('ReferralTracker');
        setActiveContract({
          address: contract.options.address,
          withdraw: account => watchTx(contract.methods.withdraw(account).send({ from: account })),
          balance: account => contract.methods.unclaimedReferrals(account).call()
        });
      } catch (error) {
        console.error('Contract ReferralTracker not found in current network.');
      }
    }
  }, [wallet]);

  return activeContract;
};

export default useRefferalContract;
