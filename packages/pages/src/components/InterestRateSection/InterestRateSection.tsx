import React from 'react';
import ColumnChart from './ColumnChart';
import { Wrapper, Title, SubTitle, Row, GraphWrapper } from './styles';

const InterestRateSection = ({ data }): any => {
  return (
    <Wrapper>
      <Row>
        <Title>{data.title}</Title>
      </Row>
      <Row>
        <SubTitle>{data.subtitle}</SubTitle>
      </Row>
      <Row>
        <GraphWrapper>
          <ColumnChart data={data} />
        </GraphWrapper>
      </Row>
    </Wrapper>
  );
};

export default InterestRateSection;
