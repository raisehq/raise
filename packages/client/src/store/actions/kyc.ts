import { initKyc, isKYCVerified, connect } from '../../services/kyc';

export default (dispatch: any, state: any) => {
  const {
    kyc: { token }
  } = state;
  const { id, email } = state.user.details;

  const onInitKyc = async () => {
    const data = await initKyc(id);
    return dispatch({ type: 'SET_KYC_TOKEN', data });
  };

  const onConnect = async () => {
    await connect(id, email, token);
  };

  const onKYCVerified = async () => {
    isKYCVerified(id, token);
  };

  return { onKYCVerified, onInitKyc, onConnect };
};
