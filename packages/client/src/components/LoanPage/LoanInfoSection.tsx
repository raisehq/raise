import React from 'react';
import { LoanHeader } from '@raisehq/components';
import {
  LoanPageInfoSection,
  LoanInformationContainer,
  LoanResumeWrapper,
  LoanSubResumeWrapper,
  BorrowerResume,
  LoanInvestContainer
} from './styles';
import Invest from '../Invest';

const LoanInfoSection = ({ coinInfo, borrowerInfo, loan, userActivated, isLogged }) => (
  <LoanPageInfoSection>
    <LoanInformationContainer>
      {Object.keys(borrowerInfo).length > 0 && (
        <>
          <LoanHeader
            logo={borrowerInfo.companyDetails.logo}
            decimals={coinInfo.decimals}
            auction={loan}
          />
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
