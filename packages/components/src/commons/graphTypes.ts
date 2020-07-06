export enum RepaymentType {
  Bullet,
  Monthly
}

export enum RepaymentState {
  Waiting,
  Unpaid,
  Paid,
  Withdrawed
}

export interface GraphReferral {
  id: string;
  referrer: GraphUser;
  referred: GraphUser;
}

export interface GraphFunding {
  id: string;
  loan: GraphLoan;
  amount: string;
  withdrawn: boolean;
  amountWithdrawn: string;
  createdBlockNumber: string;
  createdTimestamp: string;
  updatedBlockNumber: string;
  updatedTimestamp: string;
  instalmentsWithdrawed?: string;
  penaltiesWithdrawed?: string;
}

export interface GraphUser {
  id: string;
  address: string;
  deposited: boolean;
  kyced: boolean;
  loanFundings: GraphFunding[];
  loanRequests: GraphLoan[];
  referrals: GraphReferral[];
  totalBountyWithdrawn: string;
  totalBountyToWithdraw: string;
  totalReferralsCount: number;
  withdrawalUnlocked: boolean;
  depositBlockNumber: string;
  depositTimestamp: string;
  addKycBlockNumber: string;
  addKycTimestamp: string;
  createdBlockNumber: string;
  createdTimestamp: string;
}

export interface GraphLoan {
  id: string;
  investors: GraphUser[];
  investorCount: number;
  address: string;
  dispatcherId: string;
  originator: string;
  minAmount: string;
  maxAmount: string;
  minInterestRate: string;
  maxInterestRate: string;
  state: number;
  borrowerDebt: string;
  loanFundsUnlocked: boolean;
  operatorFee: string;
  auctionStartTimestamp: string;
  auctionEndTimestamp: string;
  auctionLength: string;
  termEndTimestamp: string;
  termLength: string;
  lastFundedTimestamp: string;
  auctionLastFundedTimestamp: string;
  principal: string;
  minimumReached: boolean;
  auctionFullyFunded: boolean;
  auctionEnded: boolean;
  auctionFailed: boolean;
  interestRate: string;
  netBalance: string;
  operatorBalance: string;
  operatorFeeWithdrawn: boolean;
  operatorFeeAmount: string;
  loanWithdrawn: boolean;
  loanRepaid: boolean;
  loanRepaidTimestamp: string;
  loanWithdrawnAmount: string;
  refundsWithdrawnAmount: string;
  loanFullyRefunded: boolean;
  refundStarted: boolean;
  createdBlockNumber: string;
  createdTimestamp: string;
  tokenAddress: string;
  repayment: RepaymentType;
  instalments: number;
  instalmentsPaid: number;
}

export interface LoanDispatcher {
  id: string;
  address: string;
  loans: GraphLoan[];
  loansCount: number;
  minAmount: string;
  maxAmount: string;
  minInterestRate: string;
  maxInterestRate: string;
  operatorFee: string;
  minTermLength: string;
  minAuctionLength: string;
  acceptedTokens: string[];
  auth: string;
  DAIProxyAddress: string;
  swapFactory: string;
}
