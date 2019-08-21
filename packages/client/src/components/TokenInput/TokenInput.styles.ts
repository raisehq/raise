import styled from 'styled-components';
import { device } from '../LayoutV2/breakpoints';

export const LoanInputBox = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  input {
    max-width: 80px;
    border: none !important;
    margin-right: 5px;
    box-sizing: border-box;
    background: none !important;
    font-size: 18px;
    font-weight: bold;
    color: #5c5d5d;
    text-align: right;
  }
  @media ${device.laptop} {
    max-width: 120px;
  }
`;
