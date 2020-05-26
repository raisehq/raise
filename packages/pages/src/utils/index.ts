export const getImages = (name: string) =>
  `${process.env.GATSBY_REACT_APP_HOST_IMAGES}/images/${name}`;

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

export const to = (promise: any) => promise.then(Right).catch(Left);

const HOSTS: any = {
  AUTH: process.env.GATSBY_REACT_APP_HOST_URL_AUTH,
  CORE: process.env.GATSBY_REACT_APP_HOST_URL_CORE,
  FILE: process.env.GATSBY_REACT_APP_HOST_URL_FILE,
  APP: process.env.GATSBY_REACT_APP_HOST_URL,
  THEGRAPH: process.env.GATSBY_REACT_APP_HOST_THEGRAPH,
  THEGRAPHWS: process.env.GATSBY_REACT_APP_HOST_THEGRAPH_WS
};

export function getHost(name: string) {
  if (process.env.GATSBY_REACT_APP_MOCK_API === 'true') {
    return 'http://localhost:3000';
  }
  return HOSTS[name];
}
