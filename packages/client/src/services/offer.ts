import axios from './common';
import { getHost, to, Left, Right } from '../utils/index';

const URL = {
  LOAN: `${getHost('CORE')}/loan`,
  OFFER: `${getHost('CORE')}/offer`
};

export const getAllOffersByLoanId = async loanId => {
  const config: any = {
    url: `${URL.OFFER}/loan/${loanId}`,
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

export const getOfferById = async loanId => {
  const config: any = {
    url: `${URL.OFFER}/${loanId}`,
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

export const addOffer = async offer => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios.post(`${URL.OFFER}`, offer, config));

  return response.fold(
    error => Left(error),
    response => Right(response.data.result)
  );
};

export const removeOffer = async offerId => {
  const config: any = {
    url: `${URL.OFFER}/${offerId}`,
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return to(axios(config));
};
