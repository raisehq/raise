import React, { useMemo, lazy, Suspense } from 'react';
import { match, ANY } from 'pampy';
import { Link } from 'react-router-dom';
import { Card } from '@raisehq/components';
import Amount from '../Dashboard/Dashboard.Amount';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { GetInTouch } from '../GetInTouch';
import useGetCoin from '../../hooks/useGetCoin';

const ClaimRepay = lazy(() => import('../ClaimRepay'));
const ClaimRefund = lazy(() => import('../ClaimRefundInvestor/ClaimRefund.Button'));

const LenderExpired = ({ auction, calcs }: { auction: any; calcs: any }) => {
  const { companyName, route } = useBorrowerInfo(auction.originator);
  const { maxAmount, times, currentAmount, totalAmount, principal, lenderAmount } = calcs;
  const coin = useGetCoin(auction);

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
    <Card width="372px">
      <Card.Content size="100%">
        <Card.Grid>
          <Link to={route}>
            <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          </Link>
          <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
        </Card.Grid>
        <Card.Grid notop>
          <Card.Header
            title="Amount invested"
            amount={<Amount principal={lenderAmount} coin={coin} />}
          />
        </Card.Grid>
        <Card.Separator />
        <Card.Grid spaceBetween>
          <Card.SubHeader
            title="Raised so far"
            amount={<Amount principal={principal} coin={coin} />}
          />
          <Card.SubHeader title="Target" amount={<Amount principal={maxAmount} coin={coin} />} />
        </Card.Grid>
        <Card.Progress color="#5A5A5A" currentAmount={currentAmount} totalAmount={totalAmount} />
        <Card.Grid>
          <Card.Row notop title="Loan Term" content={times.loanTerm} />
          <Card.Vertical />
          <Card.Row notop title="Investors" content={auction.investorCount} />
        </Card.Grid>
        <Suspense fallback={<div>...</div>}>{cta}</Suspense>
      </Card.Content>
    </Card>
  );
};

export default LenderExpired;
