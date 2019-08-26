export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LIVE_AUCTIONS':
      return {
        ...state,
        auctions: action.data
      };

    case 'SET_SUGGESTED_AUCTIONS':
      return {
        ...state,
        suggested: action.data
      };
    default:
      return state;
  }
};
