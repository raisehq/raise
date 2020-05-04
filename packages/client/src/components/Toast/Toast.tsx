import React from 'react';
import { ToastCustomContainer, ToastText, TxLink, StyledToastContainer } from './styles';
import { useRootContext } from '../../contexts/RootContext';
import toastMessages from '../../helpers/toastMessages';

const format = (text: string, params: any) => {
  if (!params || params.length === 0) {
    return text;
  }
  let result = text;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < params.length; i++) {
    result = result.replace(new RegExp(`\\{${i}\\}`, 'g'), params[i]);
  }
  return result;
};

const getText = (params, state) => {
  if (!params) {
    return 'Processing transaction';
  }
  const { id, vars }: any = params;
  const unparsedText = toastMessages[state][id];
  const parsedText = format(unparsedText, vars);
  return parsedText;
};
const createLink = (transaction, network) =>
  `https://${network && network !== 'mainnet' ? `${network}.` : ''}etherscan.io/tx/${transaction}`;

const Toast = ({ data, tx, state }: any) => {
  const {
    store: {
      config: { network }
    }
  }: any = useRootContext();

  return (
    <ToastCustomContainer>
      <ToastText>{getText(data, state)}</ToastText>
      <TxLink href={createLink(tx, network)} target="_blank">
        View on Etherscan
      </TxLink>
    </ToastCustomContainer>
  );
};

export { StyledToastContainer };

export default Toast;
