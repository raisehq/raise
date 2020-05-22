import React from 'react';
import { GroupButton, RepaymentType, ControlProps } from '@raisehq/components';
import {
  CreateLoanSection,
  CreateLoanHeader,
  CreateLoanRow,
  CreateLoanDescription,
  SectionTitle
} from '../CreateLoan.styles';

export const repaymentOptions = [
  { key: '0', value: RepaymentType.Bullet, text: 'Bullet' },
  // When Monthly Repayment is live:
  // { key: '1', value: RepaymentType.Monthly, text: 'Monthly' }
  { key: '1', value: RepaymentType.Monthly, text: 'Monthly', disabled: true }
];

const RepaymentControl: React.FC<ControlProps> = ({ value, options, onSelect }) => (
  <CreateLoanSection>
    <CreateLoanHeader>
      <CreateLoanRow>
        <SectionTitle as="h2">Repayment</SectionTitle>
      </CreateLoanRow>
      <CreateLoanRow>
        <CreateLoanDescription>
          Choose how do you want to make the repayment to investors.
        </CreateLoanDescription>
      </CreateLoanRow>
    </CreateLoanHeader>
    <CreateLoanRow>
      <GroupButton options={options} onClick={onSelect} selectedIndex={value} />
    </CreateLoanRow>
  </CreateLoanSection>
);

export default RepaymentControl;
