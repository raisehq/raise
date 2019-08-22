import React from 'react';
import { InvestModal } from '../InvestModal';

const Marketplace = () => {
  const loan = {
    id: '0x5b981d623f5a5d99fe32bde7e727646eeea411c5',
    principal: '0',
    maxAmount: '10000000000000000000000',
    operatorFee: '1000000000000000000',
    termEndTimestamp: '1574418420088',
    netBalance: null,
    auctionEnded: false,
    auctionEndBlock: '13595305',
    interestRate: '5',
    borrowerDebt: '0',
    investorCount: 1
  };
  return (
    <div>
      HOLA FROM Marketplace
      <InvestModal loan={loan} />
    </div>
  );
};

export default Marketplace;
