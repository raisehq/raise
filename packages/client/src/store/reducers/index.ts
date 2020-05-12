import user from './user';
import auth from './auth';
import kyc from './kyc';
import blockchain from './blockchain';
import config from './config';
import loan from './loan';
import dai from './dai';
import onboarding from './onboarding';
import loanDispatcher from './loanDispatcher';

const combineReducers = (reducers) => (state = {}, action) =>
  Object.keys(reducers).reduce((nextState, key) => {
    // eslint-disable-next-line
    nextState[key] = reducers[key](state[key], action);
    return nextState;
  }, {});

export default combineReducers({
  config,
  user,
  auth,
  kyc,
  blockchain,
  loan,
  dai,
  onboarding,
  loanDispatcher
});
