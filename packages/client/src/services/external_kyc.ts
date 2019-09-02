import axios from 'axios';
import { to } from '../utils';

//const HOST = 'https://test-api.sumsub.com';

export const getToken = async () => {
  const config: any = {
    url: `http://localhost:9000`,
    method: 'GET'
  };

  const request = await to(axios(config));

  return request.fold(error => console.log(error), success => success.data.data.token);
};
