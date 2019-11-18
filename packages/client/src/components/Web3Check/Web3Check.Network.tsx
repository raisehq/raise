import React, { useContext } from 'react';
import { Label, Icon } from 'semantic-ui-react';
import AppContext from '../AppContext';

// Minor draft, waiting until UI prototype
const Web3Network = () => {
  const {
    web3Status: { network }
  }: any = useContext(AppContext);
  const iconColor = !network ? 'green' : 'red';

  return (
    <Label>
      <Icon name="circle" color={iconColor} />
      {network}
    </Label>
  );
};

export default Web3Network;
