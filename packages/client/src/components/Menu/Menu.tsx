import React, { useContext, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import {
  RaiseMenu,
  Web3Address,
  MenuSubList,
  MenuList,
  MenuIcon,
  MenuIconActive,
  CloseButton,
  Logo,
  MenuLogout,
  Credits
} from './Menu.styles';
import { AppContext } from '../App';

const Menus = {
  1: [
    {
      title: 'My dashboard',
      link: '/dashboard',
      icon: 'th large'
    },
    {
      title: 'Request a loan',
      link: '/create-loan',
      icon: 'university'
    }
  ],
  2: [
    {
      title: 'My dashboard',
      link: '/dashboard',
      icon: 'th large'
    }
  ]
};

const commonRoutes = [
  {
    title: 'Help',
    link: '/help',
    new_tab: true
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    new_tab: true
  },
  {
    title: 'Terms and Conditions',
    link: '/terms',
    new_tab: true
  }
];

const Menu = () => {
  const {
    actions: {
      config: { showMenu }
    },
    history: {
      location: { pathname }
    },
    store: {
      user: {
        details: { accounttype_id }
      },
      config: { menu }
    }
  }: any = useContext(AppContext);

  const toRoute = () => {
    showMenu(false);
  };

  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`;

  const getMenu = useCallback(
    links =>
      !links || !links.length
        ? []
        : links.map(item => (
            <li key={item.link} className={pathname === item.link ? 'active' : 'non-active'}>
              <Link to={item.link} onClick={toRoute} target={item.new_tab ? '_blank' : ''}>
                {item.icon && <MenuIcon name={item.icon} size="large" />}
                {item.title}
                {pathname === item.link && <MenuIconActive name="chevron right" />}
                <Icon name="angle right" />
              </Link>
            </li>
          )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accounttype_id, pathname]
  );

  const closeMenu = () => {
    showMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add('hidescroll');
    } else {
      document.body.classList.remove('hidescroll');
    }
    return () => {
      document.body.classList.remove('hidescroll');
    };
  }, [menu]);

  return (
    <RaiseMenu vertical borderless inverted className={menu ? 'open' : 'closed'}>
      <Logo src={logoPath} />
      <Web3Address />
      <CloseButton onClick={closeMenu} icon>
        <Icon name="close" size="big" />
      </CloseButton>
      <MenuList>{getMenu(Menus[accounttype_id])}</MenuList>
      <div style={{ flex: 2 }} />
      <MenuSubList>{getMenu(commonRoutes)}</MenuSubList>
      <MenuLogout />
      <Credits>
        <p>Version: Release {process.env.REACT_APP_VERSION} (Beta)</p>
        <p>
          Hero Fintech Technologies S.L.<br></br>Copyright ©2019
        </p>
        <p>All Rights Reserved</p>
      </Credits>
    </RaiseMenu>
  );
};

export default Menu;
