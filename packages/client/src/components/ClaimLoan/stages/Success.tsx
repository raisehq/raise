import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../ClaimLoan.styles';
import { ClaimLoanContext } from '../ClaimLoan';

const Processing = () => {
  const { closeModal }: any = useContext(ClaimLoanContext)
  return (
    <>
      <Header>Claim Loan</Header>
      <ConfirmButton onClick={closeModal}>Go back</ConfirmButton>
    </>
  );
};

export default Processing;

