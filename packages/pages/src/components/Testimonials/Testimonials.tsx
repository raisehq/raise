import React from 'react';
import Testimonial from './Testimonial';
import { Wrapper, Row, Title, TestimonialsContainer } from './styles';

const Testimonials = (): any => {
  const testimonials = [1, 2, 3];
  return (
    <Wrapper>
      <Row>
        <Title>What the investors says about us</Title>
      </Row>
      <Row>
        <TestimonialsContainer>
          {testimonials.map((item) => (
            <Testimonial data={item} key={item} />
          ))}
        </TestimonialsContainer>
      </Row>
    </Wrapper>
  );
};

export default Testimonials;
