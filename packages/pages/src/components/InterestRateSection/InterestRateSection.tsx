import React from 'react';
import ColumnChart from './ColumnChart';
import { Wrapper, Title, SubTitle, Row, GraphWrapper, Container } from './styles';

const InterestRateSection = ({ data }): any => {
  return (
    <Wrapper>
      <Container>
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
      </Container>
    </Wrapper>
  );
};

export default InterestRateSection;
