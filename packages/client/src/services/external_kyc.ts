import axios from 'axios';
import { to } from '../utils';

const HOST = 'https://test-api.sumsub.com';

export const getToken = async () => {
  console.log(new Buffer('hero_francesco_vivoli_test:r5ov3ry00d').toString('base64'));

  const config: any = {
    url: `${HOST}/resources/auth/login`,
    crossDomain: true,
    method: 'POST',
    //headers: { Authorization: `Basic ${base64.encode(`${login}:${password}`)}` }
    //headers: { Authorization: `Basic ${base64.encode(`hero_francesco_vivoli_test:r5ov3ry00d`)}` }
    headers: {
      Accept: '*/*',
      Authorization: `Basic ${new Buffer('hero_francesco_vivoli_test:r5ov3ry00d').toString(
        'base64'
      )}`
    }
  };

  console.log(config);

  const request = await to(axios(config));

  request.fold(error => console.log(error), success => console.log(success));
};
