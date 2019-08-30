import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../../InvestModal/InvestModal.styles';
import { RepayLoanContext, Stages } from '../RepayLoan';

const Confirm = () => {
  const { setStage }: any = useContext(RepayLoanContext)
  const onConfirm = async () => {
    setStage(Stages.Processing);
  };


  return (
    <>
    <Header>Claim Loan</Header>
    <ConfirmButton onClick={onConfirm}>CONFIRM</ConfirmButton>
    </>
  );
};

export default Confirm;
