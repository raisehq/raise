import React, { useMemo } from 'react';
import { Card } from '@raisehq/components';
import { getCalculations } from '../../utils/loanUtils';
import Amount from '../Dashboard/Dashboard.Amount';
import { loanStatus, loanStatusColors } from '../../commons/loanStatus';
import useGetCoin from '../../hooks/useGetCoin';
import useGetCoinByAddress from '../../hooks/useGetCoinByAddress';

const Auction = ({ auction }: { auction: any }) => {
  const { decimals } = useGetCoinByAddress(auction.tokenAddress);
  const calcs = getCalculations(auction, decimals);
  const coin = useGetCoin(auction);
  const {
    principal,
    netBalance,
    maxAmount,
    times,
    systemFees,
    borrowerDebt,
    currentAmount,
    totalAmount,
    maxAPR,
    currentAPR
  } = calcs;

  const state = useMemo(() => {
    if (auction.loanRepaid) {
      return 5;
    }
    return auction.state;
  }, [auction.state, auction.loanRepaid]);

  return (
    <Card width="350px" size="315px">
      <Card.Content>
        {state >= 1 && <Card.Badge color={loanStatusColors[state]}>{loanStatus[state]}</Card.Badge>}
        <Card.Header title="Raised amount" amount={<Amount principal={principal} coin={coin} />} />
        <Card.Graph
          color={state === 1 ? '#7e8286' : '#00DA9E'}
          currentAmount={currentAmount}
          totalAmount={totalAmount}
        />
        <Card.Grid notop>
          <Card.Row title="Investors" content={auction.investorCount} />
          <Card.Row title="Current APR" content={currentAPR} />
          <Card.Row title="Time Left" content={times.auctionTimeLeft || '-'} />
        </Card.Grid>
        <Card.Separator />
        <Card.Grid nobottom notop>
          <Card.Row title="System Fees" content={`${systemFees} ${coin && coin.text}`} />
          <Card.Row title="Loan Term" content={`${times.loanTerm} `} />
          <Card.Row title="Net Loan Proceeds" content={`${netBalance} `} />
          <Card.Row title="Target Amount" content={`${maxAmount} `} />
          <Card.Row title="Max APR" content={maxAPR} />
          <Card.Row title="Total Repayment" content={`${borrowerDebt} `} />
        </Card.Grid>
      </Card.Content>
    </Card>
  );
};

export default Auction;
