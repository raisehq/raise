import WalletLink from 'walletlink';

export const connectCoinbase = async (setProvider, network) => {
  const walletLink = new WalletLink({
    appName: 'Raise.it',
    appLogoUrl: `https://${process.env.REACT_APP_HOST_IMAGES}/favicons/favicon.ico`
  });
  const ethereum = walletLink.makeWeb3Provider(
    `https://${network}.infura.io/v3/${process.env.REACT_APP_INFURA}`,
    1
  );
  await setProvider(ethereum);
};

export const connectMetamask = async (setProvider, conn) => {
  await setProvider(conn);
};

export const connectOpera = async (setProvider, conn) => {
  await setProvider(conn);
};
