import { useContext, useState, useEffect } from 'react';
import useWallet from '../../hooks/useWallet';
import { Stages } from './ClaimRepay';
import AppContext from '../AppContext';

const useRepayment = (loan, open) => {
  const { id }: any = loan;
  const {
    web3Status: { account }
  }: any = useContext(AppContext);
  const metamask = useWallet();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();
  const [stage, setStage] = useState(Stages.Confirm);

  useEffect(() => {
    setError(null);
    setPending(false);
  }, [open]);

  const claimRepayment = async depositChecked => {
    setPending(true);
    const LoanContract = await metamask.addContractByAddress('LoanContract', id);
    try {
      if (depositChecked) {
        await LoanContract.methods.withdrawRepaymentAndDeposit().send({ from: account });
      } else {
        await LoanContract.methods.withdrawRepayment().send({ from: account });
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
