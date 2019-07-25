import auth from './auth';
import kyc from './kyc';
import blockchain from './blockchain';
import user from './user';
import config from './config';

export default (dispatch, state) => ({
  config: config(dispatch, state),
  auth: auth(dispatch, state),
  user: user(dispatch, state),
  kyc: kyc(dispatch, state),
  blockchain: blockchain(dispatch, state)
});
