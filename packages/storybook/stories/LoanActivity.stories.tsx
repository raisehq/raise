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
  auctionEndTimestamp: '1590155968',
  auctionEnded: true,
  auctionLength: '2592000',
  auctionStartTimestamp: '1587563968',
  borrowerDebt: '10085727623',
  id: '0x3cf2a17bbc4ee18207fcddc846eb993981391c75',
  interestRate: '857276234567901300',
  investorCount: 1,
  loanRepaid: false,
  loanWithdrawn: true,
  maxAmount: '10000000000',
  maxInterestRate: '1666666666666666700',
  minInterestRate: '833333333333333400',
  minimumReached: true,
  netBalance: '9800000000',
  operatorBalance: '200000000',
  operatorFee: '2000000000000000000',
  originator: '0xed9b65514409014aa06ebf4199aaba71af8faea3',
  principal: '10000000000',
  termEndTimestamp: '1590230440',
  termLength: '2592000',
  tokenAddress: '0x330b8eafab0c140432be7737f37c14a9cf8fe00a',
  lenderAmount: '10000000000',
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
