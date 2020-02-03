import React from 'react';
import { AmountComponent } from './Amount.styles';
import Coin from '../Coin';

const REACT_APP_HOST_IMAGES = 'https://static.raise.it';

const Amount = ({ principal, roi }: { principal: any; roi?: string }) => (
  <AmountComponent>
    {principal}
    <Coin src={`${REACT_APP_HOST_IMAGES}/images/ico_dai.png`} />
    {roi && <span>{roi} ROI</span>}
  </AmountComponent>
);

export default Amount;
