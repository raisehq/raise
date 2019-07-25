import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  Wrapper,
  handleStyle,
  railStyle,
  trackStyle,
  LabelLess,
  LabelMore
} from './Slider.styles';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Slide = createSliderWithTooltip(Slider);

const HeroSlider = ({ onChange, ...rest }) => (
  <Wrapper>
    <Slide
      {...rest}
      step={0.1}
      handleStyle={handleStyle}
      railStyle={railStyle}
      trackStyle={trackStyle}
      onAfterChange={onChange}
    />
    <LabelLess>Less likely to match</LabelLess>
    <LabelMore>More likely to match</LabelMore>
  </Wrapper>
);

export default HeroSlider;
