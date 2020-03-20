import React from 'react';
import { AmountComponent } from './Amount.styles';
import Coin from '../Coin';

const REACT_APP_HOST_IMAGES = 'https://static.raise.it';

const Amount = ({
  principal,
  roi,
  coinIcon,
}: {
  principal: any;
  roi?: string;
  coinIcon: string;
}) => (
  <AmountComponent>
    {principal}
    <Coin src={`${REACT_APP_HOST_IMAGES}/images/coins/${coinIcon}`} />
    {roi && <span>{roi} ROI</span>}
  </AmountComponent>
);

export default Amount;
