import React from 'react';
import {
  LoanHeader,
  LoanHeaderItem,
  LoanHeaderLabel,
  LoanHeaderValue,
  LoanTextWrapper,
  LoanHeaderList,
  ProgressRow,
  ProgressContainer,
  InvestButton,
  LoanButtonRow,
  LoanDaysLeft,
  LoanDaysLeftWrapper,
  LastTextWrapper,
  LoanDaysLeftLabel,
  LoanDaysLeftValue
} from './styles';
import { getCalculations } from '../../../utils/loanUtils';

const BorrowerHeader = ({ auction }) => {
  const values = auction ? getCalculations(auction) : null;
  return (
    <LoanHeader>
      <LoanDaysLeft>
        <LoanDaysLeftWrapper>
          <LoanDaysLeftLabel>Days left</LoanDaysLeftLabel>
          <LoanDaysLeftValue>{values && values.times.loanTerm}</LoanDaysLeftValue>
        </LoanDaysLeftWrapper>
      </LoanDaysLeft>
      <ProgressContainer>
        <ProgressRow
          value={values && values.currentAmount}
          total={values && values.totalAmount}
          progress="percent"
          precision={0}
        />
      </ProgressContainer>
      <LoanHeaderList>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Raised so far</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.principal}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Investors</LoanHeaderLabel>
            <LoanHeaderValue>{auction && auction.investorCount}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Target</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.maxAmount}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Loan Term</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.times.loanTerm}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LastTextWrapper>
            <LoanHeaderLabel>Current APR</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.currentAPR}</LoanHeaderValue>
          </LastTextWrapper>
        </LoanHeaderItem>
      </LoanHeaderList>
      {auction && (
        <LoanButtonRow>
          <InvestButton loan={auction} />
        </LoanButtonRow>
      )}
    </LoanHeader>
  );
};

export default BorrowerHeader;
