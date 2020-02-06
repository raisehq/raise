import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const ToastCustomContainer = styled.div`
  display: flex;
  z-index: -10000px;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15px;
  margin-right: 15px;
  max-width: 300px;
`;

export const ToastText = styled.div`
  font-height: 24px;
  font-size: 16px;
  color: #546978;
`;

export const TxLink = styled.a`
  font-height: 24px;
  font-size: 16px;
  color: #1aab9b;
`;

export const StyledToastContainer = styled(ToastContainer)`
  /* this is the container*/
  top: 108px;
  .toast {
    background-color: red;
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
    background: red;
  }
  .Toastify__toast--info {
    background: white !important;
  }
  .Toastify__toast--warning {
    background: red;
  }
  .Toastify__toast--success {
    background: red !important;
  }
  .Toastify__toast-body {
    max-width: 320px !important;
  }
  &&&.Toastify__progress-bar {
    background: red;
  }
  &&&.Toastify__toast--default {
    background: red;
  }
  .Toastify__close-button--info {
    color: black !important;
  }
`;
