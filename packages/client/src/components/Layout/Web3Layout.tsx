import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { SpecialDimmer } from './Layout.styles';
import useWeb3 from '../../hooks/useWeb3';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import CryptoWallets from '../../commons/cryptoWallets';
import useAsyncEffect from '../../hooks/useAsyncEffect';

const Web3Layout = ({
  history,
  layout: Layout,
  exact,
  roles,
  marketplace,
  publicRoute,
  ...rest
}: any) => {
  const {
    web3Status: { hasProvider, accountMatches, networkMatches, unlocked }
  }: any = useAppContext();
  const {
    store: {
      config: { network, networkId },
      auth: {
        login: { logged: isLogged }
      },
      user: {
        details: { accounttype_id: accounttypeId },
        cryptoAddress: { cryptotypeId }
      }
    }
  }: any = useRootContext();
  const { connectWallet }: any = useWeb3();
  const [connectionError, setConnectionError] = useState(false);
  const {
    location: { pathname }
  }: any = history;

  useAsyncEffect(async () => {
    try {
      if (!hasProvider && isLogged) {
        // Check the type of wallet and try to connect to the provider
        await connectWallet(cryptotypeId, network, networkId, true);
      }
    } catch (error) {
      console.error(' ERROR CONNECTION ', error);
      // On case of error on connect redirect to the screen connector
      setConnectionError(true);
    }
  }, [hasProvider, isLogged]);
  const acceptedRole = (roles !== undefined && roles.indexOf(accounttypeId) > -1) || false;

  // Auto wallet connection error
  if (connectionError) {
    return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
  }
  // Check if is Logged and not public
  if (!publicRoute && !isLogged && !pathname.includes('/join')) {
    return <Redirect to="/join" />;
  }

  if (publicRoute && !isLogged) {
    return <Layout {...rest} />;
  }

  if (accountMatches && networkMatches && cryptotypeId !== null) {
    if (!acceptedRole) {
      return <Redirect to="/" />;
    }
    if (acceptedRole) {
      return <Layout {...rest} />;
    }
  } else {
    // on case the connection with web3 are not ok or we have the correct conection but are different wallets
    // eslint-disable-next-line
    if (pathname !== '/verify-web3' && (cryptotypeId === CryptoWallets.NotConnected || unlocked)) {
      history.push(`/verify-web3?redirect=${history.location.pathname}`);
      return null;
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
