import axios from 'axios';
import { getHost, to, Left, Right, Either } from '../utils/index';

const COMMON_HEADERS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

const URL = {
  REGISTER: `${getHost('CORE')}/users/register`,
  RECOVERY: `${getHost('AUTH')}/users/password/reset`,
  CHANGE_PASSWORD: `${getHost('AUTH')}/users/password/change`,
  AUTHENTICATE: `${getHost('AUTH')}/jwt/authenticate`,
  EMAIL: `${getHost('CORE')}/users/email/token/validate/:id`,
  CREATE_EMAIL: `${getHost('CORE')}/users/email/token/send/:id`,
  USER: `${getHost('CORE')}/users`,
  REFRESH: `${getHost('AUTH')}/jwt/refresh`,
  CHECK_USERNAME: `${getHost('AUTH')}/users/username/exists?username=`,
  CHECK_EMAIL: `${getHost('AUTH')}/users/email/exists`,
  CHECK_COUNTRYBLOCKED: `${getHost('AUTH')}/users/country/blocked?country_id=`,
  BLOOM_SIGN_IN: `${getHost('CORE')}/kyc/scan`,
  BLOOM_LOGIN: 'http://0.0.0.0:3001/bloom/authenticate'
};

export const signUp = async data => {
  const config: any = {
    url: URL.REGISTER,
    method: 'POST',
    ...COMMON_HEADERS,
    data
  };

  return await to(axios(config));
};

export const signIn = async data => {
  const config: any = {
    url: URL.AUTHENTICATE,
    method: 'POST',
    ...COMMON_HEADERS,
    data
  };

  return await to(axios(config));
};

export const recovery = async email => {
  const config: any = {
    url: `${URL.RECOVERY}/${email}`,
    method: 'GET',
    ...COMMON_HEADERS
  };

  return await to(axios(config));
};

export const changePassword = async (token, password) => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return await to(axios.put(`${URL.CHANGE_PASSWORD}`, { token, password: password }, config));
};

export const validateToken = async ({ token }) => {
  const config: any = {
    url: URL.EMAIL.replace(':id', token),
    method: 'GET',
    ...COMMON_HEADERS
  };

  return await to(axios(config));
};
export const updateToken = async token => {
  const config: any = {
    url: URL.CREATE_EMAIL.replace(':id', token),
    method: 'GET',
    ...COMMON_HEADERS
  };

  return await to(axios(config));
};

export const checkUsername = async username => {
  const config: any = {
    url: `${URL.CHECK_USERNAME}${username}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const request = await to(axios(config));

  return request.fold(
    () => Left(null),
    request => Either.either(request.data.exist === 0)
  );
};

export const checkEmail = async email => {
  const config: any = {
    url: `${URL.CHECK_EMAIL}/${email}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const request = await to(axios(config));

  return request.fold(
    () => Right('Not Exist'),
    () => Left('Exist')
  );
};

export const checkBlockedCountry = async countryid => {
  const config: any = {
    url: `${URL.CHECK_COUNTRYBLOCKED}${countryid}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const request = await to(axios(config));

  return request.fold(
    () => Left(null),
    request => Either.either(request.data.exist === 0)
  );
};

export const bloomSignIn = () => URL.BLOOM_SIGN_IN;

export const verifyBloomLogin = async tokenBloom => {
  const config: any = {
    url: `${URL.BLOOM_LOGIN}`,
    method: 'POST',
    ...COMMON_HEADERS,
    data: { bloom_id: tokenBloom }
  };

  return await to(axios(config));
};
