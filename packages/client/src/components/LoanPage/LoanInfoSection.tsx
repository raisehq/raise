import React from 'react';
import { LoanHeader, LoanInformation } from '@raisehq/components';
import {
  LoanPageInfoSection,
  LoanInformationContainer,
  BorrowerResume,
  LoanInvestContainer,
  LoanHeaderWrapper,
  BorrowerName,
  BorrowerShortDescription,
  LearnMore,
  LearnMoreLink,
  TriangleRight,
  RightTriangle
} from './styles';
import Invest from '../Invest';

const LoanInfoSection = ({ coinInfo, borrowerInfo, loan, userActivated, isLogged }) => (
  <LoanPageInfoSection>
    {Object.keys(borrowerInfo).length > 0 && (
      <LoanInformationContainer>
        <LoanHeaderWrapper>
          <LoanHeader
            logo={borrowerInfo.companyDetails.logo}
            decimals={coinInfo.decimals}
            auction={loan}
          />
        </LoanHeaderWrapper>
        <LoanHeaderWrapper>
          <LoanInformation currency={coinInfo.text} auction={loan} decimals={coinInfo.decimals} />
        </LoanHeaderWrapper>
        <BorrowerResume>
          <BorrowerName>About {borrowerInfo.companyDetails.companyName}</BorrowerName>
          <BorrowerShortDescription>
            {borrowerInfo.companyDetails.shortDescription}
          </BorrowerShortDescription>
        </BorrowerResume>
        <LearnMore>
          <LearnMoreLink href="#borrowerinfo">Learn more</LearnMoreLink>
          <TriangleRight>
            <RightTriangle />
          </TriangleRight>
        </LearnMore>
      </LoanInformationContainer>
    )}
    <LoanInvestContainer id="invest">
      {loan && (
        <Invest loan={loan} userActivated={userActivated} fullInfo={false} isLogged={isLogged} />
      )}
    </LoanInvestContainer>
  </LoanPageInfoSection>
);

export default LoanInfoSection;
