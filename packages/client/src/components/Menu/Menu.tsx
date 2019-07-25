import React, { useContext, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { MenuList, MenuIcon, MenuIconActive } from './Menu.styles';
import { AppContext } from '../App';

const Menus = {
  1: [
    {
      title: 'My Dashboard',
      link: '/dashboard'
    },
    {
      title: 'Request a loan',
      link: '/create-loan'
    },
    {
      title: 'My Loans',
      link: '/marketplace'
    }
  ],
  2: [
    {
      title: 'My Dashboard',
      link: '/dashboard'
    },
    {
      title: 'Request a loan',
      link: '/create-loan'
    },
    {
      title: 'My Loans',
      link: '/marketplace'
    }
  ]
};

const Menu = () => {
  const {
    history: {
      location: { pathname }
    },
    store: {
      auth: { accounttype_id }
    }
  }: any = useContext(AppContext);

  const getMenu = useCallback(
    () =>
      Menus[accounttype_id || 1].map(item => (
        <li
          key={item.link}
          className={pathname === item.link ? 'active' : 'non-active'}
        >
          <Link to={item.link}>
            <MenuIcon name="expand" />
            {item.title}
            {pathname === item.link && <MenuIconActive name="chevron right" />}
          </Link>
        </li>
      )),
    [accounttype_id, pathname]
  );

  return <MenuList>{getMenu()}</MenuList>;
};

export default Menu;
