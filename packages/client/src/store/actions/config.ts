import { Store } from '../store.types';

export default (dispatch: any, state: Store) => {
  return {
    showMenu: visibility => {
      return dispatch({ type: 'SHOW_MENU', data: visibility });
    },
    updateNetwork: (network, networkId) => {
      return dispatch({ type: 'UPDATE_NETWORK', data: { network, networkId } });
    }
  };
};
