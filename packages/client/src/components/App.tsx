import React, { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import 'url-search-params-polyfill';
import { Dimmer, Loader } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Onboarding from '@raisehq/onboarding';
import { toast } from 'react-toastify';

// Contexts and hooks
import { useAppContext } from '../contexts/AppContext';
import { useRootContext } from '../contexts/RootContext';
import useRouter from '../hooks/useRouter';

// Pages and components
import { MainLayout, SimpleLayout, Web3Layout, BorrowerProfileLayout, KycLayout } from './Layout';
import { DashboardLender, DashboardBorrower } from './Dashboard';
import { CreateLoan } from './CreateLoan';
import MyAccount from './MyAccount';
import Join from './Join';
import Kyc from '../components/Kyc';
import KycSuccess from '../components/Kyc/KycSuccess';
import KycSelectMethod from '../components/Kyc/KycSelectMethod';
import KycWithBloom from '../components/Kyc/KycWithBloom/KycWithBloom';
import { Web3Check } from '../components/Web3Check';
import { BorrowerProfile } from '../components/BorrowerProfile';
import { TopMobileMenu, Menu } from './Menu';
import DesktopHeader from './DesktopHeader';
import NotFound404 from '../components/BorrowerProfile/Borrower404';

import Toast, { StyledToastContainer } from './Toast';
import Sidebar from './InvestSidebar/Sidebar';

const InvestSidebar = lazy(() => import('./InvestSidebar/InvestSidebar'));

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

  return (
    <>
      <Dimmer active={isLoading} inverted>
        <Loader>Loading app</Loader>
      </Dimmer>
      {!isLoading && (
        <>
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
                  marketplace
                  layout={KycLayout}
                  exact
                  path="/kyc"
                  component={KycSelectMethod}
                  roles={[1, 2]}
                />
                <Web3Layout
                  marketplace
                  layout={KycLayout}
                  exact
                  path="/kyc-sumsub"
                  component={Kyc}
                  roles={[1, 2]}
                />
                <Web3Layout
                  marketplace
                  layout={KycLayout}
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
      )}
      <div ref={modalRefs} />
      <Sidebar>
        <Suspense fallback={<div />}>
          <InvestSidebar />
        </Suspense>
      </Sidebar>
    </>
  );
};

export default App;
