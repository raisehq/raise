import React from 'react';
import { createSliderWithTooltip, Range } from 'rc-slider';
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
import numeral from '../../commons/numeral';

const RangeTooltip = createSliderWithTooltip(Range);

const HeroSlider = ({ onChange, loan, minAPR, maxAPR, ...rest }: any) => (
  <Wrapper>
    <RangeTooltip
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
      {`${numeral(minAPR).format()}% APR (${numeral(loan.minMir).format()}% MIR*)`}
    </LabelLess>
    <LabelMore>
      {`${numeral(maxAPR).format()}% APR (${numeral(loan.maxMir).format()}% MIR*)`}
    </LabelMore>
  </Wrapper>
);

export default HeroSlider;
