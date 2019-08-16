import React from 'react';
import daggy from 'daggy';
import { Link } from 'react-router-dom';
import { Loader, Header } from 'semantic-ui-react';
import { isMobile } from 'react-device-detect';
import {
  Divider,
  LoanConfirmation,
  ConfirmButton,
  LoanFormInfo,
  LoanFormValue,
  LoanResume,
  NewLoanAnchor,
  WaitingButton
} from './CreateLoan.styles';

export const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Waiting: [],
  Success: ['success'],
  Error: ['error']
});

export const getLoanAction = (stage, values, methods) => {
  const { formattedAmount, systemFees, netLoan, totalInterest, repaymentAmount, loan, amountValidation, numberAmount } = values;
  const { onSave, onRetry } = methods;

  return stage.cata({
    Confirm: () => (
      <LoanConfirmation>
        <LoanResume>
          <div>
            <LoanFormInfo>Loan amount</LoanFormInfo>
            <LoanFormValue>{formattedAmount} DAI</LoanFormValue>
              
            <LoanFormInfo>System fees (1%)</LoanFormInfo>
            <LoanFormValue>-{systemFees} DAI</LoanFormValue>

            <LoanFormInfo>Net loan proceeds</LoanFormInfo>
            <LoanFormValue big={!isMobile}>{netLoan} DAI</LoanFormValue>
          </div>
          <Divider vertical={isMobile} />
          <div>
            <LoanFormInfo>Principal</LoanFormInfo>
            <LoanFormValue>{formattedAmount} DAI</LoanFormValue>

            <LoanFormInfo>Interest</LoanFormInfo>
            <LoanFormValue>{totalInterest} DAI</LoanFormValue>

            <LoanFormInfo>Total repayment amount</LoanFormInfo>
            <LoanFormValue big={!isMobile}>{repaymentAmount} DAI</LoanFormValue>
          </div>
        </LoanResume>
        <ConfirmButton
          onClick={onSave}
          disabled={
            amountValidation.error ||
            loan.term === 0 ||
            loan.mir === 0 ||
            numberAmount === 0
          }
        >
          Confirm
        </ConfirmButton>
      </LoanConfirmation>
    ),
    Waiting: () => (
      <LoanConfirmation>
        <Header as="h2">Please wait</Header>
        <p>Creating loan. Can take several minutes.</p>
        <WaitingButton disabled>
          <Loader active centered inline />
        </WaitingButton>
      </LoanConfirmation>
    ),
    Success: () => (
      <LoanConfirmation>
        <Header as="h2">Congrats!</Header>
        <p>Your loan request have been created.</p>
        <ConfirmButton as={Link} to='/dashboard'>
          Check your loans
        </ConfirmButton>
        <NewLoanAnchor onClick={onRetry}>
          Create a new loan
        </NewLoanAnchor>
      </LoanConfirmation>
    ),
    Error: () => (
      <LoanConfirmation>
        <Header as="h2">Sorry</Header>
        <p>Something went wrong while creating the loan. Contact support if you need help.</p>
        <ConfirmButton onClick={onRetry}>
          Retry
        </ConfirmButton>
      </LoanConfirmation>
    )
  });
}