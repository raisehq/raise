export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_ACCEPTED_TOKENS':
      return {
        ...state,
        acceptedTokens: action.data
      };
    default:
      return state;
  }
};
