import React from 'react';

export const generateInfo = ({
  totalAmount,
  coin,
  currentAPR,
  times: { loanTerm, auctionTimeLeft },
  currentAmount,
  loan: { investorCount }
}) => {
  return [
    {
      title: 'Target amount',
      content: (
        <>
          {totalAmount}
          {coin?.text || 'DAI'}
        </>
      )
    },
    { title: 'Loan APR', content: currentAPR },
    { title: 'Days left', content: auctionTimeLeft },
    { title: 'Raised so far', content: currentAmount },
    { title: 'Loan term', content: loanTerm },
    { title: 'Investors', content: investorCount }
  ];
};
