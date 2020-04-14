import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LogRocket from 'logrocket';

import useGoogleTagManager from './hooks/useGoogleTagManager';
import App from './components/App';

// Providers
import RootContextProvider, { Updater as RootContextUpdater } from './contexts/RootContext';
import BlockContextProvider, { Updater as BlockContextUpdater } from './contexts/BlockContext';
import AppContextProvider, { Updater as AppContextUpdater } from './contexts/AppContext';
import SidebarContextProvider, {
  Updater as SidebarContextUpdater
} from './contexts/SidebarContext';
import BalancesContextProvider, {
  Updater as BalancesContextUpdater
} from './contexts/BalancesContext';

// Import some inline css
// import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';

// Declare global
declare global {
  interface Window {
    fbq: any;
  }
}

window.fbq = window.fbq || null;

function ContextProviders({ children }) {
  return (
    <RootContextProvider>
      <AppContextProvider>
        <SidebarContextProvider>
          <BlockContextProvider>
            <BalancesContextProvider>{children}</BalancesContextProvider>
          </BlockContextProvider>
        </SidebarContextProvider>
      </AppContextProvider>
    </RootContextProvider>
  );
}

function ContextUpdaters() {
  return (
    <>
      <RootContextUpdater />
      <AppContextUpdater />
      <BlockContextUpdater />
      <BalancesContextUpdater />
      <SidebarContextUpdater />
    </>
  );
}

const Root = () => {
  const tagManager = useGoogleTagManager();
  tagManager.initialize();

  useEffect(() => {
    const { Cypress }: any = window;
    if (process.env.REACT_APP_LOGROCKET === 'true' && Cypress === undefined) {
      LogRocket.init('rjsyho/raisehq');
    }
  }, []);

  return (
    <ContextProviders>
      <ContextUpdaters />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProviders>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
