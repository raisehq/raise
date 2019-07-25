import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import App from '../components/App';
import NotFound from '../components/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/password/reset/:token" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route path="/" component={App} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
