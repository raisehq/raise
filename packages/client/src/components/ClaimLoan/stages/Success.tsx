import React, { useContext } from 'react';
import { CardCenteredText, CardTitle, CardSubtitle, ButtonGreen } from '../ClaimLoan.styles';
import { ClaimLoanContext } from '../ClaimLoan';

const Processing = () => {
  const { closeModal }: any = useContext(ClaimLoanContext);
  return (
    <>
    <CardCenteredText>
      <CardTitle>The funds have been transferred to your account</CardTitle>
      <CardSubtitle>Check your active loans details in your dashboard</CardSubtitle>
    </CardCenteredText>
    <ButtonGreen onClick={closeModal}>OK</ButtonGreen>
    </>
  );
};

export default Processing;
