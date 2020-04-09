import styled from 'styled-components';
// eslint-disable-next-line
import { Button, ButtonProps } from 'semantic-ui-react';

import { maxDevice } from '../../commons/breakpoints';

export const SignupButton: any = styled(Button)<ButtonProps>`
  &&&&& {
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    border-radius: 6px !important;
    color: #ffffff;
    padding: 0;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border-color: transparent;
    :disabled {
      background-color: #00a76f;
      opacity: 0.4;
    }
    @media ${maxDevice.mobileL} {
      height: 48px;
      font-size: 14px;
      line-height: 21px;
      border-radius: 4px !important;
    }
  }
  &&&&&:hover {
    background: #fff;
    border-color: #0ba76e;
    color: #0ba76e;
  }
`;

export const LoginButton: any = styled(Button)`
  &&&&& {
    background-color: #fff;
    border-color: #cfd0d4;
    color: #3c4251;
    font-weight: bold;
  }
  &&&&&:hover {
    background-color: #cfd0d4;
    color: #fff;
  }
`;

export const LogoutButton: any = styled(Button)`
  &&&&&&&& {
    border: none;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.15) inset;
    height: 40px;
    color: rgba(0, 0, 0, 0.6) !important;
  }
  &&&&&&&&:hover {
    border: 1px solid #eb3f93;
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);
  }
`;
