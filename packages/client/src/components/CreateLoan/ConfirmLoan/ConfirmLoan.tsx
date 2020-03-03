import React from 'react';
import { isMobile } from 'react-device-detect';
import Button from '../../commons/ButtonControl/Button';
import CheckboxControl from '../../commons/CheckboxControl';

import {
  Divider,
  LoanConfirmation,
  LoanFormInfo,
  LoanFormValue,
  LoanResume,
  CheckContainer,
  LoanFormContainer
} from '../CreateLoan.styles';

const ConfirmLoan = ({ values, onToggleTerms, onSave }) => {
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
  return (
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
  );
};

export default ConfirmLoan;
