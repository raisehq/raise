import { getReferralStatus } from '../../services/blockchain';
import { addCryptoAddress, getUsersReferrerByCryptoAddress } from '../../services/user';
import { getContractsDefinition } from '../../utils';

export default (dispatch: any, state: any) => {
  const {
    auth: { id },
    user: {
      cryptoAddress: { address }
    }
  } = state;
  const setWeb3 = newWeb3 => dispatch({ type: 'SET_WEB3', data: newWeb3 });
  const setNewInstance = instances => dispatch({ type: 'SET_INSTANCE', data: instances });
  const setCheckBlockchain = response => dispatch({ type: 'SET_BLOCKCHAIN_CHECK', response });
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

  const fetchReferrals = async network => {
    try {
      const data = await getReferralStatus(address, network);
      if (data) {
        const addressReferrals = data.referrals.map(referral => {
          return referral.referred.id.toLowerCase();
        });
        const refUsers = await getUsersReferrerByCryptoAddress(addressReferrals);

        let addrNotFound = refUsers.filter(
          refUser => addressReferrals.indexOf(refUser.address) === -1
        );
        addrNotFound = addrNotFound.map(addr => ({
          name: undefined,
          address: addr
        }));
        const finalUsers = [...refUsers, ...addrNotFound];

        return dispatch({
          type: 'SET_REFERAL_DATA',
          data: {
            referrals: finalUsers,
            totalReferralsCount: data.totalReferralsCount,
            totalBountyToWithdraw: data.totalBountyToWithdraw
          }
        });
      }
      return dispatch({
        type: 'SET_REFERAL_DATA',
        data: {
          referrals: [],
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
    setNewInstance
  };
};
