import React from 'react';
import { Icon } from 'semantic-ui-react';

import { TopSection, Logo, MenuSpots, Container } from './styles';

const CardTopSection = (props: any) => {
  return (
    <Container>
      <TopSection>
        <Logo src={props.src} />
        <MenuSpots>
          <Icon
            name={'ellipsis horizontal'}
            size="large"
            onClick={props.onOpenGraph}
          />
        </MenuSpots>
      </TopSection>
    </Container>
  );
};

export default CardTopSection;
