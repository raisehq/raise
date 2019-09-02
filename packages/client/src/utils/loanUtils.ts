import { LoanState } from '../commons/loanStatus';
import cloneDeep from 'lodash/cloneDeep';

const stringUnixToDate = stringUnix => new Date(Number(stringUnix) * 1000);

export const isAuctionExpired = ({ auctionEndTimestamp }) =>
  new Date() > stringUnixToDate(auctionEndTimestamp);

export const isDefaulted = ({ auctionEndTimestamp, termEndTimestamp }) => {
  if (
    new Date() <= stringUnixToDate(auctionEndTimestamp) ||
    new Date() <= stringUnixToDate(termEndTimestamp)
  ) {
    return false;
  }
  return true;
};

// this function mimics "updateStateMachine" method from LoanContract.sol:391
export const assumeStateMachine = auction => {
  const { state: currentState, minimumReached } = auction;
  const clonedAuction = cloneDeep(auction);
  if (isAuctionExpired(auction) && currentState === LoanState.CREATED) {
    if (!minimumReached) {
      clonedAuction.state = LoanState.FAILED_TO_FUND;
    } else {
      clonedAuction.state = LoanState.ACTIVE;
    }
  }
  if (isDefaulted(auction) && clonedAuction.state === LoanState.ACTIVE) {
    clonedAuction.state = LoanState.DEFAULTED;
  }

  return clonedAuction;
};

export const updateLoanState = loan => {
  // update timer
  // update apr
  // update progress bar
};
