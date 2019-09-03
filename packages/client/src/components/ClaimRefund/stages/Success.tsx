import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../../InvestModal/InvestModal.styles';
import { RepayLoanContext } from '../RepayLoan';

const Processing = () => {
  const { closeModal }: any = useContext(RepayLoanContext)
  return (
    <>
    <Header>Claim Loan</Header>
    <ConfirmButton onClick={closeModal}>Go back</ConfirmButton>
    </>
  );
};

export default Processing;

