import { useState } from 'react';
import useMetaMask from './useMetaMask';
import { averageBlockTime } from '../utils';
import useAsyncEffect from './useAsyncEffect';

const useLoanDispatcher = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useMetaMask();
  useAsyncEffect(async () => {
    if (metamask) {
      try {
        const contract = await metamask.addContract('LoanDispatcher');
        const account = await metamask.getAccounts();
        setActiveContract({
          deploy: async (
            minAmount,
            amount,
            bpMaxInterestRate,
            term,
            acceptMinimum
          ) => {
            const averageMiningTime = await averageBlockTime();
            const loanTimeLength = 1 * 4 * 7 * 24 * 60 * 60;
            const termLengthDate = new Date(
              new Date().setMonth(new Date().getMonth() + term)
            );
            const termLength = termLengthDate.getTime();

            //const termLength = Date.now() + term * 4 * 7 * 24 * 60 * 60 * 1000;
            const lengthBlocks = loanTimeLength / averageMiningTime;
            const params = [
              lengthBlocks,
              metamask.utils.toWei(
                acceptMinimum ? minAmount.toString() : amount.toString(),
                'ether'
              ),
              metamask.utils.toWei(amount.toString(), 'ether'),
              (bpMaxInterestRate * 1000).toString(),
              termLength
            ];
            console.log(params);
            return contract.methods
              .deploy(...params)
              .send({ from: account[0] });
          }
        });
      } catch (error) {
        console.error('Contract LoanDispatcher not found in current network.');
      }
    }
  }, [metamask]);

  return activeContract;
};

export default useLoanDispatcher;
