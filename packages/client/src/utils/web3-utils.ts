import web3Utils from 'web3-utils';
import ABI_ERC20 from '../commons/erc20';

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
  return new library.eth.Contract(abi, address);
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
