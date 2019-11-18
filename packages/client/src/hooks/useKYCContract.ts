import { useState } from 'react';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';

const useKYCContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useWallet();

  useAsyncEffect(async () => {
    if (metamask) {
      try {
        const contract = await metamask.addContract('KYC');

        setActiveContract({
          add: account => contract.methods.add(account).send({ from: account }),
          isConfirmed: account => contract.methods.isConfirmed(account).call()
        });
      } catch (error) {
        console.error('Ćontract KYC not found in current network.');
      }
    }
  }, [metamask]);

  return activeContract;
};

export default useKYCContract;
