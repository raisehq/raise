import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const ToastCustomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
`;

export const ToastText = styled.div`
  font-height: 24px;
  font-size: 16px;
  color: #3c4251;
  justify-content: center;
  margin-right: 20px;
`;

export const TxLink = styled.a`
  font-height: 24px;
  font-size: 16px;
  color: #1aab9b;
`;

export const StyledToastContainer = styled(ToastContainer)`
  /* this is the container*/
  position: relative;
  width: 100%;
  padding: 0;
  top: 0px;
  right: 0px;
  z-index: 0;

  .toast {
    background-color: red;
  }
  .Toastify__toast {
    margin: 0;
    border-radius: 0 !important;
  }
  .Toastify__toast--error {
    background: #fbd9e9 !important;
    box-shadow: none;
  }
  .Toastify__toast--info {
    background: #d8f4ff !important;
    box-shadow: none;
  }
  .Toastify__toast--warning {
    background: #fef2d5 !important;
    box-shadow: none;
  }
  .Toastify__toast--success {
    background: #ccf8ec !important;
    box-shadow: none;
  }
  .Toastify__toast-body {
    /*max-width: 320px !important;*/
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
