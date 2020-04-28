export enum AccountType {
  Borrower = 1,
  Lender,
}

export interface Times {
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

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace,no-redeclare
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(): R;
    }
  }
}
