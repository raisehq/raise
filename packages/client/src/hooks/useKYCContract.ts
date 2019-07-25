import { useState } from 'react';
import { Either } from '../utils';
import useMetaMask from './useMetaMask';
import useAsyncEffect from './useAsyncEffect';

const useKYCContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useMetaMask();

  useAsyncEffect(async () => {
    const ready = Either.either(metamask);

    ready.fold(
      () => null,
      async () => {
        await metamask.enable();
        const isActive = Either.either(activeContract);

        isActive.fold(
          async () => {
            const contract = await metamask.addContract('KYC');

            setActiveContract({
              add: (account) => contract.methods.add(account).send({ from: account }),
              isConfirmed: (account) => contract.methods.isConfirmed(account).call()
            });
          },
          () => activeContract
        );
      }
    );
  }, [metamask]);

  return activeContract;
};

export default useKYCContract;
