import axios from './common';
import { getHost, to, Left, Right } from '../utils/index';

const URL = {
  LOAN: `${getHost('CORE')}/loan`,
  LIST: `${getHost('CORE')}/search/loan/list`
};

export const getLoanTypes = async (): Promise<any> => {
  const config: any = {
    url: `${URL.LOAN}/types`,
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(error => Left(error), ({ data: { data } }) => data);
};

export const getPurposeTypes = async (): Promise<any> => {
  const config: any = {
    url: `${URL.LOAN}/purposetypes`,
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(error => Left(error), ({ data: { data } }) => data);
};

export const addLoan = async loan => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios.post(`${URL.LOAN}`, loan, config));

  return response.fold(() => 'error', ({ data: { data } }) => data);
};

export const getLoanByAccount = async accountId => {
  const config: any = {
    url: `${URL.LOAN}/loan/account/${accountId}`,
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(error => Left(error), ({ data: { data } }) => data);
};

export const getLoanById = async loanId => {
  const config: any = {
    url: `${URL.LOAN}/${loanId}`,
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(
    error => Left(error),
    response => Right(response.data.data)
  );
};

export const getAllLoans = async filters => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios.post(`${URL.LIST}`, filters, config));

  return response.fold(
    error => Left(error),
    response => Right(response.data.result)
  );
};

export const removeLoan = async loanId => {
  const config: any = {
    url: `${URL.LOAN}/${loanId}`,
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return to(axios(config));
};
