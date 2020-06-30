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

const Testimonial = ({ data: { name, description, image } }): any => {
  return (
    <Wrapper>
      <Row>
        <CardTop>
          <CardTopIcon name="quote left" size="big" />
        </CardTop>
      </Row>

      <Row>
        <CardDescription>{description}</CardDescription>
      </Row>
      <Row>
        <CardImage>
          <CardPhoto src={image} />
          <CardName>{name}</CardName>
        </CardImage>
      </Row>
      <Row>
        <CardBottom />
      </Row>
    </Wrapper>
  );
};

export default Testimonial;
