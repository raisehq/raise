import React, { useContext } from 'react';
import { ToastCustomContainer, ToastText, TxLink, StyledToastContainer } from './styles';
import RootContext from '../../context';

const Toast = ({ text, tx, state }) => {
  const {
    store: {
      config: { network }
    }
  }: any = useContext(RootContext);

  const states = {
    pending: 'Processing',
    success: 'Done!',
    error: 'Something went wrong'
  };

  const createLink = transaction =>
    `https://${
      network && network !== 'mainnet' ? `${network}.` : ''
    }etherscan.io/tx/${transaction}`;

  return (
    <ToastCustomContainer>
      <ToastText>{text}</ToastText>
      <TxLink href={createLink(tx)} target="_blank">
        {states[state]}
      </TxLink>
    </ToastCustomContainer>
  );
};

export { StyledToastContainer };

export default Toast;
