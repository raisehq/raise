import { useState } from 'react';
import { Either } from '../utils';
import useMetaMask from './useMetaMask';
import useAsyncEffect from './useAsyncEffect';

const useRefferalContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useMetaMask();

  useAsyncEffect(async () => {
    const ready = Either.either(metamask);

    ready.fold(
      () => null,
      async () => {
        const isActive = Either.either(activeContract);

        isActive.fold(
          async () => {
            const contract = await metamask.addContract('ReferralTracker');
            setActiveContract({
              address: contract.address,
              withdraw: (account) => contract.methods.withdraw(account).send({ from: account }),
              balance: (account) => contract.methods.unclaimedReferrals(account).call()
            });
          },
          () => activeContract
        );
      }
    );
  }, [metamask]);

  return activeContract;
};

export default useRefferalContract;
