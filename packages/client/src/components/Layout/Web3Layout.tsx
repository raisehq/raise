import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import AppContext from '../AppContext';
import useWeb3Check from '../../hooks/useWeb3Checker';

const Web3Layout = ({ history, layout: Layout, exact, roles, marketplace, ...rest }: any) => {
  const {
    store: {
      auth: {
        login: { logged: isLogged }
      },
      config: { network },
      user: {
        details: { accounttypeId },
        cryptoAddress: { address }
      }
    }
  }: any = useContext(AppContext);

  const { hasDeposit, accountMatches, networkMatches } = useWeb3Check(address, network);

  // const web3Pass = netOk && accMatch;

  const acceptedRole = (roles !== undefined && roles.indexOf(accounttypeId) > -1) || false;

  // Check if is Logged
  if (!isLogged && !address) return <Redirect to="/join" />;

  if (accountMatches && networkMatches) {
    if (!hasDeposit) return <Redirect to="/deposit" />;
    if (acceptedRole) return <Layout exact {...rest} />;
    if (!acceptedRole) return <Redirect to="/dashboard" />; // TODO: What is this ??
  }

  if (history.location.pathname !== '/verify-web3') {
    return <Redirect to={`/verify-web3?redirect=${history.location.pathname}`} />;
  }

  return null;
};

export default withRouter(Web3Layout);
