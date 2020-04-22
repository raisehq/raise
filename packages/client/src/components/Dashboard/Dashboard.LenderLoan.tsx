import React, { useMemo } from 'react';
import { match, ANY } from 'pampy';
import { getCalculations } from '../../utils/loanUtils';
import LenderACU from '../Cards/LenderACU';
import LenderExpired from '../Cards/LenderExpired';
import useGetCoin from '../../hooks/useGetCoin';

const Loan = ({ auction }: { auction: any }) => {
  const coin = useGetCoin(auction);
  const calcs = getCalculations(auction, coin.decimals);

  // const { maxAmount, times, roi, lenderAmount, lenderRoiAmount } = calcs;
  const card = useMemo(() => {
    const conditions = [auction.state, auction.withdrawn];

    return match(
      conditions,
      [1, false],
      () => <LenderExpired auction={auction} calcs={calcs} />,
      [2, false],
      () => <LenderACU auction={auction} calcs={calcs} />,
      [3, ANY],
      () => <LenderACU auction={auction} calcs={calcs} />,
      [4, false],
      () => <LenderACU auction={auction} calcs={calcs} />,
      [5, ANY],
      () => <LenderACU auction={auction} calcs={calcs} />,
      [6, false],
      () => <LenderACU auction={auction} calcs={calcs} />,
      ANY,
      () => null
    );
  }, [auction]);

  return card;
};

export default Loan;
