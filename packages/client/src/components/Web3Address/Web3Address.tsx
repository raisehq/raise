import React, { useCallback } from 'react';
import { Icon } from 'semantic-ui-react';
import { LabelWeb3 } from './Web3Address.styles';
import { useRootContext } from '../../contexts/RootContext';
import { useAppContext } from '../../contexts/AppContext';
import { NULL_ADDRESS } from '../../commons/constants';

interface Web3AddressProps {
  account?: string;
  border?: boolean;
}

const Web3Address: React.FC<Web3AddressProps> = ({ account = null, border = true, ...rest }) => {
  const {
    store: {
      config: { network },
      user: {
        cryptoAddress: { address }
      }
    }
  }: any = useRootContext();
  const {
    web3Status: { networkMatches }
  }: any = useAppContext();

  const iconColor = networkMatches ? 'green' : 'red';
  const currentAddress = account || address || NULL_ADDRESS;

  const getShortAddress = useCallback(
    () =>
      `${currentAddress.substring(0, 6)}...${currentAddress.substring(currentAddress.length - 4)}`,
    [currentAddress]
  );

  return (
    <LabelWeb3 border={border} {...rest}>
      <Icon name="circle" color={iconColor} alt={network} />
      {getShortAddress()}
    </LabelWeb3>
  );
};

export default Web3Address;
