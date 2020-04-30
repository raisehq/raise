import { Keccak } from 'sha3';
import BigNumber from 'bignumber.js';
import ABI_ERC20 from '../commons/erc20';

const sha3 = value => new Keccak(256).update(value).digest('hex');

export const isChecksumAddress = address => {
  // Check each case
  const notAddress = address.replace('0x', '');
  const addressHash = sha3(notAddress.toLowerCase());

  for (let i = 0; i < 40; i += 1) {
    // The nth letter should be uppercase if the nth digit of casemap is 1
    if (
      (parseInt(addressHash[i], 16) > 7 &&
        notAddress[i].toUpperCase() !== notAddress[i]) ||
      (parseInt(addressHash[i], 16) <= 7 &&
        notAddress[i].toLowerCase() !== notAddress[i])
    ) {
      return false;
    }
  }
  return true;
};

export const isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // Check if it has the basic requirements of an address
    return false;
  }
  if (
    /^(0x)?[0-9a-f]{40}$/.test(address) ||
    /^(0x)?[0-9A-F]{40}$/.test(address)
  ) {
    // If it's all small caps or all all caps, return true
    return true;
  }
  // Otherwise check each case
  return isChecksumAddress(address);
};

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
