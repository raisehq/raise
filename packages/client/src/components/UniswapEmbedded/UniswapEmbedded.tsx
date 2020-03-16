import React from 'react';

interface UniswapProps {
  iframeUrl: string;
  className?: string;
}

const UniswapEmbedded: React.SFC<UniswapProps> = ({ iframeUrl, className }) => (
  <iframe
    className={className}
    src={iframeUrl}
    height="660px"
    width="100%"
    style={{
      border: 0,
      margin: '0 auto',
      display: 'block',
      borderRadius: 10,
      maxWidth: 600
    }}
    id="myId"
  />
);

export default UniswapEmbedded;
