import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { MobileMenu, Logo } from './Menu.styles';
import useMenuVisibility from '../../hooks/useMenuVisibility';
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
  const visible = useMenuVisibility();

  const onClick = () => {
    showMenu(!menu);
  };

  return visible ? (
    <MobileMenu>
      <Burger onClick={onClick} />
      <Logo src={logoPath} />
    </MobileMenu>
  ) : null;
};

export default TopMobileMenu;
