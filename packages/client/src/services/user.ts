import axios from './common';
import { AddressTypes } from '../store/store.types';
import { getHost, to, Left } from '../utils/index';

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

  return response.fold(error => Left(error), ({ data: { data } }) => data);
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

  return response.fold(error => Left(error), ({ data: { data } }) => data);
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

  return response.fold(error => Left(error), ({ data: { data } }) => data);
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

  return response.fold(error => Left(error), ({ data: { data } }) => data);
};

export const addAddress = async address => {
  const config: any = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  const response = await to(axios.post(`${URL.ADDRESS}/addinfo`, address, config));

  return response.fold(error => Left(error), ({ data: { data } }) => data);
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

  return response.fold(error => Left(error), ({ data: { data } }) => data);
};

export const updateUser = async (userId, data: any) => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios.put(`${URL.USER}/${userId}`, data, config));
  return response.fold(error => Left(error), ({ data: { data } }) => data);
};

/*
{
  id: "cryptoaddress:2b012587-7090-42e8-8158-55148f2f633f", 
  herouser_id: "user:772424bb-4a15-4643-8578-c848ea78e3ab", address: "0x251Ab686cf1A62Cee98bE2510955Cf68eB93E7a0", cryptotype_id: 2, site: null, …}
address: "0x251Ab686cf1A62Cee98bE2510955Cf68eB93E7a0"
created_on: "2019-10-22T03:33:16.429Z"
cryptotype_id: 2
deleted: 0
herouser_id: "user:772424bb-4a15-4643-8578-c848ea78e3ab"
id: "cryptoaddress:2b012587-7090-42e8-8158-55148f2f633f"
site: null

*/
export const cryptoAddressByAccount = async (userId, targetAddressId) => {
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
          return {
            address: null
          };
        }
        // eslint-disable-next-line
        const { id, address, herouser_id: herouserId } = rawResponse.data.data.find(
          d => d.cryptotype_id === targetAddressId
        );

        return {
          id,
          herouserId,
          address,
          cryptotypeId: targetAddressId
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
        return rawResponse.data.data;
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
