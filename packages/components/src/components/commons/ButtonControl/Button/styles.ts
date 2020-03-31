import styled from 'styled-components';

import { Button } from 'semantic-ui-react';
import { globalTheme } from '../../theme';

interface ButtonProps {
  type: string;
  disabled: boolean;
}

export const ButtonStyled = styled(Button)<ButtonProps>`
  &&& {
    background: ${({ disabled, type }) =>
      disabled
        ? globalTheme.buttonPatterns[type].disable.backgroundColor
        : globalTheme.buttonPatterns[type].default.backgroundColor};
    border: 1px solid;
    border-color: ${({ disabled, type }) =>
      disabled
        ? globalTheme.buttonPatterns[type].disable.borderColor
        : globalTheme.buttonPatterns[type].default.borderColor};
    color: ${({ disabled, type }) =>
      disabled
        ? globalTheme.buttonPatterns[type].disable.textColor
        : globalTheme.buttonPatterns[type].default.textColor};

    border-radius: 3px;
    padding: 21px 109px;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    height: ${({ size }) => globalTheme.buttonSizes[size].height};
    width: 100%;
    text-align: center;

    &&&:hover {
      background: ${props =>
        globalTheme.buttonPatterns[props.type].hover.backgroundColor};
      border: 1px solid;
      border-color: ${props =>
        globalTheme.buttonPatterns[props.type].hover.borderColor};
      box-shadow: ${props =>
        globalTheme.buttonPatterns[props.type].hover.boxShadow};
    }

    &&&:focus {
      background: ${props =>
        globalTheme.buttonPatterns[props.type].onClick.backgroundColor};
      border: 1px solid;
      box-shadow: none;
      border-color: ${props =>
        globalTheme.buttonPatterns[props.type].onClick.borderColor};
    }
  }
`;
