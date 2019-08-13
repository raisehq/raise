import LocalData from '../helpers/localData';
import Web3 from 'web3';
import { match, ANY } from 'pampy';

const HOSTS: any = {
  AUTH: process.env.REACT_APP_HOST_URL_AUTH,
  CORE: process.env.REACT_APP_HOST_URL_CORE,
  FILE: process.env.REACT_APP_HOST_URL_FILE,
  APP: process.env.REACT_APP_HOST_URL,
  THEGRAPH: process.env.REACT_APP_HOST_THEGRAPH
};

const THEGRAPH_IDS: any = {
  KOVAN: process.env.REACT_APP_THEGRAPH_ID_KOVAN,
  MAINNET: process.env.REACT_APP_THEGRAPH_ID_MAIN,
  GOERLI: process.env.REACT_APP_THEGRAPH_ID_GOERLI,
};

export function getGraphEndpoint(network: string) {
  return `${HOSTS.THEGRAPH}${THEGRAPH_IDS[network.toUpperCase()]}`;
}

export function getHost(name: string) {
  if (process.env.REACT_APP_MOCK_API === 'true') {
    return 'http://localhost:3000';
  }
  return HOSTS[name];
}
export const getImages = name =>
  `${process.env.REACT_APP_HOST_IMAGES}/images/${name}`;

export function getMimeType(base64: string) {
  const mime = base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  if (mime && mime.length) {
    return mime[1];
  }
  return '';
}
export function isBrowser() {
  return (
    typeof window !== 'undefined' &&
    {}.toString.call(window) === '[object Window]'
  );
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

export const getWeb3 = () => {
  if (!!window['web3Instance'] && !!window['web3Instance'].currentProvider) {
    return window['web3Instance'];
  }
  const provider = window['ethereum']
    ? window['ethereum']
    : (window['web3'] && window['web3'].currentProvider) || null;
  const web3Instance = new Web3(provider, undefined, {
    transactionConfirmationBlocks: 1
  });
  if (!!web3Instance.currentProvider) {
    window['web3Instance'] = web3Instance;
    return web3Instance;
  }
  return null;
};


export const averageBlockTime = async () => {
  const web3 = getWeb3();
  const network = parseNetwork(await web3.eth.net.getId());
  return match(network,
    'kovan', () => 4,
    ANY, () => 15
  )
};

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
    default:
      return 'private';
  }
};