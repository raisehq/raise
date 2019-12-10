export enum AccountType {
  Borrower = 1,
  Lender,
}

export interface times {
  loanTerm: string;
  auctionTimeLeft: string;
  loanTermLeft: string;
}

export interface Company {
  companyName: string;
  description: string;
  shortDescription: string;
  background: string;
  logo: string;
  slug: string;
}
