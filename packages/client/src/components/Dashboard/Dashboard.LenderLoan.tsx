import React, { Fragment, useMemo } from 'react';
import { fromWei } from 'web3-utils';
import { match, ANY } from 'pampy';
import { Card } from '@raisehq/components';
import numeral from '../../commons/numeral';
import { BorrowerLoanCard } from './BorrowerLoan.styles';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { getCalculations } from '../../utils/loanUtils';
import Amount from './Dashboard.Amount';
import { ClaimRoi } from '../ClaimRoi';
import { GetInTouch } from '../GetInTouch';

const Loan = ({ auction }: { auction: any }) => {
  const calcs = getCalculations(auction);
  const { principal, times, roi } = calcs;
  const lenderAmount = numeral(fromWei(auction.lenderAmount)).format();
  const lenderRoiAmount = numeral(
    Number(fromWei(auction.lenderAmount)) +
      Number(fromWei(auction.lenderAmount)) * numeral(roi).value()
  ).format();

  const cta = useMemo(() => {
    const conditions = [auction.state, auction.withdrawn];

    return match(
      conditions,
      [4, false],
      () => <ClaimRoi loan={auction} />,
      [3, ANY],
      () => <GetInTouch />,
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

  return (
    <BorrowerLoanCard>
      <Card.Header
        title="Investment return"
        amount={<Amount principal={lenderRoiAmount} roi={roi} />}
      />
      <Fragment>
        <Card.Tooltip />
        <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>
      </Fragment>
      <Card.Grid noGraph>
        <Card.Row title="Amount invested" content={lenderAmount} />
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Time left" contentColor={contentColor} content={times.loanTermLeft} />
      </Card.Grid>
      <Card.Separator />
      <Card.Grid>
        <Card.Row title="Borrower" content="Company A" />
        <Card.Row title="Loan amount" content={principal} />
        <Card.Row title="Loan term" content={times.loanTerm} />
      </Card.Grid>
      {cta}
    </BorrowerLoanCard>
  );
};

export default Loan;
