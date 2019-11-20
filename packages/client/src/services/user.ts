import axios from './common';
import { AddressTypes } from '../store/store.types';
import { getHost, to, Left } from '../utils/index';
import CryptoWallets from '../commons/cryptoWallets';

const URL = {
  ADDRESS: `${getHost('CORE')}/address`,
  ADDRESS_TYPES: `${getHost('CORE')}/address/types`,
  USER: `${getHost('CORE')}/users`,
  CRYPTOADDRESS: `${getHost('CORE')}/cryptoaddress`
};

export const getAddressTypes = async (): Promise<AddressTypes> => {
  const config: any = {
    url: URL.ADDRESS_TYPES,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(
    error => Left(error),
    ({ data: { data } }) => data
  );
};

export const getUser = async (userId: string | undefined) => {
  const config: any = {
    url: `${URL.USER}/${userId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await to(axios(config));

  return response.fold(
    error => Left(error),
    ({ data: { data } }) => data
  );
};

export const getUserDetails = async (userId: string | undefined) => {
  const config: any = {
    url: `${URL.USER}/${userId}/details`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const response = await to(axios(config));

  return response.fold(
    error => Left(error),
    ({ data: { data } }) => data
  );
};

export const allAddressesByUser = async userId => {
  const config: any = {
    url: `${URL.ADDRESS}/user/${userId}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(
    error => Left(error),
    ({ data: { data } }) => data
  );
};

export const addAddress = async address => {
  const config: any = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  const response = await to(axios.post(`${URL.ADDRESS}/addinfo`, address, config));

  return response.fold(
    error => Left(error),
    ({ data: { data } }) => data
  );
};

export const removeAddress = async addressId => {
  const config: any = {
    url: `${URL.ADDRESS}/${addressId}`,
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(
    error => Left(error),
    ({ data: { data } }) => data
  );
};

export const updateUser = async (userId, body: any) => {
  const config: any = {
    url: `${URL.USER}/${userId}`,
    method: 'PUT',
    data: body,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios(config);
};

export const updatePassword = async (userId, data: any) => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return axios.put(`${URL.USER}/password/change/${userId}`, data, config);
};

export const cryptoAddressByAccount = async userId => {
  const config: any = {
    url: `${URL.CRYPTOADDRESS}/user/${userId}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  try {
    const rawResponse = await axios(config);
    switch (rawResponse.status) {
      case 200:
        if (rawResponse.data.data.length === 0) {
          // Empty response
          return {
            address: null,
            cryptotypeId: CryptoWallets.NotConnected
          };
        }
        // eslint-disable-next-line
        const {
          id,
          address,
          herouser_id: herouserId,
          cryptotype_id: walletId
        } = rawResponse.data.data.pop();

        return {
          id,
          herouserId,
          address,
          cryptotypeId:
            walletId !== null && walletId !== undefined ? walletId : CryptoWallets.NotConnected
        };
      default:
        throw new Error(rawResponse.data.message || 'User Unauthorized');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error);
  }
};

export const addCryptoAddress = async body => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const rawResponse = await axios.post(`${URL.CRYPTOADDRESS}/`, body, config);

    switch (rawResponse.status) {
      case 201:
        // eslint-disable-next-line
        const {
          id,
          address,
          herouser_id: herouserId,
          cryptotype_id: walletId
        } = rawResponse.data.data;

        return {
          id,
          herouserId,
          address,
          cryptotypeId: walletId
        };
      default:
        throw new Error(rawResponse.data.message || 'User Unauthorized');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const updateCryptoAddress = async (cryptoAddressId, body: any) => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const rawResponse = await axios.put(`${URL.CRYPTOADDRESS}/${cryptoAddressId}`, body, config);
  try {
    switch (rawResponse.status) {
      case 204:
        return rawResponse.data.data;
      default:
        throw new Error(rawResponse.data.message || 'User Unauthorized');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

// TODO : Deprecated
export const getReferralAddress = async referrerCode => {
  const config: any = {
    params: {
      referrerCode
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const rawResponse = await axios.get(`${URL.USER}/referral/lookup`, config);
  try {
    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data;
      default:
        throw new Error(rawResponse.data.message || 'User Unauthorized');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

// TODO: Deprecated
export const getUsersReferrerByCryptoAddress = async (address: string[]) => {
  const config: any = {
    url: `${URL.USER}/referrer`,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      address
    }
  };
  const rawResponse = await axios(config);
  try {
    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data;
      default:
        throw new Error(rawResponse.data.message || 'User Unauthorized');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};
