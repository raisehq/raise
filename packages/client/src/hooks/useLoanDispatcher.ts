import { useState } from 'react';
import { Either } from '../utils';
import useMetaMask from './useMetaMask';
import useBlockNumber from './useBlockNumber';
import useAsyncEffect from './useAsyncEffect';

const useLoanDispatcher = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const blockNumber: any = useBlockNumber();
  const metamask = useMetaMask();

  useAsyncEffect(async () => {
    const ready = Either.either(metamask);

    ready.fold(
      () => null,
      async () => {
        await metamask.enable();
        const isActive = Either.either(activeContract);

        isActive.fold(
          async () => {
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
          },
          () => activeContract
        );
      }
    );
  }, [metamask]);

  return activeContract;
};

export default useLoanDispatcher;
