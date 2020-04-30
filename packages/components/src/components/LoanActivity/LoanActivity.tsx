import React from 'react';
import Card from '../Card';
import { Amount } from '../Amount';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { GraphLoan } from '../../commons/graphTypes';
import { getCalculations } from '../../utils/loanUtils';
import { CoinsType } from '../../commons/coins';

const LoanActivity = ({
  borrower,
  auction,
  coin,
  children,
}: {
  borrower: any;
  auction: Partial<GraphLoan>;
  coin: CoinsType;
  children?: any;
}) => {
  const calcs = getCalculations(auction, coin?.decimals);
  const { companyName, route } = borrower;
  const { roi, times, maxAmount, lenderRoiAmount, lenderAmount } = calcs;
  const state = auction.state || 0;
  const loanTermLeft = state === 5 ? '-' : times.loanTermLeft;

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
        <Card.Grid spaceBetween notop>
          <Card.Header
            title="Investment return"
            amount={
              <Amount principal={lenderRoiAmount} coinIcon={coin?.icon} />
            }
          />
          <Card.RoiHeader roi={roi} />
        </Card.Grid>
        <Card.Separator />
        <Card.Grid>
          <Card.Row notop title="Amount invested" content={lenderAmount} />
          <Card.Row notop title="Loan amount" content={maxAmount} />
        </Card.Grid>
        <Card.Grid>
          <Card.Row notop title="Time left" content={loanTermLeft || '-'} />
          <Card.Row notop title="Loan Term" content={times.loanTerm} />
          <Card.Row notop title="Investors" content={auction.investorCount} />
        </Card.Grid>
        <>{children}</>
      </Card.Content>
    </Card>
  );
};

export default LoanActivity;
