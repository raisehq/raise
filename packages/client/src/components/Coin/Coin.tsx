import React from 'react';
import { CoinBox, CoinImage } from './Coin.styles';

interface CoinProps {
  src: string;
  name?: string;
}

export const Coin: React.SFC<CoinProps> = ({ src, name, ...props }) => (
  <CoinBox {...props}>
    <CoinImage src={src} />
    {name ? <div>{name}</div> : null}
  </CoinBox>
);
