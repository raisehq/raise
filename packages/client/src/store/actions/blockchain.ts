import { getReferralStatus, getReferralTracker } from '../../services/blockchain';
import { addCryptoAddress } from '../../services/user';
import { getContractsDefinition } from '../../utils';

export default (dispatch: any, state: any) => {
  const {
    auth: { id },
    user: {
      cryptoAddress: { address }
    }
  } = state;

  const setWeb3 = (newWeb3) => dispatch({ type: 'SET_WEB3', data: newWeb3 });
  const setNewInstance = (instances) => dispatch({ type: 'SET_INSTANCE', data: instances });
  const setCheckBlockchain = (response) => dispatch({ type: 'SET_BLOCKCHAIN_CHECK', response });
  const setDeposit = (response) => dispatch({ type: 'SET_BLOCKCHAIN_DEPOSIT', response });
  const setErrorDeposit = (response) =>
    dispatch({ type: 'SET_ERROR_BLOCKCHAIN_DEPOSIT', response });
  const setKyc = (response) => dispatch({ type: 'SET_BLOCKCHAIN_KYC', response });
  const setErrorKyc = (response) => dispatch({ type: 'SET_ERROR_BLOCKCHAIN_KYC', response });

  const uploadSignature = async (walletAddress, walletId, signature) => {
    try {
      const body = {
        herouser_id: id,
        cryptotype_id: walletId,
        address: walletAddress,
        signature
      };
      const response = await addCryptoAddress(body);
      return dispatch({
        type: 'SET_CRYPTO_ADDRESS_BY_ACCOUNT',
        data: response
      });
    } catch (error) {
      return dispatch({ type: 'ERROR_SAVE_CRYPTOADDRESS', error });
    }
  };

  const fetchReferralTrackerInfo = async (network) => {
    try {
      const data = await getReferralTracker(network);
      return dispatch({
        type: 'SET_REFERAL_TRACKER_DATA',
        data: {
          // referrals: finalUsers,
          referralTokenAddress: data.bonusTokenAddress
        }
      });
    } catch (error) {
      return dispatch({ type: 'ERROR_REFERAL_DATA' });
    }
  };

  const onFetchReferralsSubscription = (error, data) => {
    if (error) {
      console.log('[onFetchReferralsSubscription] error: ', error);
    } else if (data) {
      dispatch({
        type: 'SET_REFERAL_DATA',
        data: {
          // referrals: [],
          totalReferralsCount: data.users[0].totalReferralsCount,
          totalBountyToWithdraw: data.users[0].totalBountyToWithdraw
        }
      });
    }
  };

  const fetchReferrals = async (network) => {
    try {
      const data = await getReferralStatus(address, network);
      if (data) {
        return dispatch({
          type: 'SET_REFERAL_DATA',
          data: {
            // referrals: finalUsers,
            totalReferralsCount: data.totalReferralsCount,
            totalBountyToWithdraw: data.totalBountyToWithdraw
          }
        });
      }
      return dispatch({
        type: 'SET_REFERAL_DATA',
        data: {
          // referrals: [],
          totalReferralsCount: 0,
          totalBountyToWithdraw: 0
        }
      });
    } catch (error) {
      return dispatch({ type: 'ERROR_REFERAL_DATA' });
    }
  };

  const fetchContracts = async () => {
    try {
      const contracts = await getContractsDefinition();

      return dispatch({
        type: 'SET_CONTRACTS_DATA',
        data: contracts
      });
    } catch (error) {
      return dispatch({ type: 'ERROR_CONTRACTS_DATA' });
    }
  };

  return {
    setWeb3,
    setDeposit,
    setErrorDeposit,
    setKyc,
    setErrorKyc,
    setCheckBlockchain,
    uploadSignature,
    fetchReferrals,
    fetchContracts,
    setNewInstance,
    fetchReferralTrackerInfo,
    onFetchReferralsSubscription
  };
};
