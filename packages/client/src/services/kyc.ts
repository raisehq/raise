import axios from 'axios';
import Header from '../helpers/header';
import { to, getHost } from '../utils';

export const URL = {
  AUTH: `${getHost('CORE')}/kyc/auth`,
  CONNECT: `${getHost('CORE')}/kyc/connect`,
  VERIFY: `${getHost('CORE')}/kyc/isverified`,
  BLOOM_KYC: `${getHost('CORE')}/kyc/bloom/verification`
};

const COMMON_HEADERS = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const initKyc = async id => {
  const config: any = {
    url: `${URL.AUTH}/${id}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(
    error => console.error(error),
    success => success.data.data.token
  );
};

export const connect = async (userId, email, token) => {
  const config: any = {
    url: `${URL.CONNECT}/${userId}/${email}/${token}`,
    method: 'POST',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(
    error => console.error(error),
    success => console.log(success)
  );
};

export const isKYCVerified = async (userId, token) => {
  const config: any = {
    url: `${URL.VERIFY}/${userId}/${token}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(
    error => console.error(error),
    success => console.log(success)
  );
};
