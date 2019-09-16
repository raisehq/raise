import axios from 'axios';
import Header from '../helpers/header';
import { to, getHost } from '../utils';

const HOST = `${getHost('CORE')}/kyc`;

const COMMON_HEADERS = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const initKyc = async id => {
  const config: any = {
    url: `${HOST}/auth/${id}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(error => console.log(error), success => success.data.data.token);
};

export const connect = async (userId, email, token) => {
  const config: any = {
    url: `${HOST}/connect/${userId}/${email}/${token}`,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const request = await to(axios(config));

  return request.fold(error => console.log(error), success => console.log(success));
};

export const isKYCVerified = async (userId, token) => {
  const config: any = {
    url: `${HOST}/isverified/${userId}/${token}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(error => console.log(error), success => console.log(success));
};
