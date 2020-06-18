import React from 'react';

import { Wrapper, Title, SubTitle, Row } from './styles';

const InterestRateSection = ({ data }): any => {
  return (
    <Wrapper>
      <Row>
        <Title>{data.title}</Title>
      </Row>
      <Row>
        <SubTitle>{data.subtitle}</SubTitle>
      </Row>
    </Wrapper>
  );
};

export default InterestRateSection;
