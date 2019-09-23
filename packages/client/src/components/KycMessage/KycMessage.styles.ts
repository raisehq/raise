import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

export const OrangeMessage = styled(Message)`
  &&& {
    border: 1px solid #ffb62b;
    background-color: #fef2d6;
    color: #8a6300;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 45px;
    box-shadow: none !important;

    .circle {
      font-size: 16px !important;
      color: #f8bd2e !important;
      margin-right: 20px;
    }

    .caret {
      font-size: 14px !important;
    }

    .header {
      background-color: #fef2d6;
      color: #8a6300;
      font-weight: lighter !important;
    }
  }
`;

export const KycMessageButton = styled.button`
  border: none;
  border-radius: 5px;
  color: #8a6300;
  background: none;
  cursor: pointer;
  text-decoration: underline;
`;
