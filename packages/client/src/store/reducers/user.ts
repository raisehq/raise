export default (state: any, { type, data }: any) => {
  switch (type) {
    case 'SET_INITIAL_USER_DATA':
      return { ...state, details: { ...state.details, user: { ...data } } };
    case 'SET_ALL_ADDRESSES_BY_USER':
      return {
        ...state,
        details: { ...state.details, address: data }
      };
    case 'SET_CRYPTO_ADDRESS_BY_ACCOUNT':
      return {
        ...state,
        cryptoAddress: data
      };
    case 'SET_USER_DETAILS':
      return {
        ...state,
        details: { ...state.details, ...data }
      };
    case 'UPDATE_USER':
      return {
        ...state,
        updateUser: {
          message: data.success ? 'Success' : data.message,
          loading: data.loading
        },
        details: {
          ...state.details,
          ...data.details
        }
      };
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        updatePassword: {
          message: data.success ? 'Success' : data.message,
          loading: data.loading
        }
      };
    case 'SET_USER_LOADING':
      return {
        ...state,
        updateUser: {
          message: '',
          loading: data
        }
      };
    case 'SET_PASS_LOADING':
      return {
        ...state,
        updatePassword: {
          message: '',
          loading: data
        }
      };
    default:
      return state;
  }
};
