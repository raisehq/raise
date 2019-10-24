import React, { useCallback, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { LabelWeb3 } from './Web3Address.styles';
import AppContext from '../AppContext';

const Web3Address = props => {
  const {
    web3Status: { networkMatches, network, account }
  }: any = useContext(AppContext);
  console.log('ADDRESS ', account);
  const iconColor = networkMatches ? 'green' : 'red';
  const getShortAddress = useCallback(
    () =>
      account && account.lenght > 0
        ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
        : '0x0000...0000',
    [account]
  );

  return (
    <LabelWeb3 {...props}>
      <Icon name="circle" color={iconColor} alt={network} />
      {getShortAddress()}
    </LabelWeb3>
  );
};

export default Web3Address;
