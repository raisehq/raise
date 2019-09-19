export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_BALANCE':
      return {
        ...state,
        balance: action.data
      };
    default:
      return state;
  }
};
