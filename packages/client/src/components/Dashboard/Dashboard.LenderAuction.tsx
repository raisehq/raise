import React, { Fragment, useMemo } from 'react';
import { Card } from '@raisehq/components';
import { match, ANY } from 'pampy';
import { fromWei } from 'web3-utils';
import numeral from '../../commons/numeral';
import { getCalculations } from '../../utils/loanUtils';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import Amount from './Dashboard.Amount';
import { InvestModal } from '../InvestModal';
import { ClaimRefund } from '../ClaimRefundInvestor';
import { ExpectedROI } from './Dashboard.styles';

const Auction = ({ auction }: { auction: any }) => {
  const calcs = getCalculations(auction);
  const { maxAmount, expectedROI, times, principal, currentAmount, totalAmount } = calcs;

  const lenderAmount = numeral(fromWei(auction.lenderAmount)).format();
  const graphColor = auction.state > 0 ? '#5A5A5A' : '#eb3f93';
  const cta = useMemo(() => {
    const conditions = [auction.state, auction.withdrawn];
    return match(
      conditions,
      [0, ANY],
      () => <InvestModal loan={auction} />,
      [1, false],
      () => <ClaimRefund loan={auction} />,
      ANY,
      () => null
    );
  }, [auction.state, auction.withdrawn]);

  const { state } = auction;
  return (
    <Card>
      <Card.Grid spaceBetween>
        <Card.Header title="Amount invested" amount={<Amount principal={lenderAmount} />} />
        <ExpectedROI title="Expected ROI" amount={numeral(expectedROI).format('0.00%')} />
      </Card.Grid>
      {state > 0 && (
        <Fragment>
          <Card.Tooltip />
          <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
        </Fragment>
      )}
      <Card.Graph color={graphColor} currentAmount={currentAmount} totalAmount={totalAmount} />
      <Card.Grid>
        <Card.Row title="Raised Amount" content={principal} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Time left" content={times.auctionTimeLeft} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid nobottom>
        <Card.Row title="Borrower" content="Company A" />
        <Card.Row title="Loan Term" content={`${times.loanTerm} `} />
        <Card.Row title="Target Amount" content={`${maxAmount} DAI`} />
      </Card.Grid>
      {cta}
    </Card>
  );
};

export default Auction;
