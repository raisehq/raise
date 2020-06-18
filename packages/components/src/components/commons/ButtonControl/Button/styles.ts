import styled from 'styled-components';

import { Button } from 'semantic-ui-react';
import { globalTheme } from '../../theme';

interface ButtonProps {
  type: string;
  disabled: boolean;
  size: string;
  fullWidth?: boolean;
  minWitdh?: boolean;
}
/* eslint-disable */
export const ButtonStyled = styled(Button)<ButtonProps>`
  &&& {
    font-size: ${(props) => globalTheme.buttonSizes[props.size].fontSize};
    line-height: ${(props) => globalTheme.buttonSizes[props.size].lineHeight};
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    text-align: center;
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

    padding: ${(props) => globalTheme.buttonSizes[props.size].padding};
    min-height: ${(props) => globalTheme.buttonSizes[props.size].height};
    width: ${(props) => {
      if (props.minWidth) {
        return 'auto';
      }
      return props.fullWidth ? '100%' : globalTheme.buttonSizes[props.size].width;
    }};
    min-width: ${(props) => {
      if (props.minWidth) {
        return props.fullWidth ? '100%' : globalTheme.buttonSizes[props.size].width;
      }
      return 'unset';
    }};

    &&&:hover {
      background: ${(props) => globalTheme.buttonPatterns[props.type].hover.backgroundColor};
      border: ${(props) => `1px solid ${globalTheme.buttonPatterns[props.type].hover.borderColor}`};
      box-shadow: ${(props) => globalTheme.buttonPatterns[props.type].hover.boxShadow};
    }

    &&&:focus {
      background: ${(props) => globalTheme.buttonPatterns[props.type].onClick.backgroundColor};
      border: 1px solid;
      box-shadow: none;
      border-color: ${(props) => globalTheme.buttonPatterns[props.type].onClick.borderColor};
    }
  }
`;

/* eslint-enable */
export default ButtonStyled;
