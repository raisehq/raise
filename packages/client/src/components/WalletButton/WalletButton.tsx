import React from 'react';

import {
	WalletButton,
	WalletIcon,
	WalletText,
	WalletName
} from './style';
import { Icon } from 'semantic-ui-react';

const WalletConnectButton = ({ walletName, walletIcon, onClickAction }: any) => {
	console.log(walletIcon)
	return (
		<WalletButton
			onClick={onClickAction}
		>
			<WalletName>
				<WalletIcon src={walletIcon} />
				<WalletText>{walletName}</WalletText>
			</WalletName>
			<Icon size="large" name="external alternate" />
		</WalletButton>
	);
}

export default WalletConnectButton;
