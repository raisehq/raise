import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  Wrapper,
  handleStyle,
  railStyle,
  trackStyle,
  dotStyle,
  activeDotStyle,
  LabelLess,
  LabelMore
} from './Slider.styles';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const HeroSlider = ({ onChange, loan, minAPR, maxAPR, ...rest }) => (
  <Wrapper>
    <Range
      {...rest}
      step={0.1}
      handleStyle={handleStyle}
      railStyle={railStyle}
      dotStyle={dotStyle}
      activeDotStyle={activeDotStyle}
      trackStyle={trackStyle}
      onAfterChange={onChange}
    />

    <LabelLess>
      {minAPR.toFixed(2)}% APR ({loan.minMir}% MIR*)
    </LabelLess>
    <LabelMore>
      {maxAPR.toFixed(2)}% APR ({loan.maxMir}% MIR*)
    </LabelMore>
  </Wrapper>
);

export default HeroSlider;
