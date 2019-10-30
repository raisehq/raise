import React, { useContext, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {
  RaiseMenu,
  Web3Address,
  MenuSubList,
  MenuList,
  CloseButton,
  Logo,
  MenuLogout,
  BalanceMobile
} from './Menu.styles';
import AppContext from '../AppContext';

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
    onSetGetStarted,
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

  const toGetStarted = () => {
    onSetGetStarted();
    showMenu(false);
  };

  const Menus = {
    1: [
      {
        id: 'borrower-get-started',
        title: 'Get started',
        link: '/#my-activity',
        onClick: toGetStarted
      },
      {
        id: 'borrower-my-activity',
        title: 'My activity',
        link: '/#my-activity'
      },
      {
        id: 'borrower-create-loan',
        title: 'Create a loan',
        link: '/create-loan'
      }
    ],
    2: [
      {
        id: 'lender-get-started',
        title: 'Get started',
        link: '/#my-activity',
        onClick: toGetStarted
      },
      {
        id: 'lender-my-activity',
        title: 'My activity',
        link: '/#my-activity'
      }
    ]
  };

  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`;

  const getMenu = useCallback(
    (links = []) =>
      links.map((item, i) => (
        // eslint-disable-next-line
        <li key={`menu-li-${i}`} className={pathname === item.link ? 'active' : 'non-active'}>
          <Link
            // eslint-disable-next-line
            key={`menu-link-${i}`}
            to={item.link}
            onClick={item.onClick ? item.onClick : toRoute}
            target={item.new_tab ? '_blank' : ''}
          >
            {item.title}
          </Link>
        </li>
      )),
    // eslint-disable-next-line
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
      <BalanceMobile />
      <CloseButton onClick={closeMenu} icon>
        <Icon name="close" size="big" />
      </CloseButton>
      <div style={{ flex: 2 }} />
      <MenuList>{getMenu(Menus[accounttype_id])}</MenuList>
      <div style={{ flex: 2 }} />
      <MenuSubList>{getMenu(commonRoutes)}</MenuSubList>
      <MenuLogout />
    </RaiseMenu>
  );
};

export default Menu;
