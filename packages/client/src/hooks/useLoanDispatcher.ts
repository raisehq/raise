import { useState, useContext } from 'react';
import useWallet from './useWallet';
import useWeb3 from './useWeb3';
import useAsyncEffect from './useAsyncEffect';
import AppContext from '../components/AppContext';

const useLoanDispatcher = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const { web3 } = useWeb3();
  const wallet = useWallet();
  const {
    FollowTx: { watchTx }
  }: any = useContext(AppContext);

  useAsyncEffect(async () => {
    if (wallet) {
      try {
        const contract = await wallet.addContract('LoanDispatcher');
        const account = await wallet.getPrimaryAccount();
        setActiveContract({
          deploy: async (
            minAmount,
            amount,
            minInterestRate,
            maxInterestRate,
            termMonthsLength,
            acceptMinimum,
            auctionTermLength
          ) => {
            const auctionSecondsLength = auctionTermLength.toString();
            const termSecondsLength = termMonthsLength.toString();
            const params = [
              web3.utils.toWei(acceptMinimum ? minAmount.toString() : amount.toString(), 'ether'),
              web3.utils.toWei(amount.toString(), 'ether'),
              web3.utils.toWei(minInterestRate.toString()),
              web3.utils.toWei(maxInterestRate.toString()),
              termSecondsLength,
              auctionSecondsLength
            ];

            return watchTx(contract.methods.deploy(...params).send({ from: account }));
          }
        });
      } catch (error) {
        console.error('Contract LoanDispatcher not found in current network.', error);
      }
    }
  }, [wallet]);

  return activeContract;
};

export default useLoanDispatcher;
