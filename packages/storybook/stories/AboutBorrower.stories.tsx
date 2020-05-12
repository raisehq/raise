import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { AboutBorrower } from '@raisehq/components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

const borrowerInfo = {
  companyDetails: {
    address:
      'Headquarter is based in Singapore, 50 South Bridge Road, #03-00, CMO Building.',
    foundationDate: '"2017"',
    url: 'http://www.flattic.com',
  },
  extraResources: [
    {
      resource: 'Company presentation',
      resource_type: 'briefcase',
      link: 'https://cdn.buttercms.com/MMlqlUJpSDWkb8nsyuqC',
    },
    {
      resource: 'Financial statement',
      resource_type: 'chart bar outline',
      link: 'https://cdn.buttercms.com/CVzqm7ihRoaZEavsA11A',
    },
  ],
  socialNetworks: [
    {
      network: 'linkedin',
      link: 'https://www.linkedin.com/company/cashwagon/',
    },
  ],
  kpis: [
    { kpi: '273,000', label: 'Loans / month', tooltip: 'loan tooltip' },
    { kpi: '15.7%', label: 'Default rate', tooltip: 'percentage tooltip' },
    {
      kpi: 'USD 194,512,000',
      label: 'Volume in loans',
      tooltip: 'volume tooltip',
    },
    { kpi: 'ILs / PDL', label: 'Loan types', tooltip: '' },
  ],
};

storiesOf('AboutBorrower', module).add('About borrower', () => (
  <Wrapper>
    <AboutBorrower borrowerInfo={borrowerInfo} />
  </Wrapper>
));
