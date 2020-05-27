import React, { createContext, useState, Dispatch } from 'react';
import Stages from './ClaimRefund.stages';
import useGetCoin from '../../hooks/useGetCoin';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { useRootContext } from '../../contexts/RootContext';
import { findOne } from '../../helpers/butter';
import { getLoanByAddress } from '../../services/blockchain';
import { getCalculations } from '../../utils/loanUtils';

interface ClaimRefundContextInterface {
  open: boolean;
  stage: any;
  loan: any;
  calculatedLoan: any;
  monthlyLoanAPR: string;
  setStage: Dispatch<any> | undefined;
  openModal: (selectedLoan: any) => void | undefined;
  closeModal: () => void | undefined;
  setLoan: Dispatch<any> | undefined;
}

const ClaimRefundContext = createContext<ClaimRefundContextInterface>({
  open: false,
  stage: Stages.Confirm,
  loan: null,
  calculatedLoan: null,
  monthlyLoanAPR: '',
  setStage: () => {},
  openModal: () => {},
  closeModal: () => {},
  setLoan: () => {}
});

export const ClaimRefundProvider = ({ children }) => {
  const {
    store: {
      config: { network }
    }
  }: any = useRootContext();
  const [monthlyLoanAPR, setMonthlyLoanAPR] = useState('16%');
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(Stages.Confirm);
  const [loan, setLoan] = useState(null);
  const coin = useGetCoin(loan);
  const calculatedLoan = loan && getCalculations(loan, coin?.decimals);

  const openModal = (selectedLoan) => {
    setLoan(selectedLoan);
    setStage(Stages.Confirm);
    setOpen(true);
  };

  const closeModal = () => {
    setLoan(null);
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
    <ClaimRefundContext.Provider
      value={{
        open,
        stage,
        loan,
        setLoan,
        setStage,
        openModal,
        closeModal,
        calculatedLoan,
        monthlyLoanAPR
      }}
    >
      {children}
    </ClaimRefundContext.Provider>
  );
};

export default ClaimRefundContext;
