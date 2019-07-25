import { useState } from 'react';
import { Either } from '../utils';
import useMetaMask from './useMetaMask';
import useAsyncEffect from './useAsyncEffect';

const useDepositContract = () => {
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
            const contract = await metamask.addContract('Deposit');
            setActiveContract({
              address: contract.address,
              hasDeposited: (address) =>
                contract.methods.hasDeposited(address).call(),
              deposit: (address) =>
                contract.methods
                  .depositFor(address)
                  .send({ from: address }),
              depositWithReferral: (address, referralAddress) =>
                  contract.methods
                    .depositForWithReferral(address, referralAddress)
                    .send({ from: address }),
              withdraw: (address) =>
                contract.methods.withdraw(address).send({ from: address })
            });
          },
          () => activeContract
        );
      }
    );
  }, [metamask]);

  return activeContract;
};

export default useDepositContract;