import axios from 'axios';
import { isMobile } from 'react-device-detect';
import Header from '../helpers/header';
import { to, getHost } from '../utils';

export const URL = {
  AUTH: `${getHost('CORE')}/kyc/auth`,
  CONNECT: `${getHost('CORE')}/kyc/connect`,
  VERIFY: `${getHost('CORE')}/kyc/isverified`,
  BLOOM_KYC: `${getHost('CORE')}/kyc/bloom/verification`,
  BLOOM_SIGN_IN: `${getHost('CORE')}/kyc/scan`,
  REDIRECT: `${getHost('APP')}/login/bloom/:token`
};

const COMMON_HEADERS = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const initKyc = async (id) => {
  const config: any = {
    url: `${URL.AUTH}/${id}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(
    (error) => console.error(error),
    (success) => success.data.data.token
  );
};

export const connect = async (userId, email, token) => {
  const config: any = {
    url: `${URL.CONNECT}/${userId}/${email}/${token}`,
    method: 'POST',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(
    (error) => console.error(error),
    (success) => console.log(success)
  );
};

export const isKYCVerified = async (userId, token) => {
  const config: any = {
    url: `${URL.VERIFY}/${userId}/${token}`,
    method: 'GET',
    headers: { ...COMMON_HEADERS, ...Header.getHeaderAuth() }
  };

  const request = await to(axios(config));

  return request.fold(
    (error) => console.error(error),
    (success) => console.log(success)
  );
};

export const bloomSignIn = () => URL.BLOOM_SIGN_IN;

const checkDappBrowserCallback = (token) => {
  // @ts-ignore
  if (window.web3 && window.web3.currentProvider.isMetaMask) {
    return `https://metamask.app.link/dapp/raise.it/login/bloom/${token}`;
  }
  // @ts-ignore
  if (window.web3 && window.web3.currentProvider.isTrust) {
    return `https://link.trustwallet.com/open_url?coin_id=60&url=https://raise.it/login/bloom/${token}`;
  }
  // @ts-ignore
  if (window.web3 && window.web3.currentProvider.isStatus) {
    return `status-im://browse/raise.it//login/bloom/${token}`;
  }
  return URL.REDIRECT.replace(':token', token);
};

export const redirectFromBloomApp = (token) => {
  if (isMobile) {
    return checkDappBrowserCallback(token);
  }
  return URL.REDIRECT.replace(':token', token);
};
