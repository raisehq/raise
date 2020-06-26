import React from 'react';

import {
  Wrapper,
  Row,
  CardTop,
  CardBottom,
  CardDescription,
  CardImage,
  CardPhoto,
  CardName,
  CardTopIcon
} from './styles';

const Testimonial = (): any => {
  return (
    <Wrapper>
      <Row>
        <CardTop>
          <CardTopIcon name="quote left" size="big" />
        </CardTop>
      </Row>

      <Row>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </CardDescription>
      </Row>
      <Row>
        <CardImage>
          <CardPhoto />
          <CardName>John Doe</CardName>
        </CardImage>
      </Row>
      <Row>
        <CardBottom />
      </Row>
    </Wrapper>
  );
};

export default Testimonial;
