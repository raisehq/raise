import React, { Fragment } from 'react';
import { Header, ConfirmButton } from '../../InvestModal/InvestModal.styles';

const Processing = () => (
  <Fragment>
    <Header>Claim Loan</Header>
    <ConfirmButton disabled>Loading...</ConfirmButton>
  </Fragment>
)

export default Processing;
