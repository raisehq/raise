import { useState, useContext } from 'react';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';
import AppContext from '../context';

const useDepositContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const { followTx }: any = useContext(AppContext);

  const wallet = useWallet();

  useAsyncEffect(async () => {
    if (wallet && followTx) {
      try {
        const contract = await wallet.addContract('Deposit');

        setActiveContract({
          address: contract.options.address,
          hasDeposited: async address => {
            const resp = await contract.methods.hasDeposited(address).call();
            return resp;
          },
          deposit: address =>
            followTx.watchTx(
              contract.methods.depositFor(address).send({ from: address }),
              'deposit'
            ),
          depositWithReferral: (address, referralAddress) =>
            followTx.watchTx(
              contract.methods
                .depositForWithReferral(address, referralAddress)
                .send({ from: address }),
              'depositReferal'
            ),
          withdraw: address =>
            followTx.watchTx(contract.methods.withdraw(address).send({ from: address }))
        });
      } catch (error) {
        console.error('Contract Deposit not found in current network.', error);
      }
    }
  }, [wallet, followTx]);

  return activeContract;
};

export default useDepositContract;
