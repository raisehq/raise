import { browserName } from 'react-device-detect';
import axios from 'axios';
import CryptoWallets from '../commons/cryptoWallets';
import LocalData from '../helpers/localData';

const HOSTS: any = {
  AUTH: process.env.REACT_APP_HOST_URL_AUTH,
  CORE: process.env.REACT_APP_HOST_URL_CORE,
  FILE: process.env.REACT_APP_HOST_URL_FILE,
  APP: process.env.REACT_APP_HOST_URL,
  THEGRAPH: process.env.REACT_APP_HOST_THEGRAPH,
  THEGRAPHWS: process.env.REACT_APP_HOST_THEGRAPH_WS
};

const THEGRAPH_IDS: any = {
  KOVAN: process.env.REACT_APP_THEGRAPH_ID_KOVAN,
  MAINNET: process.env.REACT_APP_THEGRAPH_ID_MAIN,
  GOERLI: process.env.REACT_APP_THEGRAPH_ID_GOERLI
};

const THEGRAPH_DAI_IDS: any = {
  KOVAN: process.env.REACT_APP_THEGRAPH_ID_DAI_KOVAN,
  MAINNET: process.env.REACT_APP_THEGRAPH_ID_DAI_MAIN
};

export function getGraphEndpoint(network: string) {
  return `${HOSTS.THEGRAPH}${THEGRAPH_IDS[network.toUpperCase()]}`;
}

export function getGraphWSEndpoint(network: string) {
  return `${HOSTS.THEGRAPHWS}${THEGRAPH_IDS[network.toUpperCase()]}`;
}

export function getDaiWSEndpoint(network: string) {
  return `${HOSTS.THEGRAPHWS}${THEGRAPH_DAI_IDS[network.toUpperCase()]}`;
}

export function getHost(name: string) {
  if (process.env.REACT_APP_MOCK_API === 'true') {
    return 'http://localhost:3000';
  }
  return HOSTS[name];
}
export const getImages = name => `${process.env.REACT_APP_HOST_IMAGES}/images/${name}`;

export function getMimeType(base64: string) {
  const mime = base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  if (mime && mime.length) {
    return mime[1];
  }
  return '';
}
export function isBrowser() {
  return typeof window !== 'undefined' && {}.toString.call(window) === '[object Window]';
}

export const Right = (x: any) => ({
  map: (f: any) => Right(f(x)),
  fold: (f: any, g: any) => g(x),
  inspect: () => `Right(${x})`
});

/* eslint-disable */
// TODO : Check the logic of this function
export function safeAccess(object, path) {
  return object
    ? path.reduce(
        (accumulator, currentValue) =>
          accumulator && accumulator[currentValue] ? accumulator[currentValue] : null,
        object
      )
    : null;
}
/* eslint-enable */

export const Left = (x: any) => ({
  map: () => Left(x),
  fold: (f: any) => f(x),
  inspect: () => `Left(${x})`
});

export const Either = {
  either: (coor: any) => (coor ? Right(true) : Left(false))
};

export const to = (promise: any) => promise.then(Right).catch(Left);

export const checkAuth = () => LocalData.getObj('auth') !== null;

export const parseNetwork = id => {
  switch (id) {
    case 1:
      return 'mainnet';
    case 3:
      return 'ropsten';
    case 4:
      return 'rinkeby';
    case 5:
      return 'goerli';
    case 42:
      return 'kovan';
    case 6969:
      return 'test';
    default:
      return 'private';
  }
};

const LIST_BROWSERS = ['brave', 'chrome', 'chromium', 'firefox', 'opera'];
export const isSupportedBrowser = () =>
  LIST_BROWSERS.some(supportedBrowser => browserName.toLowerCase().includes(supportedBrowser));

const HERO_CONTRACTS: any = process.env.REACT_APP_METADATA_URL;

export const getContractsDefinition = async () => {
  const remoteContracts = await axios.get(HERO_CONTRACTS);
  // @ts-ignore
  const contractsDef = window.Cypress ? window.contracts : remoteContracts.data;
  return contractsDef;
};

export const getWalletName = walletId => {
  switch (walletId) {
    case CryptoWallets.Metamask:
      return 'Metamask';
    case CryptoWallets.Opera:
      return 'Opera';
    case CryptoWallets.Coinbase:
      return 'Coinbase';
    default:
      return 'Unknow';
  }
};
