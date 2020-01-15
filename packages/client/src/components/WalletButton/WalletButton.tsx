import React from 'react';

import { WalletButton, WalletLinkIcon, WalletText, WalletName, WalletLogo } from './style';

const WalletConnectButton = ({ walletName, walletIcon, onClickAction }: any) => (
  <WalletButton onClick={onClickAction}>
    <WalletName>
      <WalletLogo src={walletIcon} />
      <WalletText>{walletName}</WalletText>
    </WalletName>
    <WalletLinkIcon src={`${process.env.REACT_APP_HOST_IMAGES}/images/external_link.svg`} />
  </WalletButton>
);

export default WalletConnectButton;
