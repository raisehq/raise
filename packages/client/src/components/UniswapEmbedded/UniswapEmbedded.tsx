import React from 'react';

interface UniswapProps {
  iframeUrl: string;
  className?: string;
}

const UniswapEmbedded: React.SFC<UniswapProps> = ({ iframeUrl, className }: any) => (
  <iframe
    className={className}
    src={iframeUrl}
    height="660px"
    width="100%"
    title="Uniswap"
    style={{
      border: 0,
      margin: '0 auto',
      display: 'block',
      borderRadius: 10,
      maxWidth: 600
    }}
    id="myUniswap"
  />
);

export default UniswapEmbedded;
