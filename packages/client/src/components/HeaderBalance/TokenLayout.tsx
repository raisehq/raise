import React, { useState } from 'react';
import {
  TokenImage,
  TokenName,
  Container,
  Child,
  IconEye,
  SpanValues,
  Balance
} from './TokenBalance.styles';
const TokenLayout = ({ imageUrl, name, value, hider, ...props }: any) => {
  const [hidde, setHidde] = useState(false);

  const handleTroggleHidde = e => {
    e.stopPropagation();
    setHidde(!hidde);
  };
  /* eslint-disable */
  // TODO : Refactor this ternary condition
  return (
    <Container {...props}>
      <Child>
        <TokenImage src={imageUrl} />
        <TokenName>{name}</TokenName>
      </Child>
      <Child>
        {hider ? (
          hidde ? (
            <div>
              <SpanValues>{value}</SpanValues>
              <IconEye onClick={handleTroggleHidde} name="eye" />
            </div>
          ) : (
            <div>
              <SpanValues>• • • • •</SpanValues>
              <IconEye onClick={handleTroggleHidde} name="eye slash outline" />
            </div>
          )
        ) : (
          <>
            Balance: <Balance> {value}</Balance>
          </>
        )}
      </Child>
    </Container>
  );
  /* eslint-enable */
};

export default TokenLayout;
