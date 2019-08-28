import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../ClaimLoan.styles';
import { ClaimLoanContext, Stages } from '../ClaimLoan';

const Confirm = () => {
  const { setStage }: any = useContext(ClaimLoanContext)
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
