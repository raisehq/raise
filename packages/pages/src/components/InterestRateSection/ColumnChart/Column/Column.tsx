import React from 'react';
import { Wrapper, Row, ColumnItem, Label, TextContainer } from './styles';

const Column = ({ height, background, player }): any => (
  <Wrapper>
    <Row>
      <TextContainer color={background}>
        <Label>{player.name}</Label>
        <Label>{`${player.number}%`}</Label>
      </TextContainer>
    </Row>
    <Row>
      <ColumnItem height={height} background={background} />
    </Row>
  </Wrapper>
);

export default Column;
