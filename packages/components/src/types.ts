export enum AccountType {
  Borrower = 1,
  Lender,
}

export interface times {
  loanTerm: string;
  auctionTimeLeft: string;
  loanTermLeft: string;
}
