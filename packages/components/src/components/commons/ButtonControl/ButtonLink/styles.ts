import styled from 'styled-components';

import { Button } from 'semantic-ui-react';
import { globalTheme } from '../../theme';

interface ButtonProps {
  type: string;
  disabled: boolean;
  size: string;
}
/* eslint-disable */
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

    padding: ${props => globalTheme.buttonWithLogoSizes[props.size].padding};
    height: ${props => globalTheme.buttonWithLogoSizes[props.size].height};
    width: ${props =>
      props.fullWidth ? '100%' : globalTheme.buttonWithLogoSizes[props.size].width};
    font-size: ${props => globalTheme.buttonWithLogoSizes[props.size].fontSize};
    line-height: ${props => globalTheme.buttonWithLogoSizes[props.size].lineHeight};

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    text-align: center;

    &&&:hover {
      background: ${props => globalTheme.buttonPatterns[props.type].hover.backgroundColor};
      border: ${props => `1px solid ${globalTheme.buttonPatterns[props.type].hover.borderColor}`};
      box-shadow: ${props => globalTheme.buttonPatterns[props.type].hover.boxShadow};
    }

    &&&:focus {
      background: ${props => globalTheme.buttonPatterns[props.type].onClick.backgroundColor};
      border: 1px solid;
      box-shadow: none;
      border-color: ${props => globalTheme.buttonPatterns[props.type].onClick.borderColor};
    }
  }
`;
/* eslint-enable */
export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &&& > img {
    max-width: 20px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 205px;
  &&& span {
    padding-left: 10px;
  }
  &&& > img {
    max-width: 40px;
  }
`;
