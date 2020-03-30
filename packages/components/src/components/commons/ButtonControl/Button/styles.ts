import styled from 'styled-components';

import { Button } from 'semantic-ui-react';

export const ButtonStyled = styled(Button)`
  &&& {
    background: #00da9e;
    border-radius: 3px;
    padding: 21px 109px;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    text-align: center;

    color: #ffffff;
  }
`;
