import web3Utils from 'web3-utils';
import ABI_ERC20 from '../commons/erc20';
import BigNumber from 'bignumber.js';

export function isAddress(value: any) {
  try {
    return web3Utils.isAddress(value);
  } catch {
    return false;
  }
}

export function getContract(address: any, abi: any, library: any) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return new library.eth.Contract(abi, address);
}

export async function getEtherBalance(address: any, library: any) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'`);
  }
  return library.eth.getBalance(address);
}

export async function getTokenBalance(
  tokenAddress: any,
  address: any,
  library: any
) {
  if (!isAddress(tokenAddress) || !isAddress(address)) {
    throw Error(
      `Invalid 'tokenAddress' or 'address' parameter '${tokenAddress}' or '${address}'.`
    );
  }

  return getContract(tokenAddress, ABI_ERC20, library)
    .methods.balanceOf(address)
    .call();
}

export const toDecimal = (
  etherAmount: string | number | BigNumber,
  factor = 18
): string =>
  new BigNumber(etherAmount)
    .multipliedBy(new BigNumber('10').pow(new BigNumber(factor.toString())))
    .toString();

export const fromDecimal = (
  decimal: string | number | BigNumber,
  factor = 18
): string =>
  new BigNumber(decimal)
    .div(new BigNumber('10').pow(new BigNumber(factor.toString())))
    .toString();
