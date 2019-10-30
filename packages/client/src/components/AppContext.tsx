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
  getStarted: false
});

export default AppContext;
