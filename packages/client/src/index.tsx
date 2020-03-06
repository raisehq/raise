import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import useGoogleTagManager from './hooks/useGoogleTagManager';
import App from './components/App';

// Providers
import RootContextProvider, { Updater as RootContextUpdater } from './contexts/RootContext';
import BlockContextProvider, { Updater as BlockContextUpdater } from './contexts/BlockContext';
import AppContextProvider, { Updater as AppContextUpdater } from './contexts/AppContext';

// Import global tippngs for TS
import './globals';

// Import some inline css
import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './global.css';

function ContextProviders({ children }) {
  return (
    <RootContextProvider>
      <AppContextProvider>
        <BlockContextProvider>{children}</BlockContextProvider>
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
    </>
  );
}

const Root = () => {
  const tagManager = useGoogleTagManager();
  tagManager.initialize();

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
