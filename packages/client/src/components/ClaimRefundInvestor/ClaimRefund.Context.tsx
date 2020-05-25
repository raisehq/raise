import React, { createContext, useState, Dispatch } from 'react';

import Stages from './ClaimRefund.stages';
import { getCalculations } from '../../utils/loanUtils';
import useGetCoin from '../../hooks/useGetCoin';

interface ClaimRefundContextInterface {
  open: boolean;
  stage: any;
  loan: any;
  calculatedLoan: any;
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
  setStage: () => {},
  openModal: () => {},
  closeModal: () => {},
  setLoan: () => {}
});

export const ClaimRefundProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(Stages.Confirm);
  const [loan, setLoan] = useState(null);
  const coin = useGetCoin(loan);
  const calculatedLoan = loan && getCalculations(loan, coin?.decimals);

  const openModal = (selectedLoan) => {
    setLoan(selectedLoan);
    setStage(Stages.Processing);
    setOpen(true);
  };

  const closeModal = () => {
    setLoan(null);
    setOpen(false);
  };

  return (
    <ClaimRefundContext.Provider
      value={{ open, stage, loan, setLoan, setStage, openModal, closeModal, calculatedLoan }}
    >
      {children}
    </ClaimRefundContext.Provider>
  );
};

export default ClaimRefundContext;
