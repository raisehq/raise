import axios from 'axios';
import { to } from '../utils';
import Header from '../helpers/header';

const HOST = `http://localhost:10000/api/kyc`;

const COMMON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

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
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
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
