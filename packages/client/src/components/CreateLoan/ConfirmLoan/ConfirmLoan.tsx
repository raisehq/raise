import React from 'react';
import { isMobile } from 'react-device-detect';
import { Button, CheckboxControl } from '@raisehq/components';

import {
  Divider,
  DividerConfirmLoan,
  LoanConfirmation,
  LoanResume,
  AmountRow,
  AmountDescription,
  AmountNumber
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
          <AmountRow>
            <AmountDescription bold fontSize={16}>
              Summary
            </AmountDescription>
          </AmountRow>
          {!isMobile && <DividerConfirmLoan />}
          <AmountRow>
            <AmountDescription>Cryptocurrency</AmountDescription>
            <AmountNumber>{selectedCoinType}</AmountNumber>
          </AmountRow>
          {!isMobile && <DividerConfirmLoan />}
          <AmountRow>
            <AmountDescription>Loan amount</AmountDescription>
            <AmountNumber>{formattedAmount}</AmountNumber>
          </AmountRow>
          {!isMobile && <DividerConfirmLoan />}
          <AmountRow>
            <AmountDescription>System fees (1%)</AmountDescription>
            <AmountNumber>-{systemFees}</AmountNumber>
          </AmountRow>
          {!isMobile && <DividerConfirmLoan />}
          <AmountRow>
            <AmountDescription>Net loan proceeds</AmountDescription>
            <AmountNumber bold>{netLoan}</AmountNumber>
          </AmountRow>
        </div>
        {!isMobile && <Divider />}
        <div>
          <AmountRow>
            <AmountDescription>Principal</AmountDescription>
            <AmountNumber>{formattedAmount}</AmountNumber>
          </AmountRow>
          {!isMobile && <DividerConfirmLoan />}
          <AmountRow>
            <AmountDescription>Interest</AmountDescription>
            <AmountNumber>{totalInterest}</AmountNumber>
          </AmountRow>
          {!isMobile && <DividerConfirmLoan />}
          <AmountRow>
            <AmountDescription>Total repayment amount</AmountDescription>
            <AmountNumber bold>{repaymentAmount}</AmountNumber>
          </AmountRow>
        </div>
      </LoanResume>
      {!isMobile && <Divider />}
      <AmountRow>
        <CheckboxControl
          size="small"
          id="btn-check-term-conditions"
          onChange={onToggleTerms}
          label="I agree to the Terms and Conditions of the Loan Agreement"
        />
      </AmountRow>

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
