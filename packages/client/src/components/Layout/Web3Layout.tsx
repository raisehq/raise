import React, { useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { SpecialDimmer } from './Layout.styles';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import CryptoWallets from '../../commons/cryptoWallets';

import useAsyncEffect from '../../hooks/useAsyncEffect';

const Web3Layout = ({ history, layout: Layout, exact, roles, marketplace, ...rest }: any) => {
  const {
    store: {
      config: { network, networkId, isSupportedBrowser },
      auth: {
        login: { logged: isLogged }
      },
      user: {
        details: { accounttype_id: accounttypeId },
        cryptoAddress: { cryptotypeId }
      }
    },

    web3Status: { hasProvider, hasDeposit, accountMatches, networkMatches, unlocked }
  }: any = useContext(AppContext);

  const { connectWallet }: any = useWeb3();
  const [connectionError, setConnectionError] = useState(false);
  const {
    location: { pathname }
  }: any = history;

  useAsyncEffect(async () => {
    try {
      if (!hasProvider && isSupportedBrowser && isLogged) {
        // Check the type of wallet and try to connect to the provider
        await connectWallet(cryptotypeId, network, networkId, true);
      }
    } catch (error) {
      console.error(' ERROR CONNECTION ', error);
      // On case of error on connect redirect to the screen connector
      setConnectionError(true);
    }
  }, [hasProvider, isSupportedBrowser, isLogged]);
  const acceptedRole = (roles !== undefined && roles.indexOf(accounttypeId) > -1) || false;

  // Check supported Browser
  if (!isSupportedBrowser) return <Redirect to="/supported-browser" />;
  // Auto wallet connection error
  if (connectionError) {
    return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
  }
  // Check if is Logged
  if (!isLogged) return <Redirect to="/join" />;

  if (accountMatches && networkMatches && cryptotypeId !== null && hasDeposit !== undefined) {
    if (pathname !== '/deposit' && hasDeposit !== undefined && !hasDeposit) {
      return <Redirect to="/deposit" />;
    }
    if (!acceptedRole) return <Redirect to="/" />;
    if (rest.path === pathname && acceptedRole) return <Layout {...rest} />;
  } else {
    // on case the connection with web3 are not ok or we have the correct conection but are different wallets
    // eslint-disable-next-line
    if (pathname !== '/verify-web3' && (cryptotypeId === CryptoWallets.NotConnected || unlocked)) {
      return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
    }
  }
  // On case account not match and network not match

  return (
    <SpecialDimmer active inverted>
      <Loader>
        <p>Loading app</p>
        Checking your wallet connection
      </Loader>
    </SpecialDimmer>
  );
};

export default withRouter(Web3Layout);
