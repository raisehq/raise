import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Card from '../Card';
import { Separator as RawSeparator } from '../Card/Card.styles';
import { Amount } from '../Amount';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { LoanLenderView, RepaymentType } from '../../commons/graphTypes';
import { getCalculations } from '../../utils/loanUtils';
import { CoinsType } from '../../commons/coins';
import { FlexBetween } from '../FlexBetween';
import { calculateInstalments } from '../../utils/progressiveCalcs';

const Separator = styled(RawSeparator)`
  margin-bottom: 12px;
`;

const LoanActivity = ({
  borrower,
  auction,
  coin,
  children,
}: {
  borrower: any;
  auction: Partial<LoanLenderView>;
  coin: CoinsType;
  children?: any;
}) => {
  const calcs = getCalculations(auction, coin?.decimals);
  const { companyName, route } = borrower;
  const { roi, times, maxAmount, lenderRoiAmount, lenderAmount } = calcs;
  const state = auction.state || 0;
  const repayment = auction?.repayment || 0;
  const {
    nextInstalment,
    lenderBalance,
    lenderInstalment,
  } = calculateInstalments(auction, coin?.decimals, dayjs().unix());
  return (
    <Card width="372px">
      <Card.Content size="100%">
        <Card.Grid>
          <a href={route}>
            <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          </a>
          <Card.Badge color={loanStatusColors[state]}>
            {loanStatus[state]}
          </Card.Badge>
        </Card.Grid>
        <Card.Grid spaceBetween notop nobottom>
          <Card.Header
            title="Available for withdraw"
            amount={<Amount principal={lenderBalance} coinIcon={coin?.icon} />}
          />
          <Card.Header
            right
            title={`Next repayment: ${nextInstalment}`}
            amount={
              <Amount principal={lenderInstalment} coinIcon={coin?.icon} />
            }
          />
        </Card.Grid>
        <Separator />
        <FlexBetween
          label="Investment return"
          value={`${lenderRoiAmount} ${coin?.text}`}
        />
        <FlexBetween label="ROI" value={roi} />
        <FlexBetween
          label="Amount invested"
          value={`${lenderAmount} ${coin?.text}`}
        />
        <FlexBetween label="Loan amount" value={`${maxAmount} ${coin?.text}`} />
        <FlexBetween label="Investors" value={auction.investorCount || ''} />
        <FlexBetween label="Loan Term" value={times.loanTerm} />
        <FlexBetween label="Repayment" value={RepaymentType[repayment]} />
        <>{children}</>
      </Card.Content>
    </Card>
  );
};

export default LoanActivity;
