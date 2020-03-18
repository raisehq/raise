import React from 'react';
import {
  ResumeContainer,
  CompanyContainer,
  CompanyInfo,
  CompanyIcon,
  Percentage,
  PercentageBar,
  PercentageBarBack,
  CompanyName,
} from './LoanComparatorChart.styles';

interface Company {
  name: string;
  logoUrl: string;
  supplyRate: number;
  enabled: boolean;
}

interface ChartProps {
  companies: Company[];
}

const companyRes = (topPercentage: number) => (
  company: Company,
  index: number
) => {
  console.log(topPercentage);
  const width = 384;
  const newWidth = (width * company.supplyRate) / topPercentage;

  return (
    <CompanyContainer key={index} comingSoon={company.enabled}>
      <CompanyIcon src={company.logoUrl} />
      <CompanyInfo>
        <Percentage>{`${
          company.enabled ? Number(company.supplyRate * 100).toFixed(2) : 0
        }%`}</Percentage>
        <PercentageBarBack newWidth={width} />
        <PercentageBar newWidth={company.enabled ? newWidth : 0} />

        <CompanyName>{company.name}</CompanyName>
      </CompanyInfo>
    </CompanyContainer>
  );
};

const printResumes = (companies: Company[]) => {
  if (!companies.length) {
    return null;
  }
  const sortedCompanies = companies.sort((companyA, companyB) => {
    if (!companyA.enabled) {
      return 1;
    }
    return companyB.supplyRate - companyA.supplyRate;
  });
  return sortedCompanies.map(companyRes(sortedCompanies[0].supplyRate));
};

export const LoanComparatorChart: React.SFC<ChartProps> = ({ companies }) => {
  return <ResumeContainer>{printResumes(companies)}</ResumeContainer>;
};
