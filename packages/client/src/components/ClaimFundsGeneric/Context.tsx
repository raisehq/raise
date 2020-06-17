import React, { createContext, useState, Dispatch } from 'react';
import Stages from './stages';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { useRootContext } from '../../contexts/RootContext';
import { findOne } from '../../helpers/butter';
import { getLoanByAddress } from '../../services/blockchain';
import { getCalculations } from '../../utils/loanUtils';

interface ClaimFundGenericContextInterface {
  open: boolean;
  stage: any;
  monthlyLoanAPR: string;
  setStage: Dispatch<any> | undefined;
  openModal: () => void | undefined;
  closeModal: () => void | undefined;
}

const ClaimFundGenericContext = createContext<ClaimFundGenericContextInterface>({
  open: false,
  stage: Stages.Confirm,
  monthlyLoanAPR: '',
  setStage: () => {},
  openModal: () => {},
  closeModal: () => {}
});

export const ClaimFundsGenericProvider = ({ children }) => {
  const {
    store: {
      config: { network }
    }
  }: any = useRootContext();
  const [monthlyLoanAPR, setMonthlyLoanAPR] = useState('16%');
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(Stages.Confirm);

  const openModal = () => {
    setStage(Stages.Confirm);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // Retrieve current loan of the month APR
  useAsyncEffect(async () => {
    const loanOfTheMonthInfo = await findOne('loan_of_the_month', {
      'fields.net': network,
      'fields.loan_of_the_month': true
    });

    const currentLoan = await getLoanByAddress(loanOfTheMonthInfo.loanAddress, network);
    const loanCalcs = getCalculations(currentLoan);
    const { currentAPR } = loanCalcs;
    setMonthlyLoanAPR(currentAPR);
  }, []);

  return (
    <ClaimFundGenericContext.Provider
      value={{
        open,
        stage,
        setStage,
        openModal,
        closeModal,
        monthlyLoanAPR
      }}
    >
      {children}
    </ClaimFundGenericContext.Provider>
  );
};

export default ClaimFundGenericContext;
