import React, { useState } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import {
  Slide,
  SlideContent,
  SlideDescription,
  SlideImage,
  SliderClose,
  SlideLink,
  NoSlider,
  Wrapper
} from './GetStarted.styles';
import { useAppContext } from '../../contexts/AppContext';
import { getGetStarted } from '../../helpers/butter';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { datadogLogs } from '../../helpers/datadogLogs';

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const getSlides = (slides) =>
  slides.map((slide) => (
    <div key={slide.title} className="slide-wrapper">
      <Slide className="slides">
        <SlideContent className="images">
          <SlideImage src={slide.image} />
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
  ));

const GetStarted = () => {
  const { getStarted, onSetGetStarted }: any = useAppContext();
  const [slides, setSlides]: any = useState([]);

  datadogLogs.logger.info('Button clicked', { name: 'getStarted', id: 1 });

  useAsyncEffect(async () => {
    const content = await getGetStarted();

    setSlides(getSlides(content));
  }, []);

  return (
    <Element name="toGetStarted" className="element">
      {getStarted && (
        <Wrapper visible="hidden" getStarted={getStarted}>
          <SliderClose onClick={onSetGetStarted}>
            <Icon name="cancel" />
          </SliderClose>
          <Slider className="slider" {...settings}>
            {slides}
          </Slider>
          <NoSlider>{slides}</NoSlider>
        </Wrapper>
      )}
    </Element>
  );
};

export default GetStarted;
