type NumberMapString = {
  [key: number]: string;
};

export const loanStatus: NumberMapString = {
  0: 'CREATED', // accepts bids until timelimit initial state
  1: 'EXPIRED', // not fully funded in timelimit
  2: 'ACTIVE', // fully funded, inside timelimit
  3: 'DEFAULTED', // not repaid in time loanRepaymentLength
  4: 'REPAID', // the borrower repaid in full, lenders have yet to reclaim funds
  5: 'CLOSED', // from failed_to_fund => last lender to withdraw triggers change / from repaid => fully witdrawn by lenders
  6: 'FROZEN', // when admin unlocks withdrawals
};

export enum LoanState {
  CREATED, // accepts bids until timelimit initial state
  FAILED_TO_FUND, // not fully funded in timelimit
  ACTIVE, // fully funded, inside timelimit
  DEFAULTED, // not repaid in time loanRepaymentLength
  REPAID, // the borrower repaid in full, lenders have yet to reclaim funds
  CLOSED, // from failed_to_fund => last lender to withdraw triggers change
  // from repaid => fully witdrawn by lenders
  FROZEN, // when admin unlocks withdrawals
}

export const loanStatusColors: NumberMapString = {
  0: '#CC2029', // accepts bids until timelimit initial state
  1: '#5A5A5A', // not fully funded in timelimit
  2: '#3DC9FF', // fully funded, inside timelimit
  3: '#CC2029', // not repaid in time loanRepaymentLength
  4: '#3DC9FF', // the borrower repaid in full, lenders have yet to reclaim funds
  5: '#00DA9E', // from failed_to_fund => last lender to withdraw triggers change / from repaid => fully witdrawn by lenders
  6: '#CC2029', // when admin unlocks withdrawals
};
