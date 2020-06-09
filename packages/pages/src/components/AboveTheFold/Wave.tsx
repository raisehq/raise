import React from 'react';
import { WaveContainer } from './styles';
const SVG = (
  <svg
    width="1440"
    height="127"
    viewBox="0 0 1440 127"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 126.01H1440V23.8356C1364.55 5.81005 1227.4 -4.28385 1152 20.0105C1062 49.0105 1000 52.0105 861 25.0105C727.953 -0.833283 724.087 -0.107639 560.01 30.6952L559.995 30.6982C552.659 32.0754 545.002 33.5127 537 35.0105C426.282 55.7331 376.56 39.2971 326.191 22.647C291.488 11.1756 256.478 -0.397447 201 0.0104771C127.825 0.548532 53.5635 24.6389 0 48.3686V126.01Z"
      fill="white"
    />
  </svg>
);
const Wave = () => <WaveContainer>{SVG}</WaveContainer>;

export default Wave;
