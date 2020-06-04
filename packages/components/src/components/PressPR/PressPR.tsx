import React from 'react';
import { PressContainer, PRContainer, PRImage } from './styles';

const PressPR = ({ data }: any) => {
  return (
    <PressContainer>
      {data.map((pr) => (
        <PRContainer key={pr.publisher} href={pr.article_link} target="_blank">
          <PRImage src={pr.publisher_logo} />
        </PRContainer>
      ))}
    </PressContainer>
  );
};

export default PressPR;
