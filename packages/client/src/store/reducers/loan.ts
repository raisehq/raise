import cloneDeep from 'lodash/cloneDeep';
import { LoanState } from '../../commons/loanStatus';

const stringUnixToDate = stringUnix => new Date(Number(stringUnix) * 1000);

const isAuctionExpired = ({ auctionEndTimestamp }) =>
  new Date() > stringUnixToDate(auctionEndTimestamp);

const isDefaulted = ({ auctionEndTimestamp, termEndTimestamp }) => {
  if (new Date() <= stringUnixToDate(auctionEndTimestamp) || new Date() <= stringUnixToDate(termEndTimestamp)) {
    return false;
  }
  return true;
};

// this function mimics "updateStateMachine" method from LoanContract.sol:391
const assumeStateMachine = auction => {
  const { state: currentState, minimumReached } = auction;
  const clonedAuction = cloneDeep(auction);
  if (isAuctionExpired(auction) && currentState === LoanState.CREATED) {
    console.log(minimumReached)
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
}

export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LIVE_AUCTIONS':
      return {
        ...state,
        auctions: action.data.map(assumeStateMachine)
      };

    case 'SET_SUGGESTED_AUCTIONS':
      return {
        ...state,
        suggested: action.data.map(assumeStateMachine)
      };
    default:
      return state;
  }
};
