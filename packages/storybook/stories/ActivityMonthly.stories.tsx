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

const loanFactory = ({
  state,
  repayment,
  principal,
  instalments,
  instalmentsPaid,
  lenderInstalment,
  monthOffset,
}): Partial<LoanLenderView> => {
  const interestRate = '1000000000000000000';
  const lenderAmount = principal;
  const termLength = (instalments * oneMonth).toString();
  const instalmentAmount = toDecimal(
    calculateInvestmentReturn({ lenderAmount, interestRate, termLength }, 18) /
      instalments,
    18
  );
  const lenderBalance =
    Number(instalmentAmount) * instalmentsPaid -
    Number(instalmentAmount) * lenderInstalment;
  const auctionEndTimestampN = dayjs()
    .subtract(oneMonth * monthOffset, 'second')
    .subtract(1, 'second')
    .unix();
  const auctionStartTimestampN = dayjs()
    .subtract(oneMonth * 4, 'second')
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
    maxAmount: principal,
    maxInterestRate: '1666666666666666700',
    minInterestRate: '833333333333333400',
    minimumReached: true,
    netBalance: '9800000000',
    operatorBalance: '200000000',
    operatorFee: '2000000000000000000',
    originator: '0xed9b65514409014aa06ebf4199aaba71af8faea3',
    principal,
    termEndTimestamp,
    termLength,
    tokenAddress: '0x330b8eafab0c140432be7737f37c14a9cf8fe00a',
    state,
    repayment,
    instalments,
    instalmentsPaid,
    lenderBalance,
    instalmentAmount,
    lenderAmount,
    interestRate,
    lenderInstalment,
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

const monthlyMap = [
  {
    state: 2,
    label: 'Active',
    repayment: 1,
    instalments: 12,
    instalmentsPaid: 3,
    monthOffset: 3,
    lenderInstalment: 1,
    principal: '1000000000000000000000',
  },
  {
    state: 2,
    label: 'Active but missing payments',
    repayment: 1,
    instalments: 12,
    instalmentsPaid: 3,
    monthOffset: 6,
    lenderInstalment: 3,
    principal: '1000000000000000000000',
  },
  {
    state: 4,
    label: 'Repaid',
    repayment: 1,
    instalments: 12,
    instalmentsPaid: 12,
    monthOffset: 13,
    lenderInstalment: 8,
    principal: '1000000000000000000000',
  },
  {
    state: 5,
    label: 'Closed',
    repayment: 1,
    instalments: 12,
    instalmentsPaid: 12,
    monthOffset: 13,
    lenderInstalment: 12,
    principal: '1000000000000000000000',
  },
  {
    state: 3,
    label: 'Defaulted',
    repayment: 1,
    instalments: 12,
    instalmentsPaid: 4,
    monthOffset: 13,
    lenderInstalment: 4,
    principal: '1000000000000000000000',
  },
  {
    state: 1,
    label: 'Expired',
    repayment: 1,
    instalments: 12,
    instalmentsPaid: 0,
    monthOffset: 0,
    lenderInstalment: 0,
    principal: '1000000000000000000000',
  },
  {
    state: 6,
    label: 'Frozen',
    repayment: 1,
    instalments: 12,
    instalmentsPaid: 0,
    monthOffset: 0,
    lenderInstalment: 0,
    principal: '1000000000000000000000',
  },
];

const activityMapper = loanMock => (
  <div style={{ padding: 10 }}>
    <h4>{loanMock.label}</h4>
    <LoanActivity
      auction={loanFactory(loanMock)}
      borrower={company}
      coin={daiCoin}
      key={loanMock.state}
    />
  </div>
);

storiesOf('Activity - Monthly', module).add('Monthly', () => {
  const activityMonthly = monthlyMap.map(activityMapper);
  return (
    <>
      <FlexDiv>{activityMonthly}</FlexDiv>);
    </>
  );
});
