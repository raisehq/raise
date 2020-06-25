import React from 'react';
import ColumnChart from './ColumnChart';
import { Wrapper, Title, SubTitle, Row, RowGraph, GraphWrapper } from './styles';

const InterestRateSection = ({ data }): any => {
  return (
    <Wrapper>
      <Row>
        <Title>{data.title}</Title>
      </Row>
      <Row>
        <SubTitle>{data.subtitle}</SubTitle>
      </Row>
      <RowGraph>
        <GraphWrapper>
          <ColumnChart data={data} />
        </GraphWrapper>
      </RowGraph>
    </Wrapper>
  );
};

export default InterestRateSection;
