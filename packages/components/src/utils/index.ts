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

export const to = (promise: any) => {
  return promise
    .then((data: any) => {
      return Right(data);
    })
    .catch((err: any) => {
      return Left(err);
    });
};
