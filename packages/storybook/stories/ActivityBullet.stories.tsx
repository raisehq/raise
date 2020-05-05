import * as React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  LoanActivity,
  calculateInvestmentReturn,
  toDecimal,
} from '@raisehq/components';
import { LoanLenderView, Company } from '@raisehq/components/dist/types';

const FlexDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(372px, 1fr));
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas: '. . .' '. . .' '. . .';
  max-width: 900px;
`;
const oneMonth = 1 * 30 * 24 * 60 * 60;

const loanFactory = (state, repayment): Partial<LoanLenderView> => {
  const instalments = 1;
  const interestRate = '857276234567901300';
  const lenderAmount = '1000000000000000000000';
  const termLength = '7884000';
  //const instalmentLength = Number(termLength) / Number(instalments);
  const lenderInstalment = toDecimal(
    calculateInvestmentReturn({ lenderAmount, interestRate, termLength }, 18) /
      instalments,
    18
  );
  const lenderBalance = '0';
  const instalmentsPaid = 0;
  const auctionEndTimestampN = dayjs()
    .subtract(oneMonth * 1, 'second')
    .unix();
  const auctionStartTimestampN = dayjs()
    .subtract(oneMonth * 2, 'second')
    .unix();
  const termEndTimestamp = auctionEndTimestampN + oneMonth * instalments;
  const auctionEndTimestamp = auctionEndTimestampN.toString();
  const auctionStartTimestamp = auctionStartTimestampN.toString();
  return {
    auctionEndTimestamp,
    auctionEnded: true,
    auctionLength: '2592000',
    auctionStartTimestamp,
    borrowerDebt: '10085727623',
    id: '0x3cf2a17bbc4ee18207fcddc846eb993981391c75',
    investorCount: 1,
    loanRepaid: false,
    loanWithdrawn: true,
    maxAmount: '1000000000000000000000',
    maxInterestRate: '1666666666666666700',
    minInterestRate: '833333333333333400',
    minimumReached: true,
    netBalance: '9800000000',
    operatorBalance: '200000000',
    operatorFee: '2000000000000000000',
    originator: '0xed9b65514409014aa06ebf4199aaba71af8faea3',
    principal: '10000000000',
    termEndTimestamp,
    termLength,
    tokenAddress: '0x330b8eafab0c140432be7737f37c14a9cf8fe00a',
    state,
    repayment,
    instalments,
    instalmentsPaid,
    lenderBalance,
    lenderInstalment,
    lenderAmount,
    interestRate,
  };
};

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
  { state: 2, label: 'Active', repayment: 0 },
  { state: 4, label: 'Repaid', repayment: 0 },
  { state: 5, label: 'Closed', repayment: 0 },
  { state: 3, label: 'Defaulted', repayment: 0 },
  { state: 1, label: 'Expired', repayment: 0 },
  { state: 6, label: 'Frozen', repayment: 0 },
];

const activityMapper = ({ state, label, repayment }) => (
  <div style={{ padding: 10 }}>
    <h4>{label}</h4>
    <LoanActivity
      auction={loanFactory(state, repayment)}
      borrower={company}
      coin={daiCoin}
      key={state}
    />
  </div>
);

storiesOf('Activity -  Bullet', module).add('Bullet', () => {
  const activityBullet = bulletMap.map(activityMapper);

  return (
    <>
      <FlexDiv>{activityBullet}</FlexDiv>);
    </>
  );
});
