import React, { useContext, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { RaiseMenu, MenuList, MenuIcon, MenuIconActive, CloseButton, Logo, MenuLogout, Credits } from './Menu.styles';
import Web3Address from '../Web3Address';
import { AppContext } from '../App';

const Menus = {
  1: [
    {
      title: 'My Dashboard',
      link: '/dashboard',
      icon: 'th large',
    },
    {
      title: 'Request a loan',
      link: '/create-loan',
      icon: 'university'
    },
    {
      title: 'My Loans',
      link: '/marketplace',
      icon: 'paper plane'
    }
  ],
  2: [
    {
      title: 'My Dashboard',
      link: '/dashboard',
      icon: 'th large',
    },
    {
      title: 'Request a loan',
      link: '/create-loan',
      icon: 'university'
    },
    {
      title: 'My Loans',
      link: '/marketplace',
      icon: 'paper plane'
    }
  ]
};

const commonRoutes = [
  {
    title: 'Help',
    link: '/help',
    icon: 'help'
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    icon: 'help'
  },
  {
    title: 'Terms and Conditions',
    link: '/terms',
    icon: 'help'
  },
];

const Menu = () => {
  const {
    actions: {
      config: {
        showMenu
      }
    },
    history: {
      location: { pathname }
    },
    store: {
      auth: { accounttype_id },
      config: { menu }
    }
  }: any = useContext(AppContext);


  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo_light.svg`;

  const getMenu = useCallback(
    () =>
      [...Menus[accounttype_id || 1], ...commonRoutes].map(item => (
        <li
          key={item.link}
          className={pathname === item.link ? 'active' : 'non-active'}
        >
          <Link to={item.link}>
            {item.icon && <MenuIcon name={item.icon} size='large' /> }
            {item.title}
            {pathname === item.link && <MenuIconActive name="chevron right" />}
            <Icon name='angle right' />
          </Link>
        </li>
      )),
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
    return (() => {
      document.body.classList.remove('hidescroll');
    });
  }, [menu])

  return (
    <RaiseMenu vertical borderless inverted className={menu ? 'open' : 'closed' }>
      <Logo src={logoPath} />
      <Web3Address />
      <CloseButton onClick={closeMenu} icon >
        <Icon name='close' size='big' inverted/>
      </CloseButton>
      <MenuList>{getMenu()}</MenuList>
      <div style={{ flex: 2 }} />
      <MenuLogout />
      <Credits>
        <p>Version: Release 0.1.0.38 (Beta)</p>
        <p>Copyright ©2019 Hero Fintech Technologies. All Rights Reserved</p>
      </Credits>
    </RaiseMenu>
  );
};

export default Menu;
