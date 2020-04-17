import React from 'react';

import { TopSection, Logo } from './styles';

interface CardTopSectionProps {
  src: string;
}
const CardTopSection = (props: CardTopSectionProps) => {
  const { src } = props;

  return (
    <TopSection>
      <Logo src={src} />
    </TopSection>
  );
};

export default CardTopSection;
