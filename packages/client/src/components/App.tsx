import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import 'url-search-params-polyfill';
import { toast } from 'react-toastify';
import { Dimmer, Loader } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Onboarding from '@raisehq/onboarding';

// Contexts and hooks
import { useAppContext } from '../contexts/AppContext';
import { useRootContext } from '../contexts/RootContext';
import useRouter from '../hooks/useRouter';

// Pages and components
import { MainLayout, SimpleLayout, Web3Layout, BorrowerProfileLayout } from './Layout';
import { TopMobileMenu, Menu } from './Menu';
import DesktopHeader from './DesktopHeader';
import NotFound404 from '../components/BorrowerProfile/Borrower404';
import Toast, { StyledToastContainer } from './Toast';
import { Sidebar, InvestSidebar } from './InvestSidebar';

// Lazy routes
const DashboardLender = lazy(() =>
  import('./Dashboard/Dashboard.Lender' /* webpackChunkName: "Dashboard.Lender" */)
);
const DashboardBorrower = lazy(() =>
  import('./Dashboard/Dashboard.Borrower' /* webpackChunkName: "Dashboard.Borrower" */)
);
const Deposit = lazy(() => import('./Deposit' /* webpackChunkName: "Deposit" */));
const Join = lazy(() => import('./Join' /* webpackChunkName: "Join" */));
const MyAccount = lazy(() => import('./MyAccount' /* webpackChunkName: "MyAccount" */));
const CreateLoan = lazy(() => import('./CreateLoan' /* webpackChunkName: "CreateLoan" */));
const Kyc = lazy(() => import('./Kyc' /* webpackChunkName: "Kyc" */));
const KycSuccess = lazy(() => import('./Kyc/KycSuccess' /* webpackChunkName: "KycSuccess" */));
const KycWithBloom = lazy(() =>
  import('./Kyc/KycWithBloom/KycWithBloom' /* webpackChunkName: "KycWithBloom" */)
);
const KycSelectMethod = lazy(() =>
  import('./Kyc/KycSelectMethod' /* webpackChunkName: "KycSelectMethod" */)
);
const Web3Check = lazy(() => import('./Web3Check' /* webpackChunkName: "Web3Check" */));
const BorrowerProfile = lazy(() =>
  import('./BorrowerProfile' /* webpackChunkName: "BorrowerProfile" */)
);

// Lazy components

const App = () => {
  const {
    store: {
      user: {
        details: { accounttype_id: accounttypeId }
      },
      blockchain: { contracts },
      onboarding: { show: showOnboarding, troggle: troggleOnboarding }
    },
    actions: {
      user: { onGetUser },
      onboarding: { hiddeOnboarding }
    },
    followTx
  }: any = useRootContext();
  const { isLoading, modalRefs }: any = useAppContext();
  const { history } = useRouter();
  const componentsByRole = {
    1: {
      dashboard: DashboardBorrower
    },
    2: {
      dashboard: DashboardLender
    }
  };

  useEffect(() => {
    if (followTx) {
      followTx.on('tx_start', (tx, params) => {
        toast(<Toast params={params} tx={tx} state="pending" />, {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          type: toast.TYPE.INFO,
          toastId: tx
        });
      });
      followTx.on('tx_finish', (tx, params) => {
        if (!toast.isActive(tx)) {
          toast(<Toast params={params} tx={tx} state="success" />, {
            type: toast.TYPE.SUCCESS,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            toastId: tx
          });
        } else {
          toast.update(tx, {
            render: <Toast params={params} tx={tx} state="success" />,
            type: toast.TYPE.SUCCESS,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
          });
        }
      });
      followTx.on('tx_error', (tx, params) => {
        if (!toast.isActive(tx)) {
          toast(<Toast params={params} tx={tx} state="error" />, {
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            toastId: tx
          });
        } else {
          toast.update(tx, {
            render: <Toast params={params} tx={tx} state="error" />,
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
          });
        }
      });
    }
  }, [followTx]);

  const DimmerLoader = ({ active }) => (
    <Dimmer active={active} inverted>
      <Loader>Loading app</Loader>
    </Dimmer>
  );
  return (
    <>
      <DimmerLoader active={isLoading} />
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
        <Suspense fallback={<DimmerLoader active />}>
          <>
            <StyledToastContainer
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable={false}
              pauseOnHover={false}
            />
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
                    component={KycSelectMethod}
                    roles={[1, 2]}
                  />
                  <Web3Layout
                    marketplace
                    layout={SimpleLayout}
                    exact
                    path="/kyc-sumsub"
                    component={Kyc}
                    roles={[1, 2]}
                  />
                  <Web3Layout
                    marketplace
                    layout={SimpleLayout}
                    exact
                    path="/kyc-bloom"
                    component={KycWithBloom}
                    onBack={onGetUser}
                    roles={[1, 2]}
                  />
                  <Web3Layout
                    marketplace
                    layout={SimpleLayout}
                    exact
                    path="/kyc-success"
                    component={KycSuccess}
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
                    contracts={contracts}
                  />
                  <Web3Layout
                    publicRoute
                    marketplace
                    layout={BorrowerProfileLayout}
                    exact
                    path="/c/:slug"
                    component={BorrowerProfile}
                    roles={[1, 2]}
                  />
                  {/* Onboarding */}
                  <SimpleLayout checkLogged exact path="/verify-web3" component={Web3Check} />
                  <SimpleLayout exact path="/join" component={Join} />
                  <SimpleLayout exact path="/login" component={Join} />
                  <SimpleLayout exact path="/login/bloom/:token" component={Join} />
                  <SimpleLayout exact path="/login/email" component={Join} />
                  <SimpleLayout exact path="/join/verify/token/:token" component={Join} />
                  <SimpleLayout exact path="/join/password/reset/:token" component={Join} />
                  <SimpleLayout exact path="/join/activate/:token" component={Join} />
                  <MainLayout component={NotFound404} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        </Suspense>
      )}
      <div ref={modalRefs} />
      <Sidebar>
        <InvestSidebar />
      </Sidebar>
    </>
  );
};

export default App;
