import { createContext } from 'react';

const AppContext = createContext({
  store: {},
  actions: {},
  history: {},
  modalRefs: {},
  webSocket: {},
  daiWebSocket: {},
  match: {},
  onSetGetStarted: {},
  getStarted: false,
  web3Status: {},
  followTx: {}
});

export default AppContext;
