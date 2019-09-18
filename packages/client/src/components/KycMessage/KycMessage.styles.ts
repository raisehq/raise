import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

//#F8BD2E

export const OrangeMessage = styled(Message)`
  &&& {
    border: 1px solid #ffb62b;
    background-color: #fef2d6;
    color: #8a6300;
    padding: 15px;
    box-sizing: border-box;
    font-weight: 400 !important;

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
    }
  }
`;

export const KycMessageButton = styled.button`
  border: 1px solid #8a6300;
  padding: 15px;
  border-radius: 5px;
  color: #8a6300;
  background: #ffb62b;
  cursor: pointer;
`;
