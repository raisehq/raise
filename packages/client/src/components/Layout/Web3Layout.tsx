import React, { useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Experiment, Variant } from 'react-optimize';
import { Loader } from 'semantic-ui-react';
import { SpecialDimmer } from './Layout.styles';
import LocalData from '../../helpers/localData';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import CryptoWallets from '../../commons/cryptoWallets';

import useAsyncEffect from '../../hooks/useAsyncEffect';

const EXPERIMENT_DEPOSIT_ID = process.env.REACT_APP_AB_TEST_SKIP_DEPOSIT;

const Web3Layout = ({ history, layout: Layout, exact, roles, marketplace, ...rest }: any) => {
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
    },

    web3Status: { hasProvider, hasDeposit, accountMatches, networkMatches, unlocked }
  }: any = useContext(AppContext);

  const pushTo = (route: string) => history.push(route);
  const firstLogin = LocalData.get('firstLogin') === 'first';

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
  // Check if is Logged
  if (!isLogged) {
    return <Redirect to="/join" />;
  }

  if (accountMatches && networkMatches && cryptotypeId !== null && hasDeposit !== undefined) {
    if (
      accounttypeId === 2 &&
      acceptedRole &&
      pathname !== '/deposit' &&
      hasDeposit !== undefined &&
      !hasDeposit
    ) {
      if (EXPERIMENT_DEPOSIT_ID) {
        return (
          <>
            <Experiment id={EXPERIMENT_DEPOSIT_ID}>
              <Variant id="0">{pushTo('/deposit')}</Variant>
              <Variant id="1">
                {firstLogin && pushTo('/deposit')}
                {!firstLogin && !acceptedRole && pushTo('/')}
                {!firstLogin && rest.path === pathname && acceptedRole && <Layout {...rest} />}
              </Variant>
            </Experiment>
          </>
        );
      }
      return <Redirect to="/deposit" />;
    }
    if (!acceptedRole) {
      return <Redirect to="/" />;
    }
    if (rest.path === pathname && acceptedRole) {
      return <Layout {...rest} />;
    }
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
