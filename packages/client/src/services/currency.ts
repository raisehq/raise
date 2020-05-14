import axios from './common';
import { getHost, to, Left, Right } from '../utils/index';

const URL = {
  LOAN: `${getHost('CORE')}/loan`,
  EXCHANGE_ETH: `${getHost('CORE')}/loan/exchange-rates/currency=ETH`
};

export const getCurrencyTypes = async (): Promise<any> => {
  const config: any = {
    url: `${URL.LOAN}/currencytypes`,
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(
    (error) => Left(error),
    ({ data: { data } }) => Right(data)
  );
};

export const getEthereumPrice = async () => {
  const config: any = {
    url: URL.EXCHANGE_ETH,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(
    (error) => Left(error),
    (data) => Right(data.data.data)
  );
};
