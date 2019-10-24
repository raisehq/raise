import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import AppContext from '../AppContext';

const Web3Route = ({ history, layout: Layout, exact, roles, marketplace, ...rest }: any) => {
  const {
    store: {
      auth: {
        login: { logged }
      },
      user: {
        details: { accounttypeId }
      }
    },
    web3Status: { accountMatches: accMatch, networkMatches: netOk }
  }: any = useContext(AppContext);

  const web3Pass = netOk && accMatch;

  const acceptedRole = (roles !== undefined && roles.indexOf(accounttypeId) > -1) || false;

  if (logged && web3Pass && acceptedRole) {
    return <Layout exact {...rest} />;
  }

  if (logged && web3Pass && !acceptedRole) {
    return <Redirect to="/dashboard" />;
  }

  if (logged && !web3Pass && history.location.pathname !== '/verify-web3') {
    return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
  }

  return null;
};

export default withRouter(Web3Route);
