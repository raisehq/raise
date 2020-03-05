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
  WaitingButton,
  LoanTermsCheckbox,
  CheckContainer,
  LoanFormContainer
} from './CreateLoan.styles';

export const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Waiting: [],
  Success: ['success'],
  Error: ['error']
});

export const getLoanAction = (stage, values, methods) => {
  const {
    formattedAmount,
    systemFees,
    netLoan,
    totalInterest,
    repaymentAmount,
    loan,
    amountValidation,
    numberAmount,
    termsCond,
    operatorFee
  } = values;

  const { onSave, onRetry, onToggleTerms } = methods;

  return stage.cata({
    Confirm: () => (
      <LoanConfirmation>
        <LoanResume>
          <div>
            <LoanFormContainer>
              <LoanFormInfo alignment="left" isMobile={isMobile}>
                Loan amount
              </LoanFormInfo>
              <LoanFormValue alignment="left" isMobile={isMobile}>
                {formattedAmount} DAI
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="left" isMobile={isMobile}>
                System fees ({operatorFee}%)
              </LoanFormInfo>
              <LoanFormValue alignment="left" isMobile={isMobile}>
                -{systemFees} DAI
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="left" isMobile={isMobile}>
                Net loan proceeds
              </LoanFormInfo>
              <LoanFormValue alignment="left" isMobile={isMobile} big={!isMobile} className="bold">
                {netLoan} DAI
              </LoanFormValue>
            </LoanFormContainer>
          </div>
          {!isMobile && <Divider />}
          <div>
            <LoanFormContainer>
              <LoanFormInfo alignment="right" isMobile={isMobile}>
                Principal
              </LoanFormInfo>
              <LoanFormValue alignment="right" isMobile={isMobile}>
                {formattedAmount} DAI
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="right" isMobile={isMobile}>
                Interest
              </LoanFormInfo>
              <LoanFormValue alignment="right" isMobile={isMobile}>
                {totalInterest} DAI
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="right" isMobile={isMobile}>
                Total repayment amount
              </LoanFormInfo>
              <LoanFormValue alignment="right" isMobile={isMobile} big={!isMobile} className="bold">
                {repaymentAmount} DAI
              </LoanFormValue>
            </LoanFormContainer>
          </div>
        </LoanResume>
        {!isMobile && <Divider />}
        <CheckContainer>
          <LoanTermsCheckbox id="btn-check-term-conditions" onChange={onToggleTerms} />I agree to
          the Terms and Conditions of the Loan Agreement
        </CheckContainer>
        <ConfirmButton
          id="btn-create"
          onClick={onSave}
          disabled={
            amountValidation.error ||
            loan.term === 0 ||
            loan.mir === 0 ||
            numberAmount === 0 ||
            !termsCond
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
