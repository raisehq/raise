import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const ContactButtonA = styled.a`
  &&&& {
    text-transform: uppercase;
    border-radius: 4px;
    height: 56px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    margin-top: auto;
    border: 1px solid #cfd0d4;
    background: #ffffff;
    color: #3c4251;
    display: flex;
    justify-content: center;
    align-items: center;
    &&&&:hover {
      border: 2px solid #cfd0d4;
      color: #3c4251;
      background: #ffffff;
    }
  }
`;

export const LenderButton = styled(Button)`
  &&& {
    cursor: pointer;
    color: white;
    background-color: #eb3f93;
    text-transform: uppercase;
    border-radius: 4px;
    height: 56px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    margin-top: auto;
    margin: 0px;
  }

  &&&:hover {
    color: white;
    background-color: #eb3f93;
  }
  &&&:disabled,
  &&&.disabled {
    cursor: default;
    opacity: 0.45 !important;
    background-image: unset !important;
    background: lightgray;
    box-shadow: none !important;
    pointer-events: none !important;
  }
`;

export const BorrowerButton = styled(LenderButton)`
  &&& {
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    &&&:hover {
      color: white;
      background: linear-gradient(134.72deg, #02bb7d 0%, #00efad 100%);
    }
  }
`;

export const ContactButton = styled(BorrowerButton)`
  &&&& {
    border: 1px solid #cfd0d4;
    background: #ffffff;
    color: #3c4251;
    &&&&:hover {
      border: 2px solid #cfd0d4;
      color: #3c4251;
      background: #ffffff;
    }
  }
`;
