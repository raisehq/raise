import React from 'react';
import { ERC20_LOGOS } from '../../commons/constants';
import {
  ResumeContainer,
  CompanyContainer,
  CompanyInfo,
  CompanyIcon,
  Percentage,
  PercentageBar,
  PercentageBarBack,
  CompanyName
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

const getPercentage = (company: any) => {
  const per = company.enabled ? Number(company.supplyRate * 100).toFixed(2) : 0;
  return per;
};

const companyRes = (topPercentage: number) => (company: Company, index: number) => {
  const width = 100;
  const newWidth = (width * company.supplyRate) / topPercentage;

  return (
    <CompanyContainer key={index} comingSoon={company.enabled}>
      <CompanyIcon src={ERC20_LOGOS[company.logoUrl] || company.logoUrl} />
      <CompanyInfo>
        <Percentage>{`${getPercentage(company)}%`}</Percentage>
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
  const sortedCompanies = companies
    .filter(x => !!x && x.supplyRate >= 0)
    .sort((companyA, companyB) => {
      if (!companyA.enabled) {
        return 1;
      }
      return companyB.supplyRate - companyA.supplyRate;
    });
  return sortedCompanies.map(companyRes(sortedCompanies[0].supplyRate));
};

export const LoanComparatorChart: React.SFC<ChartProps> = ({ companies }: any) => (
  <ResumeContainer>{printResumes(companies)}</ResumeContainer>
);

export default LoanComparatorChart;
