import Observable from './observable';
import { refreshToken } from '../services/auth'; // eslint-disable-line

const observer = new Observable();

const memoRequest = {
  token: undefined,
  response: undefined
};
/* eslint-disable */
const MemorizeRefresh = (token) =>
  new Promise((resolve, reject) => {
    if (token === memoRequest.token) return resolve(memoRequest.response);

    const handleResponse = (error, resp) => {
      observer.unsubscribe(handleResponse);
      if (error) {
        memoRequest.token = undefined;
        memoRequest.response = undefined;
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
