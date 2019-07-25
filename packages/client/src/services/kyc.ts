import axios from './common';
import { getHost, getMimeType } from '../utils/index';
import Header from '../helpers/header';
import qs from 'qs';
import * as Types from '../store/store.types';

const COMMON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
export const URL = {
  ADDRESS: `${getHost('CORE')}/address`,
  INFORMATION: `${getHost('CORE')}/kyc`,
  UPLOAD: `${getHost('FILE')}/file/b64`,
  CHECK: `${getHost('CORE')}/kyc/isverified/`
};

export const checkStatus = async ({ userId }: Types.CheckStatus) => {
  const config: any = {
    url: `${URL.CHECK}${userId}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data;
        break;
      case 404:
        return {
          statusId: 0,
          requestId: ''
        };
        break;
      default:
        throw new Error(rawResponse.data.message || 'Error checkStatus');
        break;
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const setAddress = async (data: any) => {
  const config: any = {
    url: URL.ADDRESS,
    method: 'POST',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() },
    data
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 201:
        return rawResponse.data.data;
        break;
      default:
        throw new Error(rawResponse.data.message || 'Error setAddress');
        break;
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const setInformation = async (data: any) => {
  const config: any = {
    url: URL.INFORMATION,
    method: 'POST',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() },
    data: {
      ...data,
      kycdetailjson: JSON.stringify(data.kycdetailjson)
    }
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 201:
        return rawResponse.data.data;
        break;
      default:
        throw new Error(rawResponse.data.message || 'Error setInformation');
        break;
    }
  } catch (error) {
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const uploadFiles = async ({ userId, data }: any) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    ...Header.getHeaderAuth()
  };

  try {
    const filesUpload = Object.keys(data.files || {}).map(name => {
      const fileBase64 = data.files[name];
      const extension = getMimeType(fileBase64)
        .split('/')
        .pop();
      return fetch(URL.UPLOAD, {
        method: 'POST',
        headers,
        body: qs.stringify({
          herouser_id: userId,
          type_id: 1,
          filename: `${name}.${extension}`,
          size: 5,
          base64: data.files[name]
        })
      });
    });

    const calls = await Promise.all(filesUpload);
    const jsonCalls = await Promise.all(calls.map(resp => resp.json()));
    const resp = jsonCalls.reduce(
      (prev, next) => {
        if (next.data) {
          prev.success.push({ [next.data.filename]: next.data.id });
        } else {
          prev.error.push(next);
        }
        return prev;
      },
      { error: [], success: [] }
    );

    if (resp.error.length > 0) {
      throw new Error(
        `Failed files ${resp.error.length} success ${resp.success.length}`
      );
    }
    return resp.success;
  } catch (err) {
    throw new Error(err.message || 'Failed upload files ');
  }
};
