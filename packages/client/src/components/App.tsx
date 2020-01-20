import React, { useContext, useEffect, useState, useRef } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import 'url-search-params-polyfill';
import { Dimmer, Loader } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LogRocket from 'logrocket';
import { MainLayout, SimpleLayout, Web3Layout, BorrowerProfileLayout } from './Layout';
import { DashboardLender, DashboardBorrower } from './Dashboard';
import CreateLoan from './CreateLoan';
import RootContext from '../context';
import MyAccount from './MyAccount';
import Join from './Join';
import Kyc from '../components/Kyc';
import Deposit from '../components/Deposit';
import { Web3Check } from '../components/Web3Check';
import { BorrowerProfile } from '../components/BorrowerProfile';
import useAsyncEffect from '../hooks/useAsyncEffect';
import useWeb3Checker from '../hooks/useWeb3Checker';
// import useGoogleTagManager from '../hooks/useGoogleTagManager';
import UseWebSockets from '../hooks/useWebSockets';
import { getGraphWSEndpoint, getDaiWSEndpoint } from '../utils';
import { TopMobileMenu, Menu } from './Menu';
import DesktopHeader from './DesktopHeader';
import LocalData from '../helpers/localData';
import Queryies from '../helpers/queryies';
import AppContext from './AppContext';
import NotFound404 from '../components/BorrowerProfile/Borrower404';
import Onboarding from '@raisehq/onboarding';

const App = ({ history, match }: any) => {
  const firstLogin = LocalData.get('firstLogin');
  const [isLoading, setLoading] = useState(true);
  const [getStarted, setGetStarted] = useState(!!(firstLogin && firstLogin.includes('first')));

  const {
    store,
    store: {
      auth: {
        login: { logged: isLogged, checked: isChecked }
      },
      blockchain: { contracts },
      config: { network },
      kyc: { token },
      user: {
        details: { id, accounttype_id: accounttypeId, email, status },
        cryptoAddress: { address, cryptotypeId }
      },
      onboarding: { show: showOnboarding, troggle: troggleOnboarding }
    },
    actions,
    actions: {
      auth: { onVerifyAuth },
      user: { onGetCryptoAddressByUser, onGetUser, onGetUserFromBC },
      blockchain: { fetchContracts },
      kyc: { onInitKyc },
      config: { updateNetwork },
      onboarding: { hiddeOnboarding }
    }
  }: any = useContext(RootContext);
  const modalRefs = useRef<HTMLDivElement>(null);

  const [webSocket, setWebSocket]: any = useState({});
  const [daiWebSocket, setDaiWebSocket]: any = useState({});
  const {
    hasProvider,
    unlocked,
    networkMatches,
    accountMatches,
    targetNetwork,
    walletNetwork,
    walletNetworkId,
    walletAccount,
    storedAccount,
    hasDeposit
  } = useWeb3Checker(address);

  const onSetGetStarted = () => setGetStarted(!getStarted);
  // Enabling connectionsStart
  useEffect(() => {
    if (networkMatches && network !== walletNetwork && walletNetwork !== 'NO_NETWORK') {
      setLoading(false);
      setWebSocket({});
      setDaiWebSocket({});
      updateNetwork(walletNetwork, walletNetworkId);
    }
  }, [network, networkMatches, walletNetwork]);
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
  }, [webSocket, address]);

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
    if (contracts === null) fetchContracts();
  }, [isLogged, token, address, network]);

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
    if (isChecked && hasProvider !== undefined && contracts) {
      if (isLogged) {
        // if is logged we need to wait until we check the cryptotypeId
        if (cryptotypeId !== null) setLoading(false);
      } else {
        // if we are not logged simply disable loading
        setLoading(false);
      }
    }
  }, [isChecked, hasProvider, cryptotypeId, contracts]);

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
          walletNetworkId,
          walletNetwork,
          walletAccount,
          storedAccount,
          account: storedAccount, // Old compability
          hasDeposit
        }
      }}
    >
      <Dimmer active={isLoading} inverted>
        <Loader>Loading app</Loader>
      </Dimmer>
      <Onboarding
        blur={false}
        open={showOnboarding}
        history={history}
        closeButton
        onClose={hiddeOnboarding}
        initStep={troggleOnboarding}
        pathRedirect={window.location.pathname}
        mountNode={modalRefs.current}
      />
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
                  layout={SimpleLayout}
                  exact
                  path="/kyc"
                  component={Kyc}
                  roles={[1, 2]}
                />
                <Web3Layout
                  marketplace
                  layout={MainLayout}
                  exact
                  path="/account"
                  component={MyAccount}
                  roles={[1, 2]}
                />
                <Web3Layout
                  publicRoute
                  marketplace
                  layout={MainLayout}
                  exact
                  path="/"
                  component={
                    accounttypeId ? componentsByRole[accounttypeId].dashboard : DashboardLender
                  }
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
                <Web3Layout
                  publicRoute
                  marketplace
                  layout={BorrowerProfileLayout}
                  exact
                  path="/borrowers/:slug"
                  component={BorrowerProfile}
                  roles={[1, 2]}
                />
                {/* Onboarding */}
                <SimpleLayout checkLogged exact path="/verify-web3" component={Web3Check} />
                <SimpleLayout exact path="/join" component={Join} />
                <SimpleLayout exact path="/login" component={Join} />
                <SimpleLayout exact path="/login/bloom/:token" component={Join} />
                <SimpleLayout exact path="/join/verify/token/:token" component={Join} />
                <SimpleLayout exact path="/join/password/reset/:token" component={Join} />
                <SimpleLayout exact path="/join/activate/:token" component={Join} />
                <MainLayout component={NotFound404} />
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
