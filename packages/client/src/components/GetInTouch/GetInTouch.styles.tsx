import styled from 'styled-components';
import { BorrowerButton } from '../InvestModal/InvestModal.styles';

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
