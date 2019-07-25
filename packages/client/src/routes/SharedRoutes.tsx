import React from 'react';
import { Route } from 'react-router-dom';
import { checkAuth } from '../utils';
import App from '../components/App';

const Shared = ({ component: PrivatedComponent, ...props }: any) => {
  return <PrivatedComponent {...props} />;
};

const SharedRoute = ({
  privatedComponent: PrivatedComponent,
  publicComponent: PublicComponent,
  ...params
}: any) => (
  <Route
    {...params}
    render={() => {
      return checkAuth() ? (
        <App>
          <Shared {...params} component={PrivatedComponent} />
        </App>
      ) : (
        <PublicComponent {...params} />
      );
    }}
  />
);

export default SharedRoute;
