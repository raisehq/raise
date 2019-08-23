import user from './user';
import auth from './auth';
import kyc from './kyc';
import blockchain from './blockchain';
import config from './config';
import loan from './loan';

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})
  }
}

export default combineReducers({
  config,
  user,
  auth,
  kyc,
  blockchain,
  loan
});
