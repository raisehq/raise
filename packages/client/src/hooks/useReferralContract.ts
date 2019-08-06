import { useState } from 'react';
import useMetaMask from './useMetaMask';
import useAsyncEffect from './useAsyncEffect';

const useRefferalContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useMetaMask();

  useAsyncEffect(async () => {
    if (metamask) {
      try {
        const contract = await metamask.addContract('ReferralTracker');
        setActiveContract({
          address: contract.address,
          withdraw: (account) => contract.methods.withdraw(account).send({ from: account }),
          balance: (account) => contract.methods.unclaimedReferrals(account).call()
        });
      } catch (error) {
        console.error('Contract ReferralTracker not found in current network.')
      }
    }
  }, [metamask]);

  return activeContract;
};

export default useRefferalContract;
