import Observable from './observable';
import { refreshToken } from '../services/auth';

const observer = new Observable();

const memoRequest = {
  token: undefined,
  response: undefined
};

const MemorizeRefresh = token =>
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

export default MemorizeRefresh;
