import WalletLink from 'walletlink';

export const connectCoinbase = (setProvider, network) => {
  const walletLink = new WalletLink({
    appName: 'Raise.it',
    appLogoUrl: `https://${process.env.REACT_APP_HOST_IMAGES}/favicons/favicon.ico`
  });
  const ethereum = walletLink.makeWeb3Provider(
    `https://${network}.infura.io/v3/${process.env.REACT_APP_INFURA}`,
    1
  );
  setProvider(ethereum);
};

export const connectMetamask = (setProvider, conn) => {
  setProvider(conn);
};

export const connectOpera = (setProvider, conn) => {
  setProvider(conn);
};
