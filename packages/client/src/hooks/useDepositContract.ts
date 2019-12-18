import { useState, useContext } from 'react';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';
import AppContext from '../components/AppContext';
const useDepositContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const {
    FollowTx: { watchTx }
  }: any = useContext(AppContext);
  const wallet = useWallet();
  useAsyncEffect(async () => {
    if (wallet) {
      try {
        const contract = await wallet.addContract('Deposit');

        setActiveContract({
          address: contract.options.address,
          hasDeposited: async address => {
            const resp = await contract.methods.hasDeposited(address).call();
            return resp;
          },
          deposit: address => watchTx(contract.methods.depositFor(address).send({ from: address })),
          depositWithReferral: watchTx((address, referralAddress) =>
            contract.methods
              .depositForWithReferral(address, referralAddress)
              .send({ from: address })
          ),
          withdraw: address => watchTx(contract.methods.withdraw(address).send({ from: address }))
        });
      } catch (error) {
        console.error('Contract Deposit not found in current network.');
      }
    }
  }, [wallet]);

  return activeContract;
};

export default useDepositContract;
