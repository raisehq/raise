import styled from 'styled-components';

import { Button } from 'semantic-ui-react';

export const ButtonStyled = styled(Button)`
  &&& {
    height: 48px;
    min-width: 48px;
    background-color: #fff;
    box-sizing: border-box;
    text-align: center;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 138.27%;

    &:hover {
      background: #ecedee;
      cursor: pointer;
    }
    &.selected,
    &:active {
      background: #eb3f93;
      color: #fff;
    }
  }
`;

export const ButtonStyledGroup = styled(Button.Group)`
  &&& {
    ${ButtonStyled} {
      border-top: 1px solid #c5c7cb;
      border-right: 1px solid #c5c7cb;
      border-bottom: 1px solid #c5c7cb;

      &:first-child {
        border-left: 1px solid #c5c7cb;
      }
    }
  }
`;

export const ButtonContent = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
