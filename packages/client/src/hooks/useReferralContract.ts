import { useState } from 'react';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';

const useRefferalContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useWallet();

  useAsyncEffect(async () => {
    if (metamask) {
      try {
        const contract = await metamask.addContract('ReferralTracker');
        setActiveContract({
          address: contract.options.address,
          withdraw: account => contract.methods.withdraw(account).send({ from: account }),
          balance: account => contract.methods.unclaimedReferrals(account).call()
        });
      } catch (error) {
        console.error('Contract ReferralTracker not found in current network.');
      }
    }
  }, [metamask]);

  return activeContract;
};

export default useRefferalContract;
