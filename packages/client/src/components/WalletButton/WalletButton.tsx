import React from 'react';

import { WalletButton, WalletLinkIcon, WalletText, WalletName, WalletLogo, WalletGreenButton, WalletGreenText } from './style';

const WalletConnectButton = ({ walletName, walletIcon, onClickAction, green }: any) => (
  !green ?
    (<WalletButton onClick={onClickAction}>
      <WalletName>
        <WalletLogo src={walletIcon} />
        <WalletText>{walletName}</WalletText>
      </WalletName>
      <WalletLinkIcon src={`${process.env.REACT_APP_HOST_IMAGES}/images/external_link.svg`} />
    </WalletButton>)
    : (<WalletGreenButton onClick={onClickAction}>
      <WalletName>
        <WalletGreenText>{walletName}</WalletGreenText>
      </WalletName>
      <WalletLinkIcon src={`${process.env.REACT_APP_HOST_IMAGES}/images/external_link_white.svg`} />
    </WalletGreenButton>)

);

export default WalletConnectButton;
