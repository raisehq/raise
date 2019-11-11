import LocalData from '../helpers/localData';
import { browserName } from 'react-device-detect';
import axios from 'axios';
import moment from 'moment';

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
  MAINNET: process.env.REACT_APP_THEGRAPH_ID_DAI_MAINNET
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

export const Left = (x: any) => ({
  map: () => Left(x),
  fold: (f: any) => f(x),
  inspect: () => `Left(${x})`
});

export const Either = {
  either: (coor: any) => (coor ? Right(true) : Left(false))
};

export const to = (promise: any) => {
  return promise
    .then((data: any) => {
      return Right(data);
    })
    .catch((err: any) => {
      return Left(err);
    });
};

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

export const isSupportedBrowser = () =>
  ['brave', 'chrome', 'chromium', 'firefox'].some(supportedBrowser =>
    browserName.toLowerCase().includes(supportedBrowser)
  );

const HERO_CONTRACTS =
  'https://blockchain-definitions.s3-eu-west-1.amazonaws.com/v4/contracts.json';

export const getContractsDefinition = async () => {
  const remoteContracts = await axios.get(HERO_CONTRACTS);
  // @ts-ignore
  const contractsDef = window.Cypress ? window.contracts : remoteContracts.data;
  return contractsDef;
};

const addDays = (datetime, days) => {
  const date = new Date(datetime.getTime());
  date.setDate(date.getDate() + days);
  return date;
};

export const getDates = (startDate: Date, stopDate) => {
  const dateArray: Date[] = [];
  let currentDate: Date = new Date(startDate.getTime());
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return dateArray;
};

export const getClosestIndexByDate = (dateList, targetDate) => {
  const tempDiff = dateList.map(d => Math.abs(moment(d).diff(moment(targetDate))));
  const index = tempDiff.indexOf(Math.min(...tempDiff));
  return index;
};

export const getMediana = numbers => {
  if (!numbers.length) {
    return 0;
  }
  let median = 0;
  const count = numbers.length;
  numbers.sort();

  if (count % 2 === 0) {
    median = (numbers[count / 2 - 1] + numbers[count / 2]) / 2;
  } else {
    median = numbers[(count - 1) / 2];
  }

  return median;
};

export const getAverage = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
