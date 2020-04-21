import React from 'react';
import { Icon } from 'semantic-ui-react';
import { BurgerButton } from './Menu.styles';

interface BurgerProps {
  onClick(): any;
}

const Burger: React.SFC<BurgerProps> = ({ onClick }: any) => (
  <BurgerButton icon onClick={onClick}>
    <Icon name="bars" size="large" />
  </BurgerButton>
);

export default Burger;
