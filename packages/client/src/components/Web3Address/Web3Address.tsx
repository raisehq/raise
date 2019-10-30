import React, { useCallback, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { LabelWeb3 } from './Web3Address.styles';
import AppContext from '../AppContext';

const Web3Address = props => {
  const {
    store: {
      config: { network },
      user: {
        cryptoAddress: { address }
      }
    }
  }: any = useContext(AppContext);
  // console.log('ADDRESS ', address);
  const iconColor = true ? 'green' : 'red';
  const getShortAddress = useCallback(
    () =>
      address && address.lenght > 0
        ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
        : '0x0000...0000',
    [address]
  );

  return (
    <LabelWeb3 {...props}>
      <Icon name="circle" color={iconColor} alt={network} />
      {getShortAddress()}
    </LabelWeb3>
  );
};

export default Web3Address;
