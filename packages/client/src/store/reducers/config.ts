export default (state: any, action: any) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return {
        ...state,
        menu: action.data
      };
    case 'UPDATE_NETWORK':
      return {
        ...state,
        network: action.data.network,
        networkId: action.data.networkId
      };
    default:
      return {
        ...state
      };
  }
};
