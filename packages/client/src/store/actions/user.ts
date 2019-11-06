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
    config: { targetAddressId },
    auth: { id, status }
  } = state;

  const onGetAddressTypes = async () => {
    const response = await to(getAddressTypes());

    return response.fold(() => null, data => dispatch({ type: 'GET_ADDRESS_TYPES', data }));
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
      const cryptoaddress = await cryptoAddressByAccount(id, targetAddressId);
      if (cryptoaddress) {
        dispatch({
          type: 'SET_CRYPTO_ADDRESS_BY_ACCOUNT',
          data: cryptoaddress
        });
      }
    } catch (error) {
      console.error('ERROR : ', error);
    }
  };

  const onRemoveAddress = async userId => {
    const response = await removeAddress(userId);

    response.fold(() => null, () => onGetAllAddressesByUser());
  };

  const onSetInitialUserData = data => {
    dispatch({ type: 'SET_INITIAL_USER_DATA', data });
  };

  const onUpdateUser = async (userId, body) => {
    dispatch({ type: 'SET_USER_LOADING', data: true });
    try {
      const response = await updateUser(userId, body);
      response.fold(
        ({
          response: {
            data: { message }
          }
        }) => {
          dispatch({ type: 'UPDATE_USER', data: { success: false, message, loading: false } });
        },
        ({
          data: {
            data: { user }
          }
        }) => dispatch({ type: 'UPDATE_USER', data: { success: true, user, loading: false } })
      );
    } catch {
      dispatch({ type: 'SET_PASS_LOADING', data: true });
    }
  };

  const onUpdatePassword = async (userId, body) => {
    dispatch({ type: 'SET_PASS_LOADING', data: true });
    try {
      const response = await updatePassword(userId, body);
      response.fold(
        ({
          response: {
            data: { message }
          }
        }) => dispatch({ type: 'UPDATE_PASSWORD', data: { success: false, message, loading: false } }),
        () => dispatch({ type: 'UPDATE_PASSWORD', data: { success: true, loading: false } })
      );
    } catch {
      dispatch({ type: 'SET_PASS_LOADING', data: true });
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
    onGetUserFromBC
  };
};
