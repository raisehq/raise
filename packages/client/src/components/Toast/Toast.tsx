import React from 'react';
import { ToastCustomContainer, ToastText, TxLink, StyledToastContainer } from './styles';
import { useRootContext } from '../../contexts/RootContext';
import toastMessages from '../../helpers/toastMessages';

const Toast = ({ params, tx, state }) => {
  const {
    store: {
      config: { network }
    }
  }: any = useRootContext();

  const format = (text, params) => {
    console.log('text ======> ', text);
    if (!params || params.length === 0) {
      return text;
    }
    let result = text;
    for (let i = 0; i < params.length; i++) {
      result = result.replace(new RegExp('\\{' + i + '\\}', 'g'), params[i]);
    }

    return result;
  };

  const getText = () => {
    if (!params) {
      console.log('params undef');
      return 'Processing transaction';
    }
    const { id, vars } = params;
    console.log('id::: ', id);
    console.log('vars::: ', vars);
    console.log('state::: ', state);
    const unparsedText = toastMessages[state][id];
    console.log('unparsedText:: ', unparsedText);
    const parsedText = format(unparsedText, vars);
    return parsedText;
  };

  const createLink = transaction =>
    `https://${
      network && network !== 'mainnet' ? `${network}.` : ''
    }etherscan.io/tx/${transaction}`;

  return (
    <ToastCustomContainer>
      {params && <ToastText>{getText()}</ToastText>}
      <TxLink href={createLink(tx)} target="_blank">
        View on Etherscan
      </TxLink>
    </ToastCustomContainer>
  );
};

export { StyledToastContainer };

export default Toast;
