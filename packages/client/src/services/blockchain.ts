import axios from './common';
import axiosRaw from 'axios';
import { getWeb3 } from '../utils';
import { getHost } from '../utils/index';
import Header from '../helpers/header';

const COMMON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
export const URL = {
  DEPOSIT_CHECK: `${getHost('CORE')}/blockchain/deposit/check`,
  DEPOSIT_ADDRESS: `${getHost('CORE')}/blockchain/deposit/address`,
  THEGRAPH: `${getHost('THEGRAPH')}`
};

export const requestSignature = async () => {
  try {
    const web3 = getWeb3();
    const address = (await web3.eth.getAccounts())[0];
    const message = 'Prove to Raise platform that you own this address.';
    const signature = await web3.eth.personal.sign(message, address, '');
    return { address, signature };
  } catch (error) {
    console.error(error);
    throw new Error(`Error making signature: ${error.message}`);
  }
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
    throw new Error('Error request client to server stack : ' + error.message);
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
    throw new Error('Error request client to server stack : ' + error.message);
  }
};

export const getReferralStatus = async address => {
  const config: any = {
    url: URL.THEGRAPH,
    method: 'POST',
    headers: {},
    data: {
      query: `
        {
          users(where: {address:"${address}"}) {
            id
            referrals {
              referred {
                id
              }
              
            }
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
    throw new Error('Error request client to server stack : ' + error.message);
  }
};
