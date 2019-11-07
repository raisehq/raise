import React, { useContext, useEffect, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { SpecialDimmer } from './Layout.styles';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import CryptoWallets from '../../commons/cryptoWallets';
import { connectMetamask, connectOpera, connectCoinbase } from '../../helpers/walletConnector';

const Web3Layout = ({ history, layout: Layout, exact, roles, marketplace, ...rest }: any) => {
  const {
    store: {
      config: { network },
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
  console.log(' Crypto type ID : ', cryptotypeId, ' N ', network, ' hasProvider ', hasProvider);
  const { setNewProvider, getDefaultWeb3 }: any = useWeb3();
  const [connectionError, setConnectionError] = useState(false);

  useEffect(() => {
    try {
      if (!hasProvider) {
        console.log(' HAS PROVIDER : ', hasProvider, getDefaultWeb3());
        const defaultWeb3 = getDefaultWeb3();
        switch (cryptotypeId) {
          case CryptoWallets.Metamask:
            if (defaultWeb3.name !== CryptoWallets.Metamask) throw new Error('Wallet not alowed');
            connectMetamask(setNewProvider, defaultWeb3.conn.currentProvider);
            break;
          case CryptoWallets.Opera:
            if (defaultWeb3.name !== CryptoWallets.Opera) throw new Error('Wallet not alowed');
            connectOpera(setNewProvider, defaultWeb3.conn.currentProvider);
            break;
          case CryptoWallets.Coinbase:
            connectCoinbase(setNewProvider, network);
            break;
          default:
            console.log('No wallet allowed');
            break;
        }
      }
    } catch (error) {
      // On case of error on connect redirect to the screen connector
      setConnectionError(true);
    }
  }, [hasProvider]);
  const acceptedRole = (roles !== undefined && roles.indexOf(accounttypeId) > -1) || false;

  if (connectionError) {
    return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
  }
  // Check if is Logged
  if (!isLogged) {
    return <Redirect to="/join" />;
  }
  if (accountMatches && networkMatches && cryptotypeId !== null) {
    if (history.location.pathname !== '/deposit' && !hasDeposit) return <Redirect to="/deposit" />;
    if (rest.path === history.location.pathname && acceptedRole) return <Layout {...rest} />;
    if (!acceptedRole) return <Redirect to="/" />;
  } else {
    // on case the connection with web3 are not ok or we have the correct conection but are different wallets
    // eslint-disable-next-line
    if (
      // eslint-disable-next-line
      history.location.pathname !== '/verify-web3' &&
      (cryptotypeId === CryptoWallets.NotConnected || unlocked)
    ) {
      return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
    }
  }
  // On case account not match and network not match
  console.log('>>>> checks : ', hasDeposit, accountMatches, networkMatches);

  return (
    <SpecialDimmer active inverted>
      <Loader>
        <p>Loading app</p> Checking your wallet connection
      </Loader>
    </SpecialDimmer>
  );
};

export default withRouter(Web3Layout);
