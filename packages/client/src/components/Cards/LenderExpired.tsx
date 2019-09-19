import React, { useMemo } from 'react';
import { match, ANY } from 'pampy';
import { Card } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import numeral from '../../commons/numeral';
import Amount from '../Dashboard/Dashboard.Amount';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { ClaimRepay } from '../ClaimRepay';
import { ClaimRefund } from '../ClaimRefundInvestor';
import { GetInTouch } from '../GetInTouch';

const LenderExpired = ({ auction, calcs }: { auction: any; calcs: any }) => {
  const { companyName } = useBorrowerInfo(auction.originator);
  const { maxAmount, times, currentAmount, totalAmount, principal } = calcs;

  const lenderAmount = numeral(fromWei(auction.lenderAmount)).format();

  const cta = useMemo(() => {
    const conditions = [auction.state, auction.withdrawn];

    return match(
      conditions,
      [4, false],
      () => <ClaimRepay loan={auction} />,
      [3, ANY],
      () => <GetInTouch />,
      [1, false],
      () => <ClaimRefund loan={auction} />,
      ANY,
      () => null
    );
  }, [auction.state, auction.withdrawn]);

  const state = useMemo(() => {
    if (auction.loanRepaid) {
      return 5;
    }
    return auction.state;
  }, [auction.state, auction.loanRepaid]);

  return (
    <Card>
      <Card.SmallContent>
        <Card.Grid>
          <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
        </Card.Grid>
        <Card.Grid>
          <Card.Header title="Amount invested" amount={<Amount principal={lenderAmount} />} />
        </Card.Grid>
        <Card.Separator />
        <Card.Grid spaceBetween>
          <Card.SubHeader title="Raised so far" amount={<Amount principal={principal} />} />
          <Card.SubHeader title="Target" amount={<Amount principal={maxAmount} />} />
        </Card.Grid>
        <Card.Progress color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
        <Card.Grid>
          <Card.Row title="Loan Term" content={times.loanTerm} />
          <Card.Vertical />
          <Card.Row title="Investors" content={auction.investorCount} />
        </Card.Grid>
        {cta}
      </Card.SmallContent>
    </Card>
  );
};

export default LenderExpired;
