import React, { useContext, useEffect, createContext, useState, useRef } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { match as matches, _ } from 'pampy';
import { Dimmer, Loader } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Web3Route } from './Web3Check';
import Layout from './Layout';
import LayoutV2 from './LayoutV2';
import { DashboardLender, DashboardBorrower } from './Dashboard';
import Referral from './Referral/index';
import CreateLoan from './CreateLoan';
import { RootContext } from '../context';
import Join from './Join';
import Kyc from '../components/Kyc';
import Deposit from '../components/Deposit';
import { Web3Check } from '../components/Web3Check';
import Test from './SuggestTest';
import { BorrowerProfile } from '../components/BorrowerProfile';
import useAsyncEffect from '../hooks/useAsyncEffect';
import useWeb3Checker from '../hooks/useWeb3Checker';
import useGoogleTagManager from '../hooks/useGoogleTagManager';
import UseWebSockets from '../hooks/useWebSockets';
import LogRocket from 'logrocket';
import { getGraphWSEndpoint, getDaiWSEndpoint } from '../utils';
import { TopMobileMenu } from './Menu';
import DesktopHeader from './DesktopHeader';

export const AppContext = createContext({
  store: {},
  actions: {},
  history: {},
  web3Status: {},
  modalRefs: {},
  webSocket: {},
  daiWebSocket: {},
  match: {}
});

const App = ({ children, history, match }: any) => {
  const refMode = process.env.REACT_APP_REFERAL === 'true';
  const [isLoading, setLoading] = useState(true);
  const {
    store,
    store: {
      auth: {
        login: { logged }
      },
      kyc: { token },
      user: {
        details: { id, accounttype_id, email, status },
        cryptoAddress: { address }
      }
    },
    actions,
    actions: {
      auth: { onVerifyAuth },
      user: { onGetCryptoAddressByUser, onGetUser },
      blockchain: { fetchReferrals },
      kyc: { onInitKyc }
    }
  }: any = useContext(RootContext);
  const modalRefs = useRef<HTMLDivElement>(null);
  const web3Status = useWeb3Checker();

  const {
    hasDeposit: deposited,
    accountMatches: accMatch,
    networkMatches: netOk,
    network
  } = web3Status;
  const web3Pass = netOk && accMatch;
  const [webSocket, setWebSocket] = useState({});
  const [daiWebSocket, setDaiWebSocket] = useState({});

  useEffect(() => {
    if (Object.keys(webSocket).length === 0 && network !== 'Not connected') {
      const webSocketInstance = new UseWebSockets(getGraphWSEndpoint(network), 'graphql-ws');
      setWebSocket({ webSocket: webSocketInstance });
    }
  }, [webSocket, network]);

  useEffect(() => {
    if (Object.keys(daiWebSocket).length === 0 && network !== 'Not connected') {
      const webSocketInstance = new UseWebSockets(getDaiWSEndpoint(network), 'graphql-ws');
      setDaiWebSocket({ webSocket: webSocketInstance });
    }
  }, [daiWebSocket, network]);

  useAsyncEffect(async () => {
    if (logged) {
      onGetCryptoAddressByUser();
      onGetUser();

      // CHECK IF NOT KCYED
      if (!token) {
        await onInitKyc();
      }
    } else {
      await onVerifyAuth();
      setLoading(false);
    }
  }, [logged, token]);

  useEffect(() => {
    if (process.env.REACT_APP_LOGROCKET === 'true') {
      if (logged) {
        LogRocket.identify(id, {
          id,
          email,
          accounttype_id,
          status,
          availWidth: window.innerWidth,
          availHeight: window.innerHeight
        });
      } else {
        // @ts-ignore
        LogRocket.identify(undefined, {
          availWidth: window.innerWidth,
          availHeight: window.innerHeight
        });
      }
    }
  }, [logged, id, accounttype_id, email, status]);

  useAsyncEffect(async () => {
    logged && address && network && netOk && fetchReferrals(network);
  }, [logged, address, network, netOk]);

  useEffect(() => {
    const isJoin =
      history.location.pathname.includes('/join') || history.location.pathname.includes('/login');
    const conditions = {
      logged,
      deposited: !!deposited,
      web3Pass,
      refMode,
      isJoin,
      isLoading
    };

    const TagManager = () => {
      return useGoogleTagManager(
        id,
        'www.raise.it',
        'Wallet',
        '/verify-web3',
        'TrafficLight',
        'dataLayer',
        'Submit',
        'Wallet Connect Success'
      );
    };

    // prettier-ignore
    matches(conditions,
      { isLoading: true },
      () => { },
      { logged: true, web3Pass: true, deposited: false },
      () => setTimeout(() => {
        TagManager();
        history.push('/deposit')
      }, 3000),
      { logged: true, web3Pass: true, deposited: true, refMode: true },
      () => setTimeout(() => {
        TagManager();
        history.push('/referral')
      }, 3000),
      { logged: true, web3Pass: true, deposited: true, refMode: false },
      () => {
        setTimeout(() => {
          const params = new URLSearchParams(window['location']['search']);
          if (params.has('redirect')) {
            history.push(params.get('redirect'));
          }
        }, 3000)
      },
      { logged: false, isJoin: false },
      () => history.push('/join'),
      _,
      () => { }
    );
  }, [isLoading, logged, web3Pass, id, deposited, history, refMode]);

  const componentsByRole = {
    1: {
      dashboard: DashboardBorrower
    },
    2: {
      dashboard: DashboardLender
    }
  };

  return (
    <AppContext.Provider
      value={{ store, actions, history, match, web3Status, modalRefs, webSocket, daiWebSocket }}
    >
      <Dimmer active={isLoading} inverted>
        <Loader>Loading app</Loader>
      </Dimmer>
      <TopMobileMenu />
      <DesktopHeader />
      <TransitionGroup component={null}>
        <CSSTransition key={history.location.key} classNames="fade" timeout={300}>
          <Switch>
            <Web3Route layout={LayoutV2} exact path="/deposit" component={Deposit} roles={[2]} />
            <Web3Route
              layout={LayoutV2}
              exact
              path="/referral"
              component={Referral}
              roles={[1, 2]}
            />

            <Web3Route
              marketplace
              layout={Layout}
              exact
              path="/kyc"
              component={Kyc}
              roles={[1, 2]}
            />
            <Web3Route
              marketplace
              layout={Layout}
              exact
              path="/dashboard"
              component={accounttype_id ? componentsByRole[accounttype_id].dashboard : null}
              roles={[1, 2]}
            />
            <Web3Route
              marketplace
              layout={Layout}
              exact
              path="/"
              component={accounttype_id ? componentsByRole[accounttype_id].dashboard : null}
              roles={[1, 2]}
            />
            <Web3Route
              marketplaceSuggesteds
              layout={Layout}
              exact
              path="/create-loan"
              component={CreateLoan}
              roles={[1, 2]}
            />
            <Layout exact path="/borrowers/:slug" component={BorrowerProfile} />
            <LayoutV2 exact path="/test" component={Test} />
            {/* Onboarding */}
            <LayoutV2 exact path="/verify-web3" component={Web3Check} />
            <LayoutV2 exact path="/join" component={Join} />
            <LayoutV2 exact path="/login" component={Join} />
            <LayoutV2 exact path="/join/verify/token/:token" component={Join} />
            <LayoutV2 exact path="/join/password/reset/:token" component={Join} />
            <LayoutV2 exact path="/join/activate/:token" component={Join} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <div ref={modalRefs} />
    </AppContext.Provider>
  );
};

export default withRouter(App);
