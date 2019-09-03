import React, { Fragment, useMemo } from 'react';
import { match, ANY } from 'pampy';
import { Card } from '@raisehq/components';
import { BorrowerLoanCard } from './BorrowerLoan.styles';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';
import { ClaimLoan } from '../ClaimLoan';
import { RepayLoan } from '../RepayLoan';
import { GetInTouch } from '../GetInTouch';

const Loan = ({ auction }: { auction: any }) => {
  const calcs = getCalculations(auction);
  const { principal, interest, borrowerDebt, times, systemFees, netBalance } = calcs;

  const cta = useMemo(() => {
    const conditions = [auction.state, auction.loanWithdrawn, auction.loanRepaid];
    return match(
      conditions,
      [2, false, ANY],
      () => <ClaimLoan loan={auction} />,
      [2, true, false],
      () => <RepayLoan loan={auction} />,
      [3, ANY, ANY],
      () => <GetInTouch />,
      ANY,
      () => null
    );
  }, [auction.state, auction.loanWithdrawn, auction.loanRepaid]);

  const state = useMemo(() => {
    if (auction.loanRepaid) {
      return 5;
    }
    return auction.state;
  }, [auction.state, auction.loanRepaid]);

  const contentColor = state == 3 ? 'red' : null;

  return (
    <BorrowerLoanCard>
      <Card.Header title="Loan amount" amount={<Amount principal={principal} />} />
      <Fragment>
        <Card.Tooltip />
        <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
      </Fragment>
      <Card.Grid noGraph>
        <Card.Row title="System Fees" content={systemFees} />
        <Card.Row title="APR" content={interest} />
        <Card.Row title="Net Loan Proceeds" content={`${netBalance || 0} DAI`} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid>
        <Card.Row title="Repayment amount" content={borrowerDebt} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Loan Term" contentColor={contentColor} content={times.loanTermLeft} />
      </Card.Grid>
      {cta}
    </BorrowerLoanCard>
  );
};

export default Loan;
