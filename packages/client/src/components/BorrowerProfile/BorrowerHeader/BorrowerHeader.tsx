import React from 'react';
import {
  LoanHeader,
  LoanHeaderItem,
  LoanHeaderLabel,
  LoanHeaderValue,
  LoanTextWrapper,
  LastTextWrapper,
  LoanHeaderList,
  ProgressRow,
  ProgressContainer
} from './styles';
import { getCalculations } from '../../../utils/loanUtils';

const BorrowerHeader = ({ auction }) => {
  const values = auction ? getCalculations(auction) : null;
  return (
    <LoanHeader>
      <ProgressContainer>
        <ProgressRow
          value={values && values.currentAmount}
          total={values && values.totalAmount}
          progress="percent"
        />
      </ProgressContainer>
      <LoanHeaderList>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Investors</LoanHeaderLabel>
            <LoanHeaderValue>{auction && auction.investorCount}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Loan Term</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.times.loanTerm}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Raised</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.principal}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LoanTextWrapper>
            <LoanHeaderLabel>Target</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.maxAmount}</LoanHeaderValue>
          </LoanTextWrapper>
        </LoanHeaderItem>
        <LoanHeaderItem>
          <LastTextWrapper>
            <LoanHeaderLabel>Days left</LoanHeaderLabel>
            <LoanHeaderValue>{values && values.times.loanTerm}</LoanHeaderValue>
          </LastTextWrapper>
        </LoanHeaderItem>
      </LoanHeaderList>
    </LoanHeader>
  );
};

export default BorrowerHeader;
