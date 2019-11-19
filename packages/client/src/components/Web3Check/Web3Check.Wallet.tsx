import React, { useEffect, useState, useContext } from 'react';

import { List, Button, Card } from 'semantic-ui-react';
import { CardTitle, CardCenteredText, CardPadded } from './Web3Check.styles';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import CryptoWallets from '../../commons/cryptoWallets';

const Wallet = ({ onNext }: any) => {
  const {
    store: {
      config: { network, networkId }
    }
  }: any = useContext(AppContext);
  const [defaultWallet, setDefaultWallet] = useState();
  const { web3, getDefaultWeb3, connectWallet }: any = useWeb3();

  useEffect(() => {
    setDefaultWallet(getDefaultWeb3());
  }, [web3]);

  const handlerCoinbase = async () => {
    await connectWallet(CryptoWallets.Coinbase, network, networkId);
    onNext();
  };

  const handlerMetamask = async () => {
    await connectWallet(CryptoWallets.Metamask, network, networkId);
    onNext();
  };

  const handlerOpera = async () => {
    await connectWallet(CryptoWallets.Opera, network, networkId);
    onNext();
  };

  return (
    <Card.Content>
      <CardCenteredText>
        <CardTitle>Select your wallet </CardTitle>
        <p>Get started by connecting one of the wallets below</p>
      </CardCenteredText>
      <Card.Content>
        <CardPadded>
          <List>
            <List.Item>
              <List.Content verticalAlign="middle">
                <Button basic color="black" fluid onClick={handlerCoinbase}>
                  Coinbase (BETA)
                </Button>
              </List.Content>
            </List.Item>
            {defaultWallet && defaultWallet.name === CryptoWallets.Metamask && (
              <List.Item>
                <List.Content verticalAlign="middle">
                  <Button basic color="black" fluid onClick={handlerMetamask}>
                    Metamask
                  </Button>{' '}
                </List.Content>
              </List.Item>
            )}
            {defaultWallet && defaultWallet.name === CryptoWallets.Opera && (
              <List.Item>
                <List.Content verticalAlign="middle">
                  <Button basic color="black" fluid onClick={handlerOpera}>
                    Opera Wallet
                  </Button>
                </List.Content>
              </List.Item>
            )}
          </List>
        </CardPadded>
      </Card.Content>
    </Card.Content>
  );
};
export default Wallet;
