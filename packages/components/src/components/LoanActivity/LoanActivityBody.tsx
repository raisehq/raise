import React from 'react';
import styled from 'styled-components';
import { Popup, Icon as SemanticIcon } from 'semantic-ui-react';
import Card from '../Card';
import { Separator as RawSeparator } from '../Card/Card.styles';
import { Amount } from '../Amount';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { LoanLenderView, RepaymentType } from '../../commons/graphTypes';
import { RepayInfo } from '../../utils/progressiveCalcs';
import { getCalculations } from '../../utils/loanUtils';
import { CoinsType } from '../../commons/coins';
import { FlexBetween } from '../FlexBetween';

const Icon = styled(SemanticIcon)`
  &&& {
    display: block;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Separator = styled(RawSeparator)`
  margin-bottom: 12px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export interface LoanActivityProps {
  onOpen: () => void;
  borrower: any;
  auction: Partial<LoanLenderView>;
  coin: CoinsType;
  children?: any;
  style?: React.CSSProperties;
  repayInfo: RepayInfo;
}

const LoanActivityBody = ({
  borrower,
  auction,
  coin,
  onOpen,
  repayInfo,
}: LoanActivityProps) => {
  const calcs = getCalculations(auction, coin?.decimals);
  const { companyName, route } = borrower;
  const { roi, times, maxAmount, lenderRoiAmount, lenderAmount } = calcs;
  const state = auction.state || 0;
  const repayment = auction?.repayment || 0;
  const {
    lenderBalance,
    nextInstalment,
    currentDebtView,
    notPaidInTime,
  } = repayInfo;
  const inTime = notPaidInTime ? 'delete' : 'success';

  return (
    <>
      <Card.Grid notop spaceBetween>
        <a href={route}>
          <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
        </a>
        <FlexDiv>
          <Popup
            content="Open repayment calendar"
            trigger={
              <Icon color="red" name={`${inTime} calendar`} onClick={onOpen} />
            }
          />
          <Card.Badge noAbsolute color={loanStatusColors[state]}>
            {loanStatus[state]}
          </Card.Badge>
        </FlexDiv>
      </Card.Grid>
      <Card.Grid spaceBetween notop nobottom>
        <Card.Header
          title="Available for withdraw"
          amount={<Amount principal={lenderBalance} coinIcon={coin?.icon} />}
        />
        <Card.Header
          right
          title={`Next repayment: ${nextInstalment}`}
          amount={<Amount principal={currentDebtView} coinIcon={coin?.icon} />}
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
    </>
  );
};

export default LoanActivityBody;
