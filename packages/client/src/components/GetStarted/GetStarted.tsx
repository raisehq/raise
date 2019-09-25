import React, { useContext, useState } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import Slider from 'react-slick';
import {
  Slide,
  SlideContent,
  SlideDescription,
  SlideImage,
  SliderClose,
  SlideLink
} from './GetStarted.styles';
import { Wrapper } from './GetStarted.styles';
import { AppContext } from '../App';
import { getGetStarted } from '../../helpers/butter';
import useAsyncEffect from '../../hooks/useAsyncEffect';

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const GetStarted = () => {
  const { getStarted, onSetGetStarted }: any = useContext(AppContext);
  const [slides, setSlides]: any = useState([]);

  useAsyncEffect(async () => {
    const content = await getGetStarted();

    setSlides(content);
  }, []);

  return (
    <Wrapper visible={getStarted}>
      <SliderClose onClick={onSetGetStarted}>
        <Icon name="cancel" />
      </SliderClose>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.title}>
            <Slide>
              <SlideContent className="images">
                <SlideImage src={slide.image}></SlideImage>
              </SlideContent>
              <SlideContent>
                <Header as="h1">{slide.title}</Header>
                <SlideDescription>{slide.description}</SlideDescription>
                <SlideLink href="https://raise.it/help" target="_blank">
                  Learn more
                </SlideLink>
              </SlideContent>
            </Slide>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default GetStarted;
