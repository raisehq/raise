import { useState } from 'react';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';

const useDepositContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useWallet();
  useAsyncEffect(async () => {
    if (metamask) {
      try {
        const contract = await metamask.addContract('Deposit');

        setActiveContract({
          address: contract.options.address,
          hasDeposited: address => contract.methods.hasDeposited(address).call(),
          deposit: address => contract.methods.depositFor(address).send({ from: address }),
          depositWithReferral: (address, referralAddress) =>
            contract.methods
              .depositForWithReferral(address, referralAddress)
              .send({ from: address }),
          withdraw: address => contract.methods.withdraw(address).send({ from: address })
        });
      } catch (error) {
        console.error('Contract Deposit not found in current network.');
      }
    }
  }, [metamask]);

  return activeContract;
};

export default useDepositContract;
