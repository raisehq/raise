import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 390px;
  height: 15px;
  position: relative;
  background: #e5e2f1;
  border-radius: 8px;
`;

export const LabelLess = styled.div`
  height: 30px;
  width: 88px;
  color: #5A5A5A;;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  position: absolute;
  left: 0;
  top: 30px;
  text-transform: uppercase;

  .rc-slider-dot {
    &:nth-child(odd) {
      display: none !important;
    }
  }
`;

export const LabelMore = styled.div`
  height: 30px;
  width: 88px;
  color: #5A5A5A;;
  font-size: 12px;
  font-family: Lato;
  font-weight: bold;
  line-height: 15px;
  position: absolute;
  right: 0;
  top: 30px;
  text-align: right;
  text-transform: uppercase;
`;

export const handleStyle = {
  height: '24px',
  width: '24px',
  borderRadius: '12px',
  backgroundColor: '#3C4251',
  border: 'none',
  position: 'relative',
  top: '-4px'
};

export const railStyle = {
  border: 'none',
  background: 'none'
};

export const trackStyle = {
  width: '100%',
  height: '15px',
  background: 'none',
  borderRadius: '8px'
};

export const dotStyle = {
  background: '#9498A0',
  border: '0px'
}

export const activeDotStyle = {
  background: '#9498A0',
  border: '0px'
}
