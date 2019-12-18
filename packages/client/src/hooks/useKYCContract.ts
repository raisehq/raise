import { useState, useContext } from 'react';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';
import AppContext from '../components/AppContext';

const useKYCContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const wallet = useWallet();
  const {
    FollowTx: { watchTx }
  }: any = useContext(AppContext);
  useAsyncEffect(async () => {
    if (wallet) {
      try {
        const contract = await wallet.addContract('KYC');

        setActiveContract({
          add: watchTx(account => contract.methods.add(account).send({ from: account })),
          isConfirmed: account => contract.methods.isConfirmed(account).call()
        });
      } catch (error) {
        console.error('Ćontract KYC not found in current network.');
      }
    }
  }, [wallet]);

  return activeContract;
};

export default useKYCContract;
