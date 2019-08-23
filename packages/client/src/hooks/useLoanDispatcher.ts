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
            const auctionTimeLength = 1 * 30 * 24 * 60 * 60;
            const termLengthMonths = new Date(
              new Date().setMonth(new Date().getMonth() + term)
            );
            const termLengthDate = new Date(
              termLengthMonths.setSeconds(
                termLengthMonths.getSeconds() + auctionTimeLength
              )
            );
            const termLength = termLengthDate.getTime();
            const lengthBlocks = auctionTimeLength / averageMiningTime;
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
