const getUnixTimestamp = () => {
  return Date.now() / 1000;
};
/*
  0: 'CREATED', // accepts bids until timelimit initial state
  1: 'EXPIRED', // not fully funded in timelimit
  2: 'ACTIVE', // fully funded, inside timelimit
  3: 'DEFAULTED', // not repaid in time loanRepaymentLength
  4: 'REPAID', // the borrower repaid in full, lenders have yet to reclaim funds
  5: 'CLOSED', // from failed_to_fund => last lender to withdraw triggers change / from repaid => fully witdrawn by lenders
  6: 'FROZEN' // when admin unlocks withdrawals
*/
export const createCard = type => {
  switch (type) {
    case 'CREATED':
      return {
        auctionEndTimestamp: getUnixTimestamp() + 2000,
        auctionEnded: false,
        auctionLength: '3000',
        auctionStartTimestamp: getUnixTimestamp(),
        borrowerDebt: '0',
        id: '0xf98f42a68a7fec388b93189889774a' + getUnixTimestamp(),
        interestRate: null,
        investorCount: 0,
        loanRepaid: false,
        maxAmount: '50000000000000000000',
        maxInterestRate: '50000000000000000000',
        minimumReached: false,
        netBalance: null,
        operatorBalance: '0',
        operatorFee: '1000000000000000000',
        principal: '0',
        state: 0,
        termEndTimestamp: '0',
        termLength: '300'
      };
  }
  return;
};
