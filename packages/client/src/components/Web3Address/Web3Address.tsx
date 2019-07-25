import React, { useCallback, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { LabelWeb3 } from './Web3Address.styles';
import { AppContext } from '../App';

// Minor draft, waiting until UI prototype
const Web3Address = (props) => {
  const { web3Status: { networkMatches, network, account } } : any = useContext(AppContext);
  const iconColor = networkMatches ? 'green' : 'red';
  const getShortAddress = useCallback(
    () =>
      !!account
        ? `${account.substring(0, 6)}...${account.substring(
            account.length - 4
          )}`
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
