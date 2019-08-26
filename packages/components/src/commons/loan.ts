export interface Loan {
  id: string;
  principal: string;
  maxAmount: string;
  operatorFee: string;
  termEndTimestamp: string;
  netBalance: string | null;
  auctionEnded: boolean;
  auctionEndBlock: string;
  interestRate: string;
  borrowerDebt: string;
  investorCount: number;
}