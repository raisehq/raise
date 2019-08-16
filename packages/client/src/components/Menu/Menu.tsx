import React, { useContext, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Divider } from 'semantic-ui-react';
import { RaiseMenu, Web3Address, MenuList, MenuIcon, MenuIconActive, CloseButton, Logo, MenuLogout, Credits } from './Menu.styles';
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
      icon: 'chart line'
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
      icon: 'chart line'
    }
  ]
};

const commonRoutes = [
  {
    title: 'Help',
    link: '/help',
    icon: 'help',
    new_tab: true
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    icon: 'help',
    new_tab: true
  },
  {
    title: 'Terms and Conditions',
    link: '/terms',
    icon: 'help',
    new_tab: true
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

  const toRoute = () => {
    showMenu(false);
  }

  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo_light.svg`;

  const getMenu = useCallback(
    (links) =>
      links.map(item => (
        <li
          key={item.link}
          className={pathname === item.link ? 'active' : 'non-active'}
        >
          <Link to={item.link} onClick={toRoute} target={item.new_tab ? '_blank' : ''}>
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
      <MenuList>
      {getMenu(Menus[accounttype_id || 1])}
      <Divider inverted />
      {getMenu(commonRoutes)}
      </MenuList>
      <div style={{ flex: 2 }} />
      <MenuLogout />
      <Credits>
        <p>Version: Release {process.env.REACT_APP_VERSION} (Beta)</p>
        <p>Hero Fintech Technologies S.L. Copyright ©2019 </p>
        <p>All Rights Reserved</p>
      </Credits>
    </RaiseMenu>
  );
};

export default Menu;
