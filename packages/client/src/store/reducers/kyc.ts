export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_KYC_TOKEN':
      return {
        ...state,
        token: action.data
      };

    default:
      return state;
  }
};
