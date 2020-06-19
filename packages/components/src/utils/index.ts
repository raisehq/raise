import axios from 'axios';

export const Right = (x: any) => ({
  map: (f: any) => Right(f(x)),
  // @ts-ignore
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

export const getIP = async () => {
  try {
    const ipJson = await axios('https://api.ipify.org?format=jsonp?', {
      method: 'GET',
      headers: {}
    });

    return ipJson.data;
  } catch (error) {
    throw error;
  }
};
