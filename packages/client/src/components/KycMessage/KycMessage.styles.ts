import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

//#F8BD2E

export const OrangeMessage = styled(Message)`
  &&& {
  
    background-color: #fef2d6;
    color: #8a6300;
    padding: 16px;
    box-shadow: 0 0 0 1px rgba(255,182,43,.90) inset, 0 0 0 0 transparent;
    margin: 2em 0;

    .circle {
      font-size: 16px !important;
      color: #FFB62B !important;
      margin-right: 10px;
    }

    .caret {
      font-size: 14px !important;
    }

    .header {
      color: #8a6300;
      font-weight: 300 !important;
    }
  }
`;

export const KycMessageButton = styled.button`
  border: 1px solid #ffb62b;
  padding: 15px;
  border-radius: 5px;
  color: #8a6300;
  background: #ffb62b;
  cursor: pointer;
`;
