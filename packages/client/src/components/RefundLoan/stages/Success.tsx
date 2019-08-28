import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../RefundLoan.styles';
import { RefundLoanContext } from '../RefundLoan';

const Processing = () => {
  const { closeModal }: any = useContext(RefundLoanContext)
  return (
    <>
      <Header>Claim Loan</Header>
      <ConfirmButton onClick={closeModal}>Go back</ConfirmButton>
    </>
  );
};

export default Processing;

