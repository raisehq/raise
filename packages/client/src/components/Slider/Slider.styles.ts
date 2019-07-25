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
  color: #b2c0cf;
  font-size: 10px;
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
  color: #b2c0cf;
  font-family: Lato;
  font-size: 10px;
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
  backgroundColor: ' #40E0C4',
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
