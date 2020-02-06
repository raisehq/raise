import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LogRocket from 'logrocket';
import useGoogleTagManager from './hooks/useGoogleTagManager';
import App from './components/App';
import RootContext from './context';
import connector from './store/actions';
import reducers from './store/reducers';
import FollowTx from './helpers/followTx';
import initialState from './store/initialState';
import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';

type PropsValueType = {
  store: any;
  actions: any;
  isLogged: boolean;
  followTx: any;
};

declare global {
  interface Window {
    fbq: any;
  }
}

window.fbq = window.fbq || null;

const Root = () => {
  const [store, dispatch]: any = useReducer<any, any>(reducers, initialState, () => initialState);
  const [followTx, setFollowTx] = useState();
  const tagManager = useGoogleTagManager();
  process.env.REACT_APP_LOGROCKET === 'true' && LogRocket.init('rjsyho/raisehq');

  tagManager.initialize();
  useEffect(() => {
    if (!followTx) {
      setFollowTx(
        new FollowTx(
          `wss://${store.config.network}.infura.io/ws/v3/${process.env.REACT_APP_INFURA}`
        )
      );
    }
  }, []);

  const actions: any = connector(dispatch, store);
  const values: PropsValueType = { store, actions, isLogged: false, followTx };

  return (
    <RootContext.Provider value={values}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootContext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
