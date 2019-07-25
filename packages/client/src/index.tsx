import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { RootContext } from './context';
import connector from './store/actions';
import reducers from './store/reducers';
import initialState from './store/initialState';

import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './global.css';

type PropsValueType = {
  store: any;
  actions: any;
  isLogged: Boolean;
};

const Root = () => {
  const [store, dispatch]: any = useReducer<any, any>(
    reducers,
    initialState,
    () => initialState
  );
  const actions: any = connector(dispatch, store);
  const values: PropsValueType = { store, actions, isLogged: false };
  return (
    <RootContext.Provider value={values}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RootContext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
