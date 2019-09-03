import React, { Fragment, useMemo } from 'react';
import { Card } from '@raisehq/components';
import { match, ANY } from 'pampy';
import { fromWei } from 'web3-utils';
import numeral from '../../commons/numeral';
import useCalculations from './Dashboard.useCalc';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import Amount from './Dashboard.Amount';
import { ClaimRefund } from '../ClaimRefund';

const Auction = ({ auction }: { auction: any }) => {
  const calcs = useCalculations(auction);
  const {
    maxAmount,
    times,
    principal,
    numbers
  } = calcs;

  const lenderAmount = numeral(fromWei(auction.lenderAmount)).format();

  const cta = useMemo(() => {
    const conditions = [auction.state, auction.withdrawn];
    return match(conditions,
      [1, false, ], () => <ClaimRefund loan={auction} />,
      ANY, () => null,
    )
  }, [auction.state, auction.withdrawn]);

  const { state } = auction;
  return (
    <Card>
      <Card.Header title="Amount invested" amount={<Amount principal={lenderAmount} />} />
      <Card.Graph
        color="#00DA9E"
        currentAmount={numbers.principal}
        totalAmount={numbers.maxAmount}
      />
      <Fragment>
        <Card.Tooltip />
        <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
      </Fragment>
      <Card.Grid>
        <Card.Row title="Raised Amount" content={principal} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Days Left" content={times.auctionTimeLeft} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid nobottom>
        <Card.Row title="Borrower" content="Company A" />
        <Card.Row title="Target Amount" content={`${maxAmount} DAI`} />
        <Card.Row title="Loan Term" content={`${times.loanTerm} `} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Auction;
