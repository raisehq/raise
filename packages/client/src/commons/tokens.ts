const { REACT_APP_HOST_IMAGES } = process.env;

const TOKEN_URLS = {
  DAI: `${REACT_APP_HOST_IMAGES}/images/coins/coin-dai.svg`,
  USDT: `${REACT_APP_HOST_IMAGES}/images/coins/coin-theter.svg`,
  USDC: `${REACT_APP_HOST_IMAGES}/images/coins/coin-usdc.svg`,
  ETH: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg'
};

export default TOKEN_URLS;
