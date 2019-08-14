import { Store } from '../store.types';

export default (dispatch: any, state: Store) => {
  return {
    showMenu: (visibility) => {
      return dispatch({ type: 'SHOW_MENU', data: visibility });
    }
  }
};
