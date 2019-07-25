import React, { useCallback } from 'react';
import { LabelWeb3 } from '../Web3Address/Web3Address.styles';


const Web3Address = ({ account, ...props }) => {

  const getShortAddress = useCallback(
    () => !!account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : '0x0000...0000',
    [account]
  );
  return (
    <LabelWeb3  {...props}>
      {getShortAddress()}
    </LabelWeb3>
  )
};

export default Web3Address;
