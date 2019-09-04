import { assumeStateMachine } from '../../utils/loanUtils';

export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LIVE_AUCTIONS':
      return {
        ...state,
        auctions: action.data.map(assumeStateMachine)
      };
    case 'SET_LENDER_INVESTMENTS':
      return {
        ...state,
        lenderInvestments: action.data.map(assumeStateMachine)
      };
    case 'SET_SUGGESTED_AUCTIONS':
      return {
        ...state,
        suggested: action.data.map(assumeStateMachine)
      };
    case 'SET_BORROWER_LOANS':
      return {
        ...state,
        borrowerLoans: action.data.map(assumeStateMachine)
      };
    default:
      return state;
  }
};
