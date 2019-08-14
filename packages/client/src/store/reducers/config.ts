export default (state: any, action: any) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return {
        ...state,
        menu: action.data
      };
    default:
      return {
        ...state
      }
  }
};
