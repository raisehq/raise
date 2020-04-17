import React from 'react';

import { TopSection, Logo } from './styles';

interface CardTopSectionProps {
  href: string | undefined;
  src: string;
}
const CardTopSection = (props: CardTopSectionProps) => {
  const { src, href } = props;

  return (
    <TopSection>
      <Logo src={src} href={href} />
    </TopSection>
  );
};

export default CardTopSection;
