import { useState } from 'react';
import useMetaMask from './useMetaMask';
import useAsyncEffect from './useAsyncEffect';

const useKYCContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useMetaMask();

  useAsyncEffect(async () => {
    if (metamask) {
      const contract = await metamask.addContract('KYC');

      setActiveContract({
        add: (account) => contract.methods.add(account).send({ from: account }),
        isConfirmed: (account) => contract.methods.isConfirmed(account).call()
      });
    }
  }, [metamask]);

  return activeContract;
};

export default useKYCContract;
