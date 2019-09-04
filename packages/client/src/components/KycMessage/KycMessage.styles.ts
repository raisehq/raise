import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

export const OrangeMessage = styled(Message)`
  &&& {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f0712c;
    color: white;
    padding: 10px 15px 10px 15px;
    box-sizing: border-box;

    .circle {
      font-size: 14px !important;
    }

    .caret {
      font-size: 14px !important;
    }

    .header {
      background-color: #f0712c;
      color: white;
    }
  }
`;

export const KycMessageButton = styled.button`
  border: 2px solid white;
  padding: 15px;
  border-radius: 5px;
  color: white;
  background: #f0712c;
  cursor: pointer;
`;
