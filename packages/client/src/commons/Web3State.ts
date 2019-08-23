export interface Web3State {
  hasProvider: boolean;
  isMetamask: boolean;
  unlocked: boolean;
  account: string;
  accountMatches: boolean;
  network: string;
  networkMatches: boolean;
  targetNetwork: string;
  hasDeposit: boolean;
}
