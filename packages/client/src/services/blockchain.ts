import axiosRaw from 'axios';
import axios from './common';

import { getHost, getGraphEndpoint } from '../utils';
import Header from '../helpers/header';
// import AxiosMock from '../__mocks__/axiosMocks';

// // @ts-ignore
// // eslint-disable-next-line
// window.Cypress && AxiosMock(axiosRaw);

const COMMON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
export const URL = {
  DEPOSIT_CHECK: `${getHost('CORE')}/blockchain/deposit/check`,
  DEPOSIT_ADDRESS: `${getHost('CORE')}/blockchain/deposit/address`,
  THEGRAPH: `${getHost('THEGRAPH')}`
};

export const checkDeposit = async () => {
  const config: any = {
    url: `${URL.DEPOSIT_CHECK}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data;
      case 404:
        return {};
      default:
        throw new Error(rawResponse.data.message || 'Error checkStatus');
    }
  } catch (error) {
    throw new Error(`Error request client to server stack : ${error.message}`);
  }
};

export const getDepositAddress = async () => {
  const config: any = {
    url: `${URL.DEPOSIT_ADDRESS}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  try {
    const rawResponse = await axios(config);

    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data;
      default:
        throw new Error(rawResponse.data.message || 'Error checkStatus');
    }
  } catch (error) {
    throw new Error(`Error request client to server stack : ${error.message}`);
  }
};

export const getReferralTracker = async (network) => {
  const config: any = {
    url: getGraphEndpoint(network),
    method: 'POST',
    headers: {},
    data: {
      query: `
      {
        referralTrackers {
          bonusTokenAddress
        }
      }
      `
    }
  };
  try {
    const rawResponse = await axiosRaw(config);
    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data.referralTrackers.pop();
      default:
        throw new Error(rawResponse.data.message || 'Error fetch contracts');
    }
  } catch (error) {
    throw new Error(`Error request client to server stack : ${error.message}`);
  }
};

export const getReferralStatus = async (address, network) => {
  const config: any = {
    url: getGraphEndpoint(network),
    method: 'POST',
    headers: {},
    data: {
      query: `
        {
          users(where: {address:"${address}"}) {
            id
            totalBountyWithdrawn
            totalReferralsCount
            totalBountyToWithdraw
          }
        }`
    }
  };
  try {
    const rawResponse = await axiosRaw(config);
    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data.users.pop();
      default:
        throw new Error(rawResponse.data.message || 'Error fetch contracts');
    }
  } catch (error) {
    throw new Error(`Error request client to server stack : ${error.message}`);
  }
};

export const getLoanByAddress = async (address, network) => {
  const config: any = {
    url: getGraphEndpoint(network),
    method: 'POST',
    headers: {},
    data: {
      query: `
        {
          loans(where: {address:"${address}"}) {
            state
            principal
            maxAmount
            operatorFee
            termEndTimestamp
            netBalance
            auctionEnded
            interestRate
            borrowerDebt
            investorCount
            id
            minimumReached
            auctionLength
            auctionStartTimestamp
            auctionEndTimestamp
            termLength
            minInterestRate
            maxInterestRate
            operatorBalance
            originator
            tokenAddress
          }
        }`
    }
  };

  try {
    // TODO: mock axios raw someway
    let rawResponse: any = {};
    // @ts-ignore
    if (window.Cypress) {
      // @ts-ignore
      // eslint-disable-next-line prefer-destructuring
      console.log('mock api::: ', window.AxiosMockResponses[4][3]);

      // @ts-ignore
      // eslint-disable-next-line prefer-destructuring
      rawResponse.data = window.AxiosMockResponses[4][3];

      // @ts-ignore
      rawResponse.data.data.loans[0].id = window.InvestLoanAddress;
      rawResponse.status = 200;
    } else {
      rawResponse = await axiosRaw(config);
    }

    switch (rawResponse.status) {
      case 200:
        return rawResponse.data.data.loans.pop();
      default:
        throw new Error(rawResponse.data.message || 'Error fetch contracts');
    }
  } catch (error) {
    throw new Error(`Error request client to server stack : ${error.message}`);
  }
};
