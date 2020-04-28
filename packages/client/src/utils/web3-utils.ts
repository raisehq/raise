import web3Utils from 'web3-utils';
import BigNumber from 'bignumber.js';
import ABI_ERC20 from '../commons/erc20';

BigNumber.config({ EXPONENTIAL_AT: 1e9 });
const CONTRACTCACHE = {};

export function isAddress(value) {
  try {
    return web3Utils.isAddress(value);
  } catch {
    return false;
  }
}

export function getContract(address, abi, library) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  if (CONTRACTCACHE[address]) {
    return CONTRACTCACHE[address];
  }
  const newContract = new library.eth.Contract(abi, address);
  CONTRACTCACHE[address] = newContract;
  return newContract;
}

export async function getEtherBalance(address, library) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'`);
  }
  return library.eth.getBalance(address);
}

export async function getTokenBalance(tokenAddress, address, library) {
  if (!isAddress(tokenAddress) || !isAddress(address)) {
    throw Error(`Invalid 'tokenAddress' or 'address' parameter '${tokenAddress}' or '${address}'.`);
  }
  return getContract(tokenAddress, ABI_ERC20, library)
    .methods.balanceOf(address)
    .call();
}

export const toDecimal = (etherAmount: string | number | BigNumber, factor = 18): string =>
  new BigNumber(etherAmount)
    .multipliedBy(new BigNumber('10').pow(new BigNumber(factor.toString())))
    .toString();

export const fromDecimal = (decimal: string | number | BigNumber, factor = 18): string =>
  new BigNumber(decimal).div(new BigNumber('10').pow(new BigNumber(factor.toString()))).toString();

export const fromDecimalFixed = (decimal: string | number | BigNumber, factor = 18): string =>
  new BigNumber(decimal)
    .div(new BigNumber('10').pow(new BigNumber(factor.toString())))
    .toFixed(2, BigNumber.ROUND_DOWN);
