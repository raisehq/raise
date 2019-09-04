import axios from 'axios';
import { to } from '../utils';

const HOST = `http://localhost:10000/api/kyc`;

export const initKyc = async id => {
  const config: any = {
    url: `${HOST}/auth/${id}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
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
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const request = await to(axios(config));

  return request.fold(error => console.log(error), success => console.log(success));
};
