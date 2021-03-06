import React, { Fragment, useMemo } from 'react';
import { match, ANY } from 'pampy';
import { Card } from '@raisehq/components';
import { BorrowerLoanCard } from './BorrowerLoan.styles';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { getCalculations } from '../../utils/loanUtils';
import Amount from '../Dashboard/Dashboard.Amount';
import { ClaimLoan } from '../ClaimLoan';
import { RepayLoan } from '../RepayLoan';
import { GetInTouch } from '../GetInTouch';
import useGetCoin from '../../hooks/useGetCoin';

const Loan = ({ auction }: { auction: any }) => {
  const coin = useGetCoin(auction);
  const calcs = getCalculations(auction, coin.decimals);
  const { principal, finalAPR, borrowerDebt, times, systemFees, netBalance } = calcs;
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
  }, [auction]);

  const state = useMemo(() => {
    if (auction.loanRepaid) {
      return 5;
    }
    return auction.state;
  }, [auction]);

  const contentColor = state === 3 ? 'red' : null;

  return (
    <BorrowerLoanCard width="350px" size="325px">
      <Card.Content>
        <Card.Header title="Loan amount" amount={<Amount principal={principal} coin={coin} />} />
        <Fragment>
          <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
        </Fragment>
        <Card.Grid noGraph>
          <Card.Row title="System Fees" content={systemFees} />
          <Card.Row title="APR" content={finalAPR} />
          <Card.Row title="Net Loan Proceeds" content={`${netBalance || 0}`} />
        </Card.Grid>
        <Card.Separator />
        <Card.Grid notop>
          <Card.Row title="Repayment amount" content={borrowerDebt} />
          <Card.Row title="Investors" content={auction.investorCount} />
          <Card.Row title="Loan Term" contentColor={contentColor} content={times.loanTermLeft} />
        </Card.Grid>
        {cta}
      </Card.Content>
    </BorrowerLoanCard>
  );
};

export default Loan;
