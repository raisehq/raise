import { Keccak } from 'sha3';
import ABI_ERC20 from '../commons/erc20';
import BigNumber from 'bignumber.js';

const sha3 = value => {
  return new Keccak(256).update(value).digest('hex');
};

export const isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // Check if it has the basic requirements of an address
    return false;
  } else if (
    /^(0x)?[0-9a-f]{40}$/.test(address) ||
    /^(0x)?[0-9A-F]{40}$/.test(address)
  ) {
    // If it's all small caps or all all caps, return true
    return true;
  } else {
    // Otherwise check each case
    return isChecksumAddress(address);
  }
};

export const isChecksumAddress = function(address) {
  // Check each case
  address = address.replace('0x', '');
  let addressHash = sha3(address.toLowerCase());

  for (let i = 0; i < 40; i++) {
    // The nth letter should be uppercase if the nth digit of casemap is 1
    if (
      (parseInt(addressHash[i], 16) > 7 &&
        address[i].toUpperCase() !== address[i]) ||
      (parseInt(addressHash[i], 16) <= 7 &&
        address[i].toLowerCase() !== address[i])
    ) {
      return false;
    }
  }
  return true;
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
