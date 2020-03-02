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
  CheckContainer,
  LoanFormContainer
} from './CreateLoan.styles';
import Button from '../commons/ButtonControl/Button';
import CheckboxControl from '../commons/CheckboxControl';

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
    selectedCoinType
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
                {formattedAmount} {selectedCoinType}
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="left" isMobile={isMobile}>
                System fees (1%)
              </LoanFormInfo>
              <LoanFormValue alignment="left" isMobile={isMobile}>
                -{systemFees} {selectedCoinType}
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="left" isMobile={isMobile}>
                Net loan proceeds
              </LoanFormInfo>
              <LoanFormValue alignment="left" isMobile={isMobile} big={!isMobile} className="bold">
                {netLoan} {selectedCoinType}
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
                {formattedAmount} {selectedCoinType}
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="right" isMobile={isMobile}>
                Interest
              </LoanFormInfo>
              <LoanFormValue alignment="right" isMobile={isMobile}>
                {totalInterest} {selectedCoinType}
              </LoanFormValue>
            </LoanFormContainer>
            <LoanFormContainer>
              <LoanFormInfo alignment="right" isMobile={isMobile}>
                Total repayment amount
              </LoanFormInfo>
              <LoanFormValue alignment="right" isMobile={isMobile} big={!isMobile} className="bold">
                {repaymentAmount} {selectedCoinType}
              </LoanFormValue>
            </LoanFormContainer>
          </div>
        </LoanResume>
        {!isMobile && <Divider />}
        <CheckContainer>
          <CheckboxControl
            id="btn-check-term-conditions"
            onChange={onToggleTerms}
            label="I agree to the Terms and Conditions of the Loan Agreement"
          />
        </CheckContainer>

        <div>
          <Button
            idAttr="btn-create"
            onClick={onSave}
            text="Confirm"
            disabled={
              amountValidation.error ||
              loan.term === 0 ||
              loan.mir === 0 ||
              numberAmount === 0 ||
              !termsCond
            }
          />
        </div>
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
