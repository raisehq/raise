export const DAI_ADDRESS = process.env.REACT_APP_DAI_ADDRESS;
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

export const COMPANY_LOGOS: erc20Logos = {
  Compound: `${IMAGES_PATH}companies/compound-logo.png`,
  Maker: `${IMAGES_PATH}companies/maker.svg`,
  Raise: `${IMAGES_PATH}isotype.png`,
  dYdX: `${IMAGES_PATH}companies/dydx-vector-logo.png`,
  Fulcrum: `${IMAGES_PATH}companies/bZx-Logo.jpg`,
};
