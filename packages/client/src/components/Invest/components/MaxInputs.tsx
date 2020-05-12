import React from 'react';
import { Container, MaxButton, Divider } from './styles';

const MaxInputs = ({ onClick, ...rest }: any) => {
  const fundAll = (divisor) => () => {
    onClick(divisor);
  };

  return (
    <Container {...rest}>
      <MaxButton id="btn-invest-all" onClick={fundAll(1)}>
        Entire balance
      </MaxButton>
      <Divider>|</Divider>
      <MaxButton id="btn-invest-half" onClick={fundAll(2)}>
        50%
      </MaxButton>
      <Divider>|</Divider>
      <MaxButton id="btn-invest-quarter" onClick={fundAll(4)}>
        25%
      </MaxButton>
    </Container>
  );
};

export default MaxInputs;
