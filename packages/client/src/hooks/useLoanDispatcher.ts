import { useState } from 'react';
import useWallet from './useWallet';
import useWeb3 from './useWeb3';
import useAsyncEffect from './useAsyncEffect';
import { useRootContext } from '../contexts/RootContext';

const useLoanDispatcher = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const { web3 } = useWeb3();
  const wallet = useWallet();
  const { followTx }: any = useRootContext();

  useAsyncEffect(async () => {
    if (wallet) {
      try {
        const contract = await wallet.addContract('LoanDispatcher');
        const account = await wallet.getPrimaryAccount();
        setActiveContract({
          getOperatorFeeWei: async () => {
            const fee = await contract.methods.operatorFee().call({ from: account });
            return fee;
          },
          getOperatorFee: async () => {
            const fee = await contract.methods.operatorFee().call({ from: account });
            return Number(web3.utils.fromWei(fee));
          },
          deploy: async (
            minAmount,
            amount,
            minInterestRate,
            maxInterestRate,
            termMonthsLength,
            acceptMinimum,
            auctionTermLength,
            tokenAddress
          ) => {
            const auctionSecondsLength = auctionTermLength.toString();
            const termSecondsLength = termMonthsLength.toString();
            const params = [
              web3.utils.toWei(acceptMinimum ? minAmount.toString() : amount.toString(), 'ether'),
              web3.utils.toWei(amount.toString(), 'ether'),
              web3.utils.toWei(minInterestRate.toString()),
              web3.utils.toWei(maxInterestRate.toString()),
              termSecondsLength,
              auctionSecondsLength,
              tokenAddress
            ];

            return followTx.watchTx(
              contract.methods.deploy(...params).send({ from: account }),
              'loanDispacher'
            );
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
