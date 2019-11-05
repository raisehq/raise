import React, { useCallback, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { LabelWeb3 } from './Web3Address.styles';
import AppContext from '../AppContext';
import { NULL_ADDRESS } from '../../commons/constants';
// import useWeb3Checker from '../../hooks/useWeb3Checker';

const Web3Address = ({ account = null }: any) => {
  const {
    store: {
      config: { network },
      user: {
        cryptoAddress: { address }
      }
    },
    web3Status: { networkMatches }
  }: any = useContext(AppContext);

  const iconColor = networkMatches ? 'green' : 'red';
  const currentAddress = account || address || NULL_ADDRESS;

  const getShortAddress = useCallback(() => {
    return `${currentAddress.substring(0, 6)}...${currentAddress.substring(
      currentAddress.length - 4
    )}`;
  }, [currentAddress]);

  return (
    <LabelWeb3>
      <Icon name="circle" color={iconColor} alt={network} />
      {getShortAddress()}
    </LabelWeb3>
  );
};

export default Web3Address;
