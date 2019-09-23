import React, { useContext } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import Slider from 'react-slick';
import {
  Slide,
  SlideContent,
  SlideDescription,
  SlideImage,
  SliderClose
} from './GetStarted.styles';
import { Wrapper } from './GetStarted.styles';
import { AppContext } from '../App';

const settings = {
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const GetStarted = () => {
  const { getStarted, onSetGetStarted }: any = useContext(AppContext);
  const slides = [
    {
      title: '1',
      id: 3123123123,
      description: '1 description',
      image: 'https://static.herodev.es/images/logo.svg'
    },
    {
      title: '2',
      id: 43423423,
      description: '2 description',
      image: 'https://static.herodev.es/images/logo.svg'
    }
  ];

  return (
    <Wrapper visible={getStarted}>
      <SliderClose onClick={onSetGetStarted}>
        <Icon name="cancel" />
      </SliderClose>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <Slide>
              <SlideContent className="images">
                <SlideImage src={slide.image}></SlideImage>
              </SlideContent>
              <SlideContent>
                <Header as="h2">{slide.title}</Header>
                <SlideDescription>{slide.description}</SlideDescription>
              </SlideContent>
            </Slide>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default GetStarted;
