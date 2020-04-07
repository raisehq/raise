import { useState, useEffect } from 'react';
import useWallet from './useWallet';
import { Stages } from '../components/ClaimRepay/ClaimRepay';
import { useAppContext } from '../contexts/AppContext';
import { useRootContext } from '../contexts/RootContext';

const useRepayment = (loan, open) => {
  const { id }: any = loan;
  const {
    web3Status: { account }
  }: any = useAppContext();
  const { followTx }: any = useRootContext();
  const metamask = useWallet();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [stage, setStage] = useState(Stages.Confirm);

  useEffect(() => {
    setError(false);
    setPending(false);
  }, [open]);

  const claimRepayment = async depositChecked => {
    setPending(true);
    const LoanContract = await metamask.addContractByAddress('LoanContract', id);
    try {
      if (depositChecked) {
        await followTx.watchTx(
          LoanContract.methods.withdrawRepaymentAndDeposit().send({ from: account }),
          { id: 'withdrawRepaymentAndDeposit' },
          'withdrawRepaymentAndDeposit'
        );
      } else {
        await followTx.watchTx(
          LoanContract.methods.withdrawRepayment().send({ from: account }),
          { id: 'withdrawRepayment' },
          'withdrawRepayment'
        );
      }

      setStage(Stages.Success);
    } catch (err) {
      setPending(false);
      setStage(Stages.Error);
    }
  };

  return {
    error,
    setError,
    stage,
    setStage,
    claimRepayment,
    pending,
    setPending
  };
};

export default useRepayment;
