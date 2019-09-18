import React, { useMemo } from 'react';
import { match, ANY } from 'pampy';
// import { Card } from '@raisehq/components';
// import { BorrowerLoanCard } from './BorrowerLoan.styles';
// import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import { getCalculations } from '../../utils/loanUtils';
// import Amount from './Dashboard.Amount';
// import { ClaimRepay } from '../ClaimRepay';
// import { GetInTouch } from '../GetInTouch';
// import { ClaimRefund } from '../ClaimRefundInvestor';
import LenderACU from '../Cards/LenderACU';

const Loan = ({ auction }: { auction: any }) => {
  const calcs = getCalculations(auction);
  // const { maxAmount, times, roi, lenderAmount, lenderRoiAmount } = calcs;
  const card = useMemo(() => {
    const conditions = [auction.state, auction.withdrawn];

    return match(
      conditions,
      [4, false],
      () => <LenderACU auction={auction} calcs={calcs} />,
      [3, ANY],
      () => <LenderACU auction={auction} calcs={calcs} />,
      [1, false],
      () => <LenderACU auction={auction} calcs={calcs} />,
      ANY,
      () => null
    );
  }, [auction.state, auction.withdrawn]);

  // const state = useMemo(() => {
  //   if (auction.loanRepaid) {
  //     return 5;
  //   }
  //   return auction.state;
  // }, [auction.state, auction.loanRepaid]);
  // const contentColor = state === 3 ? 'red' : null;

  return card;
};

export default Loan;
