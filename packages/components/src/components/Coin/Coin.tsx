import React from 'react';
import { CoinBox, CoinImage } from './Coin.styles';

interface CoinProps {
  src: string;
  name?: string;
}

export const Coin: React.SFC<CoinProps> = ({
  src,
  name,
}: {
  src: string;
  name?: string;
}) => (
  <CoinBox>
    <CoinImage src={src} />
    {name && <div>{name}</div>}
  </CoinBox>
);

export default Coin;
