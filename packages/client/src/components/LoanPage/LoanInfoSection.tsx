import React from 'react';
import {
  LoanPageInfoSection,
  LoanInformationContainer,
  LoanResumeWrapper,
  LoanSubResumeWrapper,
  BorrowerResume,
  LoanInvestContainer
} from './styles';
import Invest from '../Invest';

const LoanInfoSection = ({ borrowerInfo, loan, userActivated, isLogged }) => (
  <LoanPageInfoSection>
    <LoanInformationContainer>
      {Object.keys(borrowerInfo).length > 0 && (
        <>
          <LoanResumeWrapper />
          <LoanSubResumeWrapper />
          <BorrowerResume>{borrowerInfo.companyDetails.shortDescription}</BorrowerResume>
        </>
      )}
    </LoanInformationContainer>
    <LoanInvestContainer id="invest">
      {loan && (
        <Invest loan={loan} userActivated={userActivated} fullInfo={false} isLogged={isLogged} />
      )}
    </LoanInvestContainer>
  </LoanPageInfoSection>
);

export default LoanInfoSection;
