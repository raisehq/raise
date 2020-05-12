import styled from 'styled-components';

import { Button } from 'semantic-ui-react';
import { globalTheme } from '../../theme';

interface ButtonProps {
  disabled: boolean;
  size: string;
}
/*eslint-disable */
export const ButtonStyled = styled(Button)<ButtonProps>`
  &&& {
    border-radius: 3px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    background: white;
    color: #6067f1;
    border: 1px solid #6067f1;

    padding: ${(props) => globalTheme.buttonSizes[props.size].padding};
    height: ${(props) => globalTheme.buttonSizes[props.size].height};
    width: ${(props) => {
      const resp = props.fullWidth
        ? '100%'
        : globalTheme.buttonSizes[props.size].width;
      return resp;
    }};
    font-size: ${(props) => globalTheme.buttonSizes[props.size].fontSize};
    line-height: ${(props) => globalTheme.buttonSizes[props.size].lineHeight};

    &&&:hover {
      background: #ffffff;
      border: 1px solid #ffffff;
      box-shadow: 0 8px 15px rgba(60, 66, 81, 0.25);
    }

    &&&:focus {
      background: #dcddf7;
      border: 1px solid;
      box-shadow: none;
      border-color: #6067f1;
    }
  }
`;
/* eslint-enable */

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    margin-right: 5px;
  }
`;
