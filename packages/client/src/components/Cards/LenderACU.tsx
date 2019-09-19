import React, { useMemo } from 'react';
import { match, ANY } from 'pampy';
import { Link } from 'react-router-dom';
import { Card } from '@raisehq/components';
import Amount from '../Dashboard/Dashboard.Amount';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { ClaimRepay } from '../ClaimRepay';
import { ClaimRefund } from '../ClaimRefundInvestor';
import { GetInTouch } from '../GetInTouch';


const LenderACU = ({ auction, calcs }: { auction: any; calcs: any }) => {
  const { companyName, slug } = useBorrowerInfo(auction.originator);
  const { expectedRoiFormated, times, maxAmount, lenderRoiAmount } = calcs;

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

  const contentColor = state === 3 ? 'red' : null;
  const loanTermLeft = state === 5 ? '-' : times.timeloanTermLeft;
  const borrowerUrl = `/borrowers/${slug}`

  return (
    <Card>
      <Card.SmallContent>
        <Card.Grid>
          <Link to={borrowerUrl}>
            <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          </Link>
          <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
        </Card.Grid>
        <Card.Grid spaceBetween>
          <Card.Header title="Investment return" amount={<Amount principal={lenderRoiAmount} />} />
          <Card.RoiHeader roi={expectedRoiFormated} />
        </Card.Grid>
        <Card.Separator />
        <Card.Grid>
          <Card.Row title="Amount invested" content={times.loanTerm} />
          <Card.Row title="Loan amount" content={maxAmount} />
        </Card.Grid>
        <Card.Grid>
          <Card.Row title="Days left" content={loanTermLeft} contentColor={contentColor} />
          <Card.Row title="LoanTerm" content={times.loanTerm} />
          <Card.Row title="Investors" content={auction.investorCount} />
        </Card.Grid>
        {cta}
      </Card.SmallContent>
    </Card>
  );
};

export default LenderACU;
