import React, { useContext, useEffect, useState, useRef } from 'react';
import { withRouter, Switch } from 'react-router-dom';
// import { match as matches, _ } from 'pampy';
import { Dimmer, Loader } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LogRocket from 'logrocket';
import { MainLayout, SimpleLayout, Web3Layout } from './Layout';
import { DashboardLender, DashboardBorrower } from './Dashboard';
import CreateLoan from './CreateLoan';
import RootContext from '../context';
import Join from './Join';
import Kyc from '../components/Kyc';
import Deposit from '../components/Deposit';
import { Web3Check } from '../components/Web3Check';
//import Test from './SuggestTest';
import { BorrowerProfile } from '../components/BorrowerProfile';
import useAsyncEffect from '../hooks/useAsyncEffect';
import useWeb3Checker from '../hooks/useWeb3Checker';
// import useWallet from '../hooks/useWallet';
// import useGoogleTagManager from '../hooks/useGoogleTagManager';
import UseWebSockets from '../hooks/useWebSockets';

import { getGraphWSEndpoint, getDaiWSEndpoint } from '../utils';
import { TopMobileMenu, Menu } from './Menu';
import DesktopHeader from './DesktopHeader';
import LocalData from '../helpers/localData';
import Queryies from '../helpers/queryies';
import AppContext from './AppContext';

const App = ({ history, match }: any) => {
  const firstLogin = LocalData.get('firstLogin');
  const [isLoading, setLoading] = useState(true);
  const [getStarted, setGetStarted] = useState(firstLogin === 'first');
  const {
    store,
    store: {
      auth: {
        login: { logged: isLogged, checked: isChecked }
      },
      config: { network },
      kyc: { token },
      user: {
        details: { id, accounttype_id: accounttypeId, email, status },
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
  const [webSocket, setWebSocket]: any = useState({});
  const [daiWebSocket, setDaiWebSocket] = useState({});

  const {
    hasProvider,
    unlocked,
    networkMatches,
    accountMatches,
    targetNetwork,
    walletAccount,
    storedAccount
  } = useWeb3Checker(address);
  // console.log('################# STORED ACCOUNT CHECK APP: ', address);
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
    if (isLogged) {
      onGetCryptoAddressByUser();
      onGetUser();

      // CHECK IF NOT KCYED
      if (!token) {
        await onInitKyc();
      }
    } else {
      await onVerifyAuth();
    }
  }, [isLogged, token, address]);

  useEffect(() => {
    if (process.env.REACT_APP_LOGROCKET === 'true') {
      if (isLogged) {
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
  }, [isLogged, id, accounttypeId, email, status]);

  useEffect(() => {
    console.log(' isChecked :', isChecked, ' hasProvider : ', hasProvider);
    if (isChecked && hasProvider !== undefined) {
      setLoading(false);
    }
  }, [isChecked, hasProvider]);

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
        actions,
        history,
        match,
        modalRefs,
        webSocket,
        daiWebSocket,
        web3Status: {
          hasProvider,
          unlocked,
          networkMatches,
          accountMatches,
          targetNetwork,
          walletAccount,
          storedAccount
        }
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
                <Web3Layout
                  layout={SimpleLayout}
                  exact
                  path="/deposit"
                  component={Deposit}
                  roles={[2]}
                />
                <Web3Layout
                  marketplace
                  layout={MainLayout}
                  exact
                  path="/kyc"
                  component={Kyc}
                  roles={[1, 2]}
                />
                <Web3Layout
                  marketplace
                  layout={MainLayout}
                  exact
                  path="/dashboard"
                  component={accounttypeId ? componentsByRole[accounttypeId].dashboard : null}
                  roles={[1, 2]}
                />
                <Web3Layout
                  marketplace
                  layout={MainLayout}
                  exact
                  path="/"
                  component={accounttypeId ? componentsByRole[accounttypeId].dashboard : null}
                  roles={[1, 2]}
                />
                <Web3Layout
                  marketplaceSuggesteds
                  layout={MainLayout}
                  exact
                  path="/create-loan"
                  component={CreateLoan}
                  roles={[1, 2]}
                />
                <MainLayout exact path="/borrowers/:slug" component={BorrowerProfile} />
                {/* Onboarding */}
                <SimpleLayout checkLogged exact path="/verify-web3" component={Web3Check} />
                <SimpleLayout exact path="/join" component={Join} />
                <SimpleLayout exact path="/login" component={Join} />
                <SimpleLayout exact path="/join/verify/token/:token" component={Join} />
                <SimpleLayout exact path="/join/password/reset/:token" component={Join} />
                <SimpleLayout exact path="/join/activate/:token" component={Join} />
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
