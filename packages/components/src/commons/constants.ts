export const DAI_ADDRESS = '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643';
export const IMAGES_PATH = `${process.env.REACT_APP_HOST_IMAGES}/images/`;

type erc20Logos = {
  [key: string]: string;
};

export const ERC20_LOGOS: erc20Logos = {
  DAI: `${IMAGES_PATH}coins/coin-dai.svg`,
  PAX: `${IMAGES_PATH}coins/coin-pax.svg`,
  USDT: `${IMAGES_PATH}coins/coin-theter.svg`,
  TUSD: `${IMAGES_PATH}coins/coin-trueusd.svg`,
  USDC: `${IMAGES_PATH}coins/coin-usdc.svg`,
};
