import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import { Wrapper, Row, Title, TestimonialsContainer } from './styles';

const Testimonials = ({ data }): any => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    data.forEach((item) =>
      setTestimonials([
        {
          name: item.testimonial_name,
          description: item.testimonial_description,
          image: item.testimonial_image
        }
      ])
    );
  }, [data]);

  return (
    <Wrapper>
      <Row>
        <Title>What the investors says about us</Title>
      </Row>
      <Row>
        <TestimonialsContainer>
          {testimonials.map((item) => (
            <Testimonial data={item} key={item.name} />
          ))}
        </TestimonialsContainer>
      </Row>
    </Wrapper>
  );
};

export default Testimonials;
