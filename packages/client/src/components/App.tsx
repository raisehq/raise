import React, {
  useContext,
  useEffect,
  createContext,
  useState,
  useRef
} from 'react';
import { withRouter } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import { match, _ } from 'pampy';
import { Dimmer, Loader } from 'semantic-ui-react';
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

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100
  },
  atLeave: {
    offset: glide(-100)
  },
  atActive: {
    offset: glide(0)
  }
};

export const AppContext = createContext({
  store: {},
  actions: {},
  history: {},
  web3Status: {},
  modalRefs: {}
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
  const modalRefs = useRef<HTMLDivElement>(null);
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
    const isJoin =
      history.location.pathname.includes('/join') ||
      history.location.pathname.includes('/login');
    const conditions = {
      logged,
      deposited: !!deposited,
      web3Pass,
      refMode,
      isJoin,
      isLoading
    };

    // prettier-ignore
    match(conditions,
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
    <AppContext.Provider
      value={{ store, actions, history, web3Status, modalRefs }}
    >
      <Dimmer active={isLoading} inverted>
        <Loader>Loading app</Loader>
      </Dimmer>
      <AnimatedSwitch
        className="switch-wrapper"
        {...pageTransitions}
        mapStyles={styles => ({
          transform: `translateX(${styles.offset}%)`
        })}
      >
        {web3Pass && <LayoutV2 exact path="/deposit" component={Deposit} />}
        {web3Pass && <LayoutV2 exact path="/referral" component={Referral} />}
        <LayoutV2 exact path="/verify-web3" component={Web3Check} />
        <LayoutV2 exact path="/join" component={Join} />
        <LayoutV2 exact path="/login" component={Join} />
        <LayoutV2 exact path="/join/verify/token/:token" component={Join} />
        <LayoutV2 exact path="/join/password/reset/:token" component={Join} />
        <Layout exact path="/kyc" component={Kyc} />
        <Layout exact path="/kyc/validation" component={KycValidation} />
        <Layout exact path="/dashboard" component={Dashboard} />
        <Layout exact path="/create-loan" component={CreateLoan} />
        <Layout exact path="/marketplace" component={Marketplace} />
      </AnimatedSwitch>
      <div ref={modalRefs} />
    </AppContext.Provider>
  );
};

export default withRouter(App);
