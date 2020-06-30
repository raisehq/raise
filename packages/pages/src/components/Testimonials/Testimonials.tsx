import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import { Wrapper, Row, Title, TestimonialsContainer, Slide } from './styles';
import Slider from 'react-slick';

const Testimonials = ({ data }): any => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
          centerMode: true
        }
      }
    ]
  };

  const [slides, setSlides] = useState([]);

  const getSlides = (testimonials) =>
    testimonials.map((item) => <Slide><Testimonial data={item} key={item.name} className="slide" /></Slide>);

  useEffect(() => {
    const testimonialsArray = [];

    data.forEach((item) =>
      testimonialsArray.push({
        name: item.testimonial_name,
        description: item.testimonial_description,
        image: item.testimonial_image
      })
    );

    setSlides(getSlides([...testimonialsArray]));
  }, [data]);

  return (
    <Wrapper>
      <Row>
        <Title>What the investors says about us</Title>
      </Row>
      <Row>
        <TestimonialsContainer>
          <Slider className="slider" {...settings}>
            {slides}
          </Slider>
        </TestimonialsContainer>
      </Row>
    </Wrapper>
  );
};

export default Testimonials;
