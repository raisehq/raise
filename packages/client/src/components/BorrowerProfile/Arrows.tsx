import React from 'react';
import styled, { css } from 'styled-components';

interface ArrowProps {
  disabled?: boolean;
  onClick?: any;
  onKeyPress?: any;
  role?: any;
  tabIndex?: any;
}

const RawArrowLeft: React.FC<ArrowProps> = (props) => (
  <svg
    width="14"
    height="22"
    viewBox="0 0 14 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.735835 11.8066C0.295972 11.3667 0.295972 10.6336 0.735835 10.1937L10.2173 0.663393C10.7061 0.22353 11.4392 0.22353 11.879 0.663393L13.0031 1.78749C13.443 2.22735 13.443 2.96045 13.0031 3.44919L5.47657 10.9757L13.0031 18.5511C13.443 19.0399 13.443 19.773 13.0031 20.2128L11.879 21.3369C11.4392 21.7768 10.7061 21.7768 10.2173 21.3369L0.735835 11.8066Z"
      fill="#D8D9DC"
    />
  </svg>
);

const RawArrowRight: React.FC<ArrowProps> = (props) => (
  <svg
    width="14"
    height="22"
    viewBox="0 0 14 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.2642 11.8066C13.704 11.3667 13.704 10.6336 13.2642 10.1937L3.78268 0.663393C3.29395 0.22353 2.56084 0.22353 2.12098 0.663393L0.996889 1.78749C0.557027 2.22735 0.557027 2.96045 0.996889 3.44919L8.52343 10.9757L0.996889 18.5511C0.557027 19.0399 0.557027 19.773 0.996889 20.2128L2.12098 21.3369C2.56084 21.7768 3.29395 21.7768 3.78268 21.3369L13.2642 11.8066Z"
      fill="#D8D9DC"
    />
  </svg>
);

const BaseArrowCss = css<ArrowProps>`
  cursor: pointer;
  & path {
    fill: ${({ disabled }) => (disabled ? '#D8D9DC' : '#3C4251')};
  }
`;
export const ArrowLeft = styled(RawArrowLeft)`
  ${BaseArrowCss}
`;
export const ArrowRight = styled(RawArrowRight)`
  ${BaseArrowCss}
`;
