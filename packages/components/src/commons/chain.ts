import mapValues from 'lodash/mapValues';
import mapKeys from 'lodash/mapKeys';

const chainableFunctions = {
  mapKeys,
  mapValues,
};

const chain = (input: any) => {
  let value: any = input;
  const wrapper = {
    ...mapValues(chainableFunctions, (f: any) => (...args: any[]) => {
      // lodash always puts input as the first argument
      value = f(value, ...args);
      return wrapper;
    }),
    value: () => value,
  };
  return wrapper;
};

export default { chain };
