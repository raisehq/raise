export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LIVE_AUCTIONS':
      return {
        ...state,
        auctions: action.data
      };

    default:
      return state;
  }
};
