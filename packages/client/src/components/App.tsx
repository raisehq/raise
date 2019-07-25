import React, { useContext, useEffect, createContext, useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import LayoutV2 from './LayoutV2';
import Dashboard from './Dashboard';
import Referral from './Referral/index';
import Marketplace from './Marketplace';
import CreateLoan from './CreateLoan';
import { RootContext } from '../context';
import Join from './Join';
import Kyc from '../components/Kyc';
import KycValidation from '../components/KycValidation';
import Deposit from '../components/Deposit';
import { Web3Check } from '../components/Web3Check';
import useAsyncEffect from '../hooks/useAsyncEffect';
import useWeb3Checker from '../hooks/useWeb3Checker';
import { match, _ } from 'pampy';

export const AppContext = createContext({
  store: {},
  actions: {},
  history: {},
  web3Status: {}
});

const App = ({ children, history }: any) => {
  const [isLoading, setLoading] = useState(true);
  const {
    store,
    store: {
      auth: {
        login: { logged }
      },
      user: {
        cryptoAddress: { address }
      }
    },
    actions,
    actions: {
      auth: { onVerifyAuth },
      user: { onGetCryptoAddressByUser, onGetUser },
      blockchain: { fetchReferrals }
    }
  }: any = useContext(RootContext);
  const web3Status = useWeb3Checker();
  const {
    hasDeposit: deposited,
    accountMatches: accMatch,
    networkMatches: netOk
  } = web3Status;
  const web3Pass = netOk && accMatch;

  useAsyncEffect(async () => {
    if (logged) {
      onGetCryptoAddressByUser();
      onGetUser();
    } else {
      await onVerifyAuth();
      setLoading(false);
    }
  }, [logged]);

  useAsyncEffect(async () => {
    logged && address && fetchReferrals();
  }, [logged, address]);

  useEffect(() => {
    const refMode = Boolean(process.env.REACT_APP_REFERAL);
    const isJoin = history.location.pathname.includes('/join');
    const conditions = {
      logged,
      deposited: !!deposited,
      web3Pass,
      refMode,
      isJoin,
      isLoading
    };
    match(
      conditions,
      { isLoading: true },
      () => {},
      { logged: true, web3Pass: false },
      () => history.push('/verify-web3'),
      { logged: true, web3Pass: true, deposited: false },
      () => setTimeout(() => history.push('/deposit'), 3000),
      { logged: true, web3Pass: true, deposited: true, refMode: true },
      () => setTimeout(() => history.push('/referral'), 3000),
      { logged: true, web3Pass: true, deposited: true, refMode: false },
      () => {},
      { logged: false, isJoin: false },
      () => history.push('/join'),
      _,
      () => {}
    );
  }, [isLoading, logged, web3Pass, deposited]);

  return (
    <AppContext.Provider value={{ store, actions, history, web3Status }}>
      {!isLoading && (
        <Switch>
          <LayoutV2>
            <Route exact path="/deposit" component={Deposit} />
            <Route exact path="/verify-web3" component={Web3Check} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/referral" component={Referral} />
            <Route exact path="/join/verify/token/:token" component={Join} />
          </LayoutV2>
          <Layout>
            <Route exact path="/kyc" component={Kyc} />
            <Route exact path="/kyc/validation" component={KycValidation} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/create-loan" component={CreateLoan} />
            <Route exact path="/marketplace" component={Marketplace} />
            {children}
          </Layout>
        </Switch>
      )}
    </AppContext.Provider>
  );
};

export default withRouter(App);
