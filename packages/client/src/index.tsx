import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { RootContext } from './context';
import connector from './store/actions';
import reducers from './store/reducers';
import initialState from './store/initialState';
import LogRocket from 'logrocket';

import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './global.css';

type PropsValueType = {
  store: any;
  actions: any;
  isLogged: Boolean;
};

const Root = () => {
  const [store, dispatch]: any = useReducer<any, any>(reducers, initialState, () => initialState);

  process.env.REACT_APP_LOGROCKET === 'true' && LogRocket.init('rjsyho/raisehq');

  const actions: any = connector(dispatch, store);
  const values: PropsValueType = { store, actions, isLogged: false };

  return (
    <RootContext.Provider value={values}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootContext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
