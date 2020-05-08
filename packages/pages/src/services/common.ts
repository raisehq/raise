import axios from 'axios';
import LocalData from '../helpers/localData';
import MemorizeRefresh from '../helpers/memorizeRefresh'; // eslint-disable-line

const DEFAULT_RETRY_TIMES = 1;

const getBearer = (token: string) => `Bearer ${token}`;

const instance = axios.create({
  headers: { 'X-Custom-Header': 'dashboard' }
});

// @ts-ignore
// eslint-disable-next-line
// window.Cypress && AxiosMock(instance);

const useBearer = config => {
  const { token } = LocalData.getObj('auth') || '{}';
  if (token) {
    // eslint-disable-next-line
    config.headers['Authorization'] = getBearer(token);
  }
  return config;
};

const useError = error => Promise.reject(error);

instance.interceptors.request.use(useBearer, useError);

/* eslint-disable */
instance.interceptors.response.use(
  response => response,
  async error => {
    if (
      error.response.status === 500 ||
      error.response.status === 418 ||
      error.response.status === 409
    ) {
      return Promise.reject(error.response.status);
    }

    if (error.response.status === 401) {
      const auth = LocalData.getObj('auth') || '{}';
      const { config } = error;

      if (auth.token) {
        const rejectUser = () => {
          LocalData.remove('auth');
          LocalData.remove('user');
          return (window.location.href = '/');
        };
        try {
          if (!config || config.retry === false) {
            return new Error(error.response.status);
          }

          if (config.headers['Authorization'] !== getBearer(auth.token)) {
            config.headers['Authorization'] = getBearer(auth.token);
            return axios.request(config);
          }

          config.__retryCount = config.__retryCount || 0;

          if (config.__retryCount >= DEFAULT_RETRY_TIMES) return rejectUser();
          config.__retryCount += 1;

          const { JwtToken }: any = await MemorizeRefresh(auth.token);
          if (!JwtToken) throw new Error('TOKEN_UNDEFINED');
          const new_auth = {
            ...auth,
            token: JwtToken
          };
          LocalData.setObj('auth', new_auth);
          config.headers['Authorization'] = getBearer(JwtToken);
          return instance.request(config);
        } catch (err) {
          return Promise.reject(401);
        }
      }
      return Promise.reject(401);
    } else {
      return Promise.resolve(error.response);
    }
  }
);
/* eslint-enable */
export default instance;
