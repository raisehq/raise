import React from 'react';
import daggy from 'daggy';
import { Link } from 'react-router-dom';
import { Loader, Header } from 'semantic-ui-react';
import { LoanConfirmation, ConfirmButton, NewLoanAnchor, WaitingButton } from './CreateLoan.styles';

import ConfirmLoan from './ConfirmLoan';

export const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Waiting: [],
  Success: ['success'],
  Error: ['error']
});

export const getLoanAction = (stage, values, methods) => {
  const { onSave, onRetry, onToggleTerms, onToggleAuthTerms } = methods;

  return stage.cata({
    Confirm: () => (
      <ConfirmLoan
        values={values}
        onToggleTerms={onToggleTerms}
        onToggleAuthTerms={onToggleAuthTerms}
        onSave={onSave}
      />
    ),
    Waiting: () => (
      <LoanConfirmation>
        <Header as="h2">Please wait</Header>
        <p>Creating loan. Can take several minutes.</p>
        <WaitingButton disabled>
          <Loader active inline />
        </WaitingButton>
      </LoanConfirmation>
    ),
    Success: () => (
      <LoanConfirmation>
        <Header as="h2">Congrats!</Header>
        <p>Your loan request have been created.</p>
        <ConfirmButton id="btn-check" as={Link} to="/">
          Check your loans
        </ConfirmButton>
        <NewLoanAnchor onClick={onRetry}>Create a new loan</NewLoanAnchor>
      </LoanConfirmation>
    ),
    Error: () => (
      <LoanConfirmation>
        <Header as="h2">Sorry</Header>
        <p>Something went wrong while creating the loan. Contact support if you need help.</p>
        <ConfirmButton id="btn-retry" onClick={onRetry}>
          Retry
        </ConfirmButton>
      </LoanConfirmation>
    )
  });
};
