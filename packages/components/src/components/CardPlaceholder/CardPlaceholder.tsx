import React from 'react';
import ContentLoader from 'react-content-loader';
import { CardSegment } from './CardPlaceholder.styles';

const CardPlaceholder = () => {
  return (
    <CardSegment raised>
      <ContentLoader
        height={490}
        width={372}
        speed={1}
        primaryColor="#fef4f9"
        secondaryColor="#faf1f1"
      >
        <rect x="0" y="0" rx="5" ry="5" width="372" height="124" />
        <rect x="10" y="200" rx="3" ry="3" width="340" height="10" />
        <rect x="10" y="220" rx="3" ry="3" width="345" height="10" />
        <rect x="10" y="240" rx="3" ry="3" width="201" height="10" />
        <rect x="10" y="410" rx="3" ry="3" width="350" height="50" />
      </ContentLoader>
    </CardSegment>
  );
};

export default CardPlaceholder;
