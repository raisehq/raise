import { useState, useEffect } from 'react';
import useWallet from '../../hooks/useWallet';
import { Stages } from './ClaimRepay';
import { useAppContext } from '../../contexts/AppContext';

const useRepayment = (loan, open) => {
  const { id }: any = loan;
  const {
    web3Status: { account }
  }: any = useAppContext();
  const metamask = useWallet();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();
  const [stage, setStage] = useState(Stages.Confirm);

  useEffect(() => {
    setError(null);
    setPending(false);
  }, [open]);

  const claimRepayment = async () => {
    setPending(true);
    const LoanContract = await metamask.addContractByAddress('LoanContract', id);
    try {
      await LoanContract.methods.withdrawRepayment().send({ from: account });
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
