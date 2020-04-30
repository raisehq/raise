import { to } from '../../utils/index';
import { Status as UserStatus } from '../../commons/userStatus';
import { Store } from '../store.types';
import {
  getAddressTypes,
  getUserDetails,
  getUser,
  allAddressesByUser,
  removeAddress,
  updateCryptoAddress,
  cryptoAddressByAccount,
  updateUser,
  updatePassword
} from '../../services/user';

export default (dispatch: any, state: Store) => {
  const {
    auth: { id, status }
  } = state;

  const onGetAddressTypes = async () => {
    const response = await to(getAddressTypes());

    return response.fold(
      () => null,
      data => dispatch({ type: 'GET_ADDRESS_TYPES', data })
    );
  };

  const onGetUserDetails = async () => {
    const Method = status < UserStatus.EMAIL_VERIFIED ? getUser(id) : getUserDetails(id);

    try {
      const response = await Method;
      const data = response.user ? response : { user: response };

      dispatch({ type: 'SET_USER_DETAILS', data });
    } catch (error) {
      console.error('ERROR : ', error);
    }
  };

  const onGetUserFromBC = async (error, data) => {
    if (error) {
      return console.error('[onGetUserFromBC] error on get user subs :: ', error);
    }

    if (data && data.users && data.users.length > 0 && data.users[0].kyced) {
      dispatch({ type: 'SET_USER_DETAILS', data: { kyc_status: 3 } });
    }
    return true;
  };

  const onGetUser = async () => {
    try {
      const data = await getUser(id);
      dispatch({ type: 'SET_USER_DETAILS', data });
    } catch (error) {
      console.error('ERROR : ', error);
    }
  };

  const onGetAllAddressesByUser = async () => {
    const addresses = await allAddressesByUser(id);
    dispatch({ type: 'SET_ALL_ADDRESSES_BY_USER', data: addresses });
  };

  const onGetCryptoAddressByUser = async () => {
    try {
      const cryptoaddress = await cryptoAddressByAccount(id);
      dispatch({
        type: 'SET_CRYPTO_ADDRESS_BY_ACCOUNT',
        data: cryptoaddress
      });
    } catch (error) {
      console.error('ERROR : ', error);
    }
  };

  const onRemoveAddress = async userId => {
    const response = await removeAddress(userId);

    response.fold(
      () => null,
      () => onGetAllAddressesByUser()
    );
  };

  const onSetInitialUserData = data => {
    dispatch({ type: 'SET_INITIAL_USER_DATA', data });
  };

  const clearUser = () => {
    dispatch({ type: 'SET_USER_LOADING', data: false });
  };

  const clearPass = () => {
    dispatch({ type: 'SET_PASS_LOADING', data: false });
  };

  const onUpdateUser = async (userId, body) => {
    dispatch({ type: 'SET_USER_LOADING', data: true });
    try {
      const {
        data: {
          success,
          message,
          data: { user: details }
        }
      } = await updateUser(userId, body);

      dispatch({ type: 'UPDATE_USER', data: { success, message, loading: false, details } });
    } catch (error) {
      dispatch({ type: 'SET_PASS_LOADING', data: false });
      if (error.response) {
        const {
          response: {
            data: {
              data: { success, message }
            }
          }
        } = error;
        dispatch({ type: 'UPDATE_USER', data: { success, message, loading: false } });
      }
    }
  };

  const onUpdatePassword = async (userId, body) => {
    dispatch({ type: 'SET_PASS_LOADING', data: true });
    try {
      const {
        data: { success, message }
      } = await updatePassword(userId, body);
      dispatch({ type: 'UPDATE_PASSWORD', data: { success, message, loading: false } });
    } catch (error) {
      dispatch({ type: 'SET_PASS_LOADING', data: { loading: false } });
      if (error.response) {
        const {
          response: {
            data: {
              data: { success, message }
            }
          }
        } = error;
        dispatch({ type: 'UPDATE_PASSWORD', data: { success, message, loading: false } });
      }
    }
  };

  return {
    onGetAddressTypes,
    onUpdateUser,
    onUpdatePassword,
    onGetUserDetails,
    onSetInitialUserData,
    onRemoveAddress,
    updateCryptoAddress,
    onGetCryptoAddressByUser,
    onGetUser,
    onGetUserFromBC,
    clearPass,
    clearUser
  };
};
