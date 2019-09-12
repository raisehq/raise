import axios from './common';
import { getHost, to, Left, Right, Either } from '../utils/index';
import LocalData from '../helpers/localData';
import * as Types from '../store/store.types';

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
  VERIFY: `${getHost('AUTH')}/jwt/verify`,
  EMAIL: `${getHost('CORE')}/users/email/token/validate/:id`,
  CREATE_EMAIL: `${getHost('CORE')}/users/email/token/send/:id`,
  USER: `${getHost('CORE')}/users`,
  REFRESH: `${getHost('AUTH')}/jwt/refresh`,
  CHECK_USERNAME: `${getHost('AUTH')}/users/username/exists?username=`,
  CHECK_EMAIL: `${getHost('AUTH')}/users/email/exists`
};

export const signUp = async (data: Types.onSignup) => {
  const config: any = {
    url: URL.REGISTER,
    method: 'POST',
    ...COMMON_HEADERS,
    data
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 200:
      case 201:
        return rawResponse.data.data;
      default:
        throw new Error(rawResponse.data.message || 'Error user creation');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const signIn = async (data: Types.onSignin) => {
  const config: any = {
    url: URL.AUTHENTICATE,
    method: 'POST',
    ...COMMON_HEADERS,
    data
  };

  try {
    const rawResponse = await axios(config);

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

export const recovery = async ({ email }: Types.onRecovery) => {
  const config: any = {
    url: `${URL.RECOVERY}/${email}`,
    method: 'GET',
    ...COMMON_HEADERS
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 200:
        return rawResponse.data;
      default:
        throw new Error(rawResponse.data.message || 'Recovery');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const changePassword = async (token, password) => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await to(
    axios.put(`${URL.CHANGE_PASSWORD}`, { token, password: password.password }, config)
  );

  return response.fold(error => Left(error), () => Right(true));
};

export const validateToken = async ({ token }: Types.ValidateToken) => {
  const config: any = {
    url: URL.EMAIL.replace(':id', token),
    method: 'GET',
    ...COMMON_HEADERS
  };

  try {
    const rawResponse = await axios(config);
    switch (rawResponse.status) {
      case 200:
        return rawResponse.data;
      default:
        throw new Error(rawResponse.data.message || 'Error ValidateToken');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};
export const updateToken = async ({ token }: Types.UpdateToken) => {
  const config: any = {
    url: URL.CREATE_EMAIL.replace(':id', token),
    method: 'GET',
    ...COMMON_HEADERS
  };

  try {
    const rawResponse = await axios(config);
    switch (rawResponse.status) {
      case 200:
        return rawResponse.data;
      default:
        throw new Error(rawResponse.data.message || 'Error UpdateToken');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
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

export const refreshToken = async () => {
  const config: any = {
    url: `${URL.REFRESH}`,
    method: 'POST',
    retry: false,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {}
  };

  try {
    const rawResponse = await axios(config);
    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data;
      default:
        throw new Error(rawResponse.data || 'Error UpdateToken');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const verifyAuth = async () => {
  if (LocalData.getObj('auth') === null) {
    throw new Error('Not logged in');
  }
  const config: any = {
    url: `${URL.VERIFY}`,
    method: 'POST',
    retry: false,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {}
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data;
      default:
        throw new Error(rawResponse.data || 'Error verify auth token');
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
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

  return request.fold(() => Left(null), request => Either.either(request.data.exist === 0));
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
    () => Left(null),
    request => (request.status === 404 ? Right('Not exist') : Left('Exist'))
  );
};
