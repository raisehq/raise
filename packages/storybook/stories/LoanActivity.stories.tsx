import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { LoanActivity } from '@raisehq/components';
import { GraphLoan, Company } from '@raisehq/components/dist/types';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const auctionFactory = (state): Partial<GraphLoan> => ({
  auctionEndTimestamp: '1575021892',
  auctionEnded: false,
  auctionLength: '604800',
  auctionStartTimestamp: '1574417092',
  borrowerDebt: '1000000000000000000000',
  id: '0x4198645543440f6fd466078eb01dbc68f61a09ac',
  interestRate: null,
  investorCount: 0,
  maxAmount: '1000000000000000000000',
  maxInterestRate: '958333333333333400',
  minInterestRate: '549999999999999900',
  minimumReached: false,
  netBalance: '1000000000000000000000',
  operatorBalance: '0',
  operatorFee: '1000000000000000000',
  originator: '0xb77b7ac1ec7abac2a37d3df504eee4f3a3618ae6',
  principal: '1000000000000000000000',
  termEndTimestamp: '0',
  termLength: '7776000',
  state,
});

const company: Company = {
  companyName: 'HERO Fintech Solutions Ptd. Ltd.',
  description: '',
  shortDescription:
    'Speck SL was funded  in 1997 and have 17 millions  of yearly revenue. The company is focused in offering the best gastronomy  experience. Vestibulum quam tempus non tortor vel, ullamcorper ullamcorper augue. Vestibulum quam tempus non tortor vel, ullamcorper ullamcorper augue. Vestibulum quam tempus non tortor vel, ullamcorper ullamcorper augue.Vestibulum quam tempus non tortor vel, ullamcorper ullamcorper augue.',
  background: 'https://cdn.buttercms.com/SnV5NXlFQDmHObRHyU2n',
  logo: 'https://cdn.buttercms.com/YzIsSDsTvCCpZ7pbbaVW',
  slug: 'hero',
};

const daiCoin = {
  text: 'DAI',
  key: 'DAI',
  value: 'DAI',
  address: '0x00000',
  icon: 'coin-dai.svg',
  decimals: 18,
};

const bulletMap = [
  { state: 2, label: 'Active' },
  { state: 3, label: 'Closed' },
  { state: 1, label: 'Expired' },
];

const monthlyMap = [
  { state: 2, label: 'Active' },
  { state: 2, label: 'Claim' },
  { state: 4, label: 'Closed' },
  { state: 1, label: 'Expired' },
];

storiesOf('LoanActivity', module).add('InvestCard with auction data', () => {
  const activityMapper = ({ state, label }) => (
    <div style={{ padding: 10 }}>
      <h4>{label}</h4>
      <LoanActivity
        auction={auctionFactory(state)}
        borrower={company}
        coin={daiCoin}
        key={state}
      />
    </div>
  );
  const activityBullet = bulletMap.map(activityMapper);
  const activityMonthly = monthlyMap.map(activityMapper);
  return (
    <>
      <FlexDiv>{activityBullet}</FlexDiv>);
      <FlexDiv>{activityMonthly}</FlexDiv>);
    </>
  );
});
