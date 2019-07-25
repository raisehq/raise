import { requestSignature, getReferralStatus } from '../../services/blockchain';
import {
  addCryptoAddress,
  getUsersReferrerByCryptoAddress
} from '../../services/user';
import { to } from '../../utils/index';

export default (dispatch: any, state: any) => {
  const {
    config: { targetAddressId },
    auth: { id },
    user: {
      cryptoAddress: { address }
    }
  } = state;

  const setCheckBlockchain = response =>
    dispatch({ type: 'SET_BLOCKCHAIN_CHECK', response });
  const setDeposit = response => {
    return dispatch({ type: 'SET_BLOCKCHAIN_DEPOSIT', response });
  };
  const setErrorDeposit = response => {
    return dispatch({ type: 'SET_ERROR_BLOCKCHAIN_DEPOSIT', response });
  };
  const setKyc = response => {
    return dispatch({ type: 'SET_BLOCKCHAIN_KYC', response });
  };
  const setErrorKyc = response => {
    return dispatch({ type: 'SET_ERROR_BLOCKCHAIN_KYC', response });
  };

  const uploadSignature = async () => {
    const signature = await to(requestSignature());
    await signature.fold(
      () =>
        dispatch({
          type: 'ERROR_SIGNATURE_REQUEST'
        }),
      async ({ address, signature }) => {
        const body = {
          herouser_id: id,
          cryptotype_id: targetAddressId,
          address,
          signature
        };
        try {
          const response = await addCryptoAddress(body);
          return dispatch({
            type: 'SET_CRYPTO_ADDRESS_BY_ACCOUNT',
            data: response
          });
        } catch (error) {
          return dispatch({ type: 'ERROR_SAVE_CRYPTOADDRESS', error });
        }
      }
    );
  };

  const fetchReferrals = async () => {
    try {
      const data = await getReferralStatus(address);
      if (data) {
        const addressReferals = data.referrals.map(referral => {
          return referral.referred.id;
        });
        const refUsers = await getUsersReferrerByCryptoAddress(addressReferals);
        return dispatch({
          type: 'SET_REFERAL_DATA',
          data: {
            referrals: refUsers,
            totalReferralsCount: data.totalReferralsCount,
            totalBountyToWithdraw: data.totalBountyToWithdraw
          }
        });
      } else {
        return dispatch({
          type: 'SET_REFERAL_DATA',
          data: {
            referrals: [],
            totalReferralsCount: 0,
            totalBountyToWithdraw: 0
          }
        });
      }
    } catch (error) {
      return dispatch({ type: 'ERROR_REFERAL_DATA' });
    }
  };
  return {
    setDeposit,
    setErrorDeposit,
    setKyc,
    setErrorKyc,
    setCheckBlockchain,
    uploadSignature,
    fetchReferrals
  };
};
