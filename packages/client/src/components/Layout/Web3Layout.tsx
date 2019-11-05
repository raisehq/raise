import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import AppContext from '../AppContext';
//import useWeb3Check from '../../hooks/useWeb3Checker';

const Web3Layout = ({ history, layout: Layout, exact, roles, marketplace, ...rest }: any) => {
  const {
    store: {
      auth: {
        login: { logged: isLogged }
      },
      user: {
        details: { accounttypeId }
      }
    },
    web3State: { hasDeposit, accountMatches, networkMatches }
  }: any = useContext(AppContext);
  console.log('#################', hasDeposit, accountMatches, networkMatches);
  const acceptedRole = (roles !== undefined && roles.indexOf(accounttypeId) > -1) || false;

  // Check if is Logged
  if (!isLogged) {
    return <Redirect to="/join" />;
  }

  if (accountMatches && networkMatches) {
    console.log('COMPONETNT', rest.component);
    if (rest.path === history.location.pathname) return <Layout {...rest} />;
    if (!hasDeposit) return <Redirect to="/deposit" />;
    if (!acceptedRole) return <Redirect to="/dashboard" />; // TODO: What is this ??
    if (acceptedRole) return <Layout exact {...rest} />;
  }
  // On case account not match and network not match
  console.log('>>>> checks : ', hasDeposit, accountMatches, networkMatches);
  if (history.location.pathname !== '/verify-web3') {
    return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
  }

  return null;
};

export default withRouter(Web3Layout);
