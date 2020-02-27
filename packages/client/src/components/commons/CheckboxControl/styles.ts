import styled from 'styled-components';

import { Checkbox } from 'semantic-ui-react';

export const CheckboxStyled = styled(Checkbox)`
  &&& {
    .box:after,
    .box:before,
    label:after,
    label:before {
      transform: scale(1.28571429);
      transform-origin: left;
    }
  }
`;

export const CheckboxLabel = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
