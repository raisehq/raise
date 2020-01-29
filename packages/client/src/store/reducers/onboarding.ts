export default (state: any, action: any) => {
  switch (action.type) {
    case 'ONBOARDING_SHOW':
      return {
        ...state,
        ...action.data
      };
    case 'ONBOARDING_HIDDEN':
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
