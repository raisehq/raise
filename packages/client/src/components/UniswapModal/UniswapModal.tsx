import React from 'react';
import { Modal, Button } from './UniswapModal.styles'

interface UniswapModalProps {
  iframeUrl: string;
  button?: React.Component;
}

const UniswapModal: React.SFC<UniswapModalProps> = ({ iframeUrl, button }) =>
  <Modal size="small" basic closeIcon trigger={button || <Button>Get RAISE at Uniswap 🦄</Button>}>
    <iframe
      src={iframeUrl}
      height="660px"
      width="100%"
      style={{
        border: 0,
        margin: '0 auto',
        display: 'block',
        borderRadius: 10,
        maxWidth: 600,
        minWidth: 300
      }}
      id="myId"
    />
  </Modal>

export default UniswapModal;