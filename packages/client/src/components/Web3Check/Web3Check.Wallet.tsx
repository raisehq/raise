import React, { useEffect, useState, useContext } from 'react';
import WalletLink from 'walletlink';
import { List, Button } from 'semantic-ui-react';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';

const Wallet = () => {
  const {
    store: {
      config: { network }
    }
  }: any = useContext(AppContext);
  const [provider, setProvider] = useState();
  const { enableWeb3, setNewProvider } = useWeb3();

  const handlerCoinbase = () => {
    console.log('CLICK?');
    const walletLink = new WalletLink({
      appName: 'Raise.it',
      appLogoUrl: `https://${process.env.REACT_APP_HOST_IMAGES}/favicons/favicon.ico`
    });
    const ethereum = walletLink.makeWeb3Provider(
      `https://${network}.infura.io/v3/${process.env.REACT_APP_INFURA}`,
      1
    );
    console.log('new provider:', ethereum);
    setProvider(ethereum);
  };

  useEffect(() => {
    if (provider) {
      console.log('ENTRA AQUI ???');
      setNewProvider(provider);
      enableWeb3();
    }
  }, [provider]);

  return (
    <List>
      <List.Item>
        <List.Content verticalAlign="middle">
          <Button size="small" color="green" onClick={handlerCoinbase}>
            Coinbase
          </Button>
        </List.Content>
      </List.Item>
    </List>
  );
};
export default Wallet;
