import styled from 'styled-components';
import { Message } from 'semantic-ui-react';
export const OrangeMessage = styled(Message)`
  &&& {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f0712c;
    color: white;
    .circle {
      font-size: 1.3em !important;
    }
    .caret {
      font-size: 1.3em !important;
    }
    .header {
      background-color: #f0712c;
      color: white !important;
    }
  }
`;
