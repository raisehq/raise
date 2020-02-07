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
    success: 'Done!'
  };

  const createLink = tx => {
    return `https://${network && network !== 'mainnet' ? `${network}.` : ''}etherscan.io/tx/${tx}`;
  };

  return (
    <ToastCustomContainer>
      <ToastText>{text}</ToastText>
      <TxLink href={createLink(tx)} target="_blank">
        {state === 'pending' ? `${states[state]}` : states[state]}
      </TxLink>
    </ToastCustomContainer>
  );
};

export { StyledToastContainer };

export default Toast;
