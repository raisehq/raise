import React from 'react';
import { SideInfo, SideTitle } from './styles';
import { KPIList } from './KPI';
import { BorrowerInfo } from './BorrowerInfo';
import Socials from './Socials';

const AboutBorrower = ({ borrowerInfo }: any) => {
  console.log('borrower ifno;:: ', borrowerInfo);
  const {
    companyDetails: { address, foundationDate, url },
    extraResources,
    socialNetworks,
    kpis
  } = borrowerInfo;
  return (
    <SideInfo>
      <SideTitle>Overview</SideTitle>
      <KPIList kpis={kpis} />
      <BorrowerInfo address={address} date={foundationDate} extraResources={extraResources} />
      <Socials socialNetworks={socialNetworks} url={url} />
    </SideInfo>
  );
};

export default AboutBorrower;
