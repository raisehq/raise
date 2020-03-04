import styled from 'styled-components';

import { Checkbox } from 'semantic-ui-react';

interface CheckBoxProps {
  size?: string;
}

export const CheckboxStyled = styled(Checkbox)<CheckBoxProps>`
  &&& {
    &&&.ui.checkbox label {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
      line-height: ${({ size }) => (size === 'small' ? '16px' : '24px')};
      color: #8a8e97;
    }

    .box:after,
    .box:before,
    label:after,
    label:before {
      transform: ${({ size }) => (size === 'small' ? 'inherit' : `scale(1.28571429)`)};
      transform-origin: left;
      top: ${({ size }) => (size === 'small' ? '-1px' : '3px')};
    }
    &&&.ui.checkbox input:focus ~ .box:before,
    &&&.ui.checkbox input:focus ~ label:before {
      border: 1px solid #c5c7cb;
      box-sizing: border-box;
    }
    &&& label::after {
      color: #eb3f93;
      top: -2px;
      font-weight: normal;
    }
    &&& label::before:hover {
      border: 1px solid #8a8e97;
    }
  }
`;

export const CheckboxLabel = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
`;
