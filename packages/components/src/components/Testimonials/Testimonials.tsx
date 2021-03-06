import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Testimonial from './Testimonial';
import { Wrapper, Row, Title, TestimonialsContainer, Slide } from './styles';

const Testimonials = ({ data, title }) => {
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
    testimonials.map((item) => (
      <Slide key={item.name}>
        <Testimonial data={item} />
      </Slide>
    ));

  useEffect(() => {
    const testimonialsArray: any = [];

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
        <Title>{title}</Title>
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
