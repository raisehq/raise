import React from 'react';
import { Header, ConfirmButton } from '../../InvestModal/InvestModal.styles';
const Processing = () => {

  return (
    <>
    <Header>Claim Loan</Header>
    <ConfirmButton disabled>Loading...</ConfirmButton>
    </>
  );
};

export default Processing;
