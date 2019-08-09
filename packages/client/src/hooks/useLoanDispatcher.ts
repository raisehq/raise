import { useState } from 'react';
import useMetaMask from './useMetaMask';
import useBlockNumber from './useBlockNumber';
import useAsyncEffect from './useAsyncEffect';

const useLoanDispatcher = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const blockNumber: any = useBlockNumber();
  const metamask = useMetaMask();

  useAsyncEffect(async () => {
    if (metamask) {
      try {
        const contract = await metamask.addContract('LoanDispatcher');
        const account = await metamask.getAccounts();
        setActiveContract({
          deploy: (minAmount, amount, bpMaxInterestRate, term) => {
            const loanTimeLength = 1 * 4 * 7 * 24 * 60 * 60;
            const loanRepaymentTime = term * 4 * 7 * 24 * 60 * 60;
            const termLength = loanRepaymentTime;
            const lengthBlocks =
              loanTimeLength / blockNumber.current.averageMiningTime;

            return contract.current['LoanDispatcher'].methods
              .deploy(
                lengthBlocks,
                metamask.utils.toWei(
                  minAmount && minAmount !== 0
                    ? minAmount.toString()
                    : amount.toString(),
                  'ether'
                ),
                metamask.utils.toWei(amount.toString(), 'ether'),
                metamask.utils.toWei(bpMaxInterestRate.toString(), 'ether'),
                termLength
              )
              .send({ from: account[0] });
          }
        });
      } catch (error) {
        console.error('Contract LoanDispatcher not found in current network.')
      }
    }
  }, [metamask]);

  return activeContract;
};

export default useLoanDispatcher;
