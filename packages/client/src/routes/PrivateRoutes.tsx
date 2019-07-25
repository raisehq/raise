import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LocalData from '../helpers/localData';
import { accountType } from '../commons/accountType';
import App from '../components/App';

const Private = ({
  component: PrivatedComponent,
  accountType,
  ...props
}: any) => {
  return <PrivatedComponent {...props} />;
};

const PrivateComponent = ({ component: Component, allow, ...props }: any) => (
  <Route
    {...props}
    render={() => {
      const auth = LocalData.getObj('auth');

      return auth && (allow === 'all' || allow === accountType[auth.type]) ? (
        <App>
          <Private {...props} component={Component} accountType={auth.type} />
        </App>
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      );
    }}
  />
);

export default PrivateComponent;
