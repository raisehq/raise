import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../RefundLoan.styles';
import { RefundLoanContext, Stages } from '../RefundLoan';

const Confirm = () => {
  const { setStage }: any = useContext(RefundLoanContext)
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
