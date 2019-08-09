import React, { createContext } from 'react';
import App from './App';
import { withRouter, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

export const MainContext = createContext({});

const Main = ({ children, history }) => {
  return (
    <MainContext.Provider value={{ history }}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/join" component={App} />
        <Route exact path="/login" component={App} />
        <Route exact path="/join/verify/token/:token" component={App} />
        <Route exact path="/join/password/reset/:token" component={App} />
      </Switch>
    </MainContext.Provider>
  );
};

export default withRouter(Main);
