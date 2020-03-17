import React, { createContext, useContext, useReducer } from 'react';
import connector from '../store/actions';
import reducers from '../store/reducers';
import FollowTx from '../helpers/followTx';
import initialState from '../store/initialState';

export const RootContext = createContext({});

type PropsValueType = {
  store: any;
  actions: any;
  isLogged: boolean;
  followTx: any;
};

export function useRootContext() {
  return useContext(RootContext);
}

export function Updater() {
  // Pending to move Root context updaters here from AppContext
  return null;
}

export default function Provider({ children }) {
  const [store, dispatch]: any = useReducer<any, any>(reducers, initialState, () => initialState);

  const followTx = new FollowTx(
    `wss://${store.config.network}.infura.io/ws/v3/${process.env.REACT_APP_INFURA}`
  );
  const actions: any = connector(dispatch, store);
  const values: PropsValueType = { store, actions, isLogged: false, followTx };

  return <RootContext.Provider value={values}>{children}</RootContext.Provider>;
}
