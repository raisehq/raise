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
  web3State: {}
});

export default AppContext;
