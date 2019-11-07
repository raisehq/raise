import React, { useEffect, useState, useContext } from 'react';
import WalletLink from 'walletlink';
import { List, Button } from 'semantic-ui-react';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import CryptoWallets from '../../commons/cryptoWallets';

const Wallet = ({ onSelect }: any) => {
  const {
    store: {
      config: { network }
    }
  }: any = useContext(AppContext);
  const [provider, setProvider] = useState();
  const [defaultWallet, setDefaultWallet] = useState();
  const { getWeb3, setNewProvider, getDefaultWeb3 }: any = useWeb3();
  const web3 = getWeb3();

  useEffect(() => {
    console.log('web3 ------ ', getWeb3());
    // if (getWeb3()) onSelect();
    setDefaultWallet(getDefaultWeb3());
  }, [web3]);

  const handlerCoinbase = () => {
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

  const handlerMetamask = () => {
    setProvider(defaultWallet.conn.currentProvider);
  };

  const handlerOpera = () => {
    setProvider(defaultWallet.conn.currentProvider);
  };

  useEffect(() => {
    if (provider) {
      setNewProvider(provider).then(() => {
        onSelect();
      });
    }
  }, [provider]);

  return (
    <List>
      <List.Item>
        <List.Content verticalAlign="middle">
          <Button basic color="black" fluid onClick={handlerCoinbase}>
            Coinbase
          </Button>
          {defaultWallet && defaultWallet.name === CryptoWallets.Metamask && (
            <Button basic color="black" fluid onClick={handlerMetamask}>
              Metamask
            </Button>
          )}
          {defaultWallet && defaultWallet.name === CryptoWallets.Opera && (
            <Button basic color="black" fluid onClick={handlerOpera}>
              Opera Wallet
            </Button>
          )}
        </List.Content>
      </List.Item>
    </List>
  );
};
export default Wallet;
