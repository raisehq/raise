import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LoanComparatorChart } from '@raisehq/components';
import { useCompaniesScrapper } from '@raisehq/components';

const companies = [
  {
    name: 'Compound',
    supplyRate: 0.13,
    logoUrl: 'https://tests.test',
    enabled: true,
  },
  {
    name: 'Raise',
    supplyRate: 0.12,
    logoUrl: 'https://tests.test',
    enabled: true,
  },
  {
    name: 'Fulcrum',
    supplyRate: 0.06,
    logoUrl: 'https://tests.test',
    enabled: false,
  },
];

storiesOf('LoanComparatorChart', module).add('Example static data', () => (
  <div style={{ padding: 10 }}>
    <LoanComparatorChart companies={companies} />
  </div>
));

storiesOf('LoanComparatorChart', module).add('Example with hook', () => {
  const allCompanies = useCompaniesScrapper();
  return (
    <div style={{ padding: 10 }}>
      <LoanComparatorChart companies={allCompanies} />
    </div>
  );
});
