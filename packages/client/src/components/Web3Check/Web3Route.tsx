import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import {AppContext} from '../App';
import { NotAllowed } from '../NotAllowed';

const Route = (props) => {
  const { history, layout, exact, ...rest }: any = props;
  const {web3Status : { accountMatches: accMatch, networkMatches: netOk } }: any = useContext(AppContext);
  const web3Pass = netOk && accMatch;
  const refMode = (process.env.REACT_APP_REFERAL == 'true');
  const Layout = layout;
  if (web3Pass) {
     return <Layout exact {...rest} />
  }
  if (history.location.pathname !== '/verify-web3') {
    const redirectUrl = refMode ? '/verify-web3' : `/verify-web3?redirect=${history.location.pathname}`;
    return <NotAllowed to={redirectUrl} />
  }
  return null;
}

export default withRouter(Route);