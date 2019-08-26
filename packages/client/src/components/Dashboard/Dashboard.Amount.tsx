import React from 'react';
import { AmountComponent } from './Dashboard.styles';
import Coin from '../Coin';

const Amount = ({ principal }) => (
  <AmountComponent>
    {principal}
    <Coin src={`${process.env.REACT_APP_HOST_IMAGES}/images/ico_dai.svg`} name="DAI" />
  </AmountComponent>
);

export default Amount;
