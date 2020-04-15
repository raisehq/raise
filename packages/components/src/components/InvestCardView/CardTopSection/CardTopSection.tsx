import React from 'react';
import { Icon } from 'semantic-ui-react';

import { TopSection, Logo, MenuSpots, Container } from './styles';

interface CardTopSectionProps {
  href: string;
  src: string;
  onOpenGraph: any;
}
const CardTopSection = (props: CardTopSectionProps) => {
  const { href, src, onOpenGraph } = props;

  return (
    <Container>
      <TopSection>
        <Logo src={src} href={href} />
        <MenuSpots>
          <Icon name={'ellipsis vertical'} size="large" onClick={onOpenGraph} />
        </MenuSpots>
      </TopSection>
    </Container>
  );
};

export default CardTopSection;
