import React, { useContext } from 'react';
import { AppContext } from '../App';
import { MobileMenu, Logo } from './Menu.styles';
import Burger from './Burger';

const TopMobileMenu = () => {
  const {
    store: {
      config: { menu }
    },
    actions: {
      config: { showMenu }
    }
  }: any = useContext(AppContext);
  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`;

  const onClick = () => {
    showMenu(!menu);
  };

  return (
    <MobileMenu>
      <Burger onClick={onClick} />
      <Logo src={logoPath} />
    </MobileMenu>
  );
};

export default TopMobileMenu;
