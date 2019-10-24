import React, { useContext, useEffect, useState, useRef } from 'react';
import { withRouter, Switch } from 'react-router-dom';
// import { match as matches, _ } from 'pampy';
import { Dimmer, Loader } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Web3Route } from './Routers';
import Layout from './Layout';
import LayoutV2 from './LayoutV2';
import { DashboardLender, DashboardBorrower } from './Dashboard';
import CreateLoan from './CreateLoan';
import { RootContext } from '../context';
import Join from './Join';
import Kyc from '../components/Kyc';
import Deposit from '../components/Deposit';
import { Web3Check } from '../components/Web3Check';
//import Test from './SuggestTest';
import { BorrowerProfile } from '../components/BorrowerProfile';
import useAsyncEffect from '../hooks/useAsyncEffect';
//import useWeb3Checker from '../hooks/useWeb3Checker';
//import useWallet from '../hooks/useWallet';
// import useGoogleTagManager from '../hooks/useGoogleTagManager';
import UseWebSockets from '../hooks/useWebSockets';
import LogRocket from 'logrocket';
import { getGraphWSEndpoint, getDaiWSEndpoint } from '../utils';
import { TopMobileMenu, Menu } from './Menu';
import DesktopHeader from './DesktopHeader';
import LocalData from '../helpers/localData';
import Queryies from '../helpers/queryies';
import AppContext from './AppContext';

const App = ({ children, history, match }: any) => {
  const refMode = process.env.REACT_APP_REFERAL === 'true';
  const firstLogin = LocalData.get('firstLogin');
  const [isLoading, setLoading] = useState(true);
  const [getStarted, setGetStarted] = useState(firstLogin === 'first');
  const {
    store,
    store: {
      auth: {
        login: { logged }
      },
      config: { network },
      kyc: { token },
      user: {
        details: { id, accounttypeId, email, status },
        cryptoAddress: { address }
      }
    },
    actions,
    actions: {
      auth: { onVerifyAuth },
      user: { onGetCryptoAddressByUser, onGetUser, onGetUserFromBC },
      kyc: { onInitKyc }
    }
  }: any = useContext(RootContext);
  const modalRefs = useRef<HTMLDivElement>(null);
  //console.log(' NETWORK : ', logged, network);
  // const web3Status = useWeb3Checker(address, network);
  // const { hasDeposit: deposited, accountMatches: accMatch, networkMatches: netOk } = web3Status;
  // const web3Pass = netOk && accMatch;
  const [webSocket, setWebSocket]: any = useState({});
  const [daiWebSocket, setDaiWebSocket] = useState({});
  const [web3Status, setWeb3Status] = useState({});
  const onSetGetStarted = () => setGetStarted(!getStarted);

  // Enabling connections
  useEffect(() => {
    if (Object.keys(webSocket).length === 0) {
      const webSocketInstance = new UseWebSockets(getGraphWSEndpoint(network), 'graphql-ws');
      setWebSocket({ webSocket: webSocketInstance });
    }
  }, [webSocket, network]);

  useEffect(() => {
    if (Object.keys(daiWebSocket).length === 0) {
      const webSocketInstance = new UseWebSockets(getDaiWSEndpoint(network), 'graphql-ws');
      setDaiWebSocket({ webSocket: webSocketInstance });
    }
  }, [daiWebSocket, network]);

  useEffect(() => {
    if (Object.keys(webSocket).length !== 0 && address) {
      const { query, subscriptionName } = Queryies.subscriptions.userStatus;
      const variables = {
        address
      };
      const callback = onGetUserFromBC;
      webSocket.webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, onGetUserFromBC, address]);

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
          accounttypeId,
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
  }, [logged, id, accounttypeId, email, status]);

  // TODO : DEPRECATED ?
  // useAsyncEffect(async () => {
  //   logged && address && network && netOk && fetchReferrals(network);
  // }, [logged, address, network, netOk]);

  useEffect(() => {
    setWeb3Status({
      network,
      hasDeposit: false,
    });
    // const isJoin =
    //   history.location.pathname.includes('/join') || history.location.pathname.includes('/login');
    // const conditions = {
    //   logged,
    //   deposited: !!deposited,
    //   web3Pass,
    //   refMode,
    //   isJoin,
    //   isLoading
    // };

    // const TagManager = () => {
    //   return useGoogleTagManager(
    //     id,
    //     'www.raise.it',
    //     'Wallet',
    //     '/verify-web3',
    //     'TrafficLight',
    //     'dataLayer',
    //     'Submit',
    //     'Wallet Connect Success'
    //   );
    // };

    // prettier-ignore
    // matches(conditions,
    //   { isLoading: true },
    //   () => { },
    //   { logged: true, web3Pass: true, deposited: false },
    //   () => setTimeout(() => {
    //     TagManager();
    //     history.push('/deposit')
    //   }, 3000),
    //   { logged: true, web3Pass: true, deposited: true, refMode: true },
    //   () => setTimeout(() => {
    //     TagManager();
    //     history.push('/referral')
    //   }, 3000),
    //   { logged: true, web3Pass: true, deposited: true, refMode: false },
    //   () => {
    //     setTimeout(() => {
    //       const params = new URLSearchParams(window['location']['search']);
    //       if (params.has('redirect')) {
    //         history.push(params.get('redirect'));
    //       }
    //     }, 3000)
    //   },
    //   { logged: false, isJoin: false },
    //   () => history.push('/join'),
    //   _,
    //   () => { }
    // );
  }, [
    isLoading,
    logged,
    //    web3Pass,
    id,
    //   deposited,
    history,
    refMode
  ]);

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
      value={{
        store,
        onSetGetStarted,
        getStarted,
        web3Status,
        actions,
        history,
        match,
        modalRefs,
        webSocket,
        daiWebSocket
      }}
    >
      <Dimmer active={isLoading} inverted>
        <Loader>Loading app</Loader>
      </Dimmer>

      {!isLoading && (
        <>
          <TopMobileMenu />
          <DesktopHeader />
          <Menu />
          <TransitionGroup component={null}>
            <CSSTransition key={history.location.key} classNames="fade" timeout={300}>
              <Switch>
                <Web3Route
                  layout={LayoutV2}
                  exact
                  path="/deposit"
                  component={Deposit}
                  roles={[2]}
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
                  component={accounttypeId ? componentsByRole[accounttypeId].dashboard : null}
                  roles={[1, 2]}
                />
                <Web3Route
                  marketplace
                  layout={Layout}
                  exact
                  path="/"
                  component={accounttypeId ? componentsByRole[accounttypeId].dashboard : null}
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
        </>
      )}
      <div ref={modalRefs} />
    </AppContext.Provider>
  );
};

export default withRouter(App);
