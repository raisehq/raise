import React from 'react';
import { AmountComponent } from './Dashboard.styles';
import Coin from '../Coin';
import { CoinsType } from '../../commons/coins';

const Amount = ({ principal, roi, coin }: { principal: any; roi?: string; coin: CoinsType }) => (
  <AmountComponent>
    {principal}
    <Coin src={`${process.env.REACT_APP_HOST_IMAGES}/images/coins/${coin && coin.icon}`} />

    {roi && <span>{`${roi} ROI`}</span>}
  </AmountComponent>
);

export default Amount;
