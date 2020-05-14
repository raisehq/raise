import Observable from './observable';
import { refreshToken } from '../services/auth'; // eslint-disable-line

const observer = new Observable();

interface MemoRequest {
  token: null | string;
  response: any;
}

const memoRequest: MemoRequest = {
  token: null,
  response: null
};
/* eslint-disable */
const MemorizeRefresh = (token: string) =>
  new Promise((resolve, reject) => {
    if (token === memoRequest.token) return resolve(memoRequest.response);

    const handleResponse = (error: any, resp: any) => {
      observer.unsubscribe(handleResponse);
      if (error) {
        memoRequest.token = null;
        memoRequest.response = null;
        return reject(error);
      }
      memoRequest.token = token;
      memoRequest.response = resp;
      return resolve(resp);
    };

    observer.oneExec(refreshToken);
    observer.subscribe(handleResponse);
  });
/* eslint-enable */
export default MemorizeRefresh;
