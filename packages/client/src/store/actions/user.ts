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
  cryptoAddressByAccount
} from '../../services/user';

export default (dispatch: any, state: Store) => {
  const {
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

  const onAddNewAddress = async address => {
    /*const newAddress = {
      ...address,
      herouser_id: id,
      datajson: JSON.stringify({
        ...address.datajson,
        address2: '',
        country: countries.filter(({ key }) => key === address.country_id)[0]
      })
    };

    const response = await to(addAddress(newAddress));

    response.fold(() => null, () => onGetAllAddressesByUser());*/
  };

  const onAddNewCryptoAddress = async cryptoaddress => {
    /*if (
      initialState.user.details.cryptoAddress.address ===
      state.user.details.cryptoAddress.address
    ) {
      const body = {
        account_id: state.account.details.account.id,
        address,
        cryptotype_id: state.account.details.cryptoAddress.cryptoTypeId,
        signature
      };

      const response = await to(addCryptoAddress(body));

      response.fold(
        () => null,
        data => {
          dispatch({
            type: 'SET_CRYPTO_ADDRESS_BY_ACCOUNT',
            data
          });
        }
      );
    } else {
      const body = {
        account_id: state.account.details.account.id,
        address,
        signature
      };

      const response = await to(
        updateCryptoAddress(
          state.account.details.cryptoAddress.id,
          body
        )
      );

      response.fold(
        () => null,
        data => {
          dispatch({
            type: 'SET_CRYPTO_ADDRESS_BY_ACCOUNT',
            data
          });
        }
      );
    }*/
  };

  const onGetCryptoAddressByUser = async () => {
    try {
      const cryptoaddress = await cryptoAddressByAccount(id, 2);
      if (cryptoaddress && cryptoaddress.address) {
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

  const onUpdateUser = async (field, value) => {
    /*const data: any = { ...user, [field]: value };

    const response = await to(updateUser(id, data));

    response.fold(
      () => null,
      data => {
        dispatch({ type: 'SET_USER_DETAILS', data });

        LocalData.setObj('user', {
          email: data.user.email,
          firstname: data.user.firstname,
          lastname: data.user.lastname,
          id: data.user.id
        });
      }
    );*/
  };

  return {
    onAddNewAddress,
    onGetAddressTypes,
    onUpdateUser,
    onGetUserDetails,
    onSetInitialUserData,
    onRemoveAddress,
    onAddNewCryptoAddress,
    updateCryptoAddress,
    onGetCryptoAddressByUser,
    onGetUser,
    onGetUserFromBC
  };
};
