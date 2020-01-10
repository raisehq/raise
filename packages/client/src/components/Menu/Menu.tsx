import React, { useContext, useEffect, useCallback } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
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
import theme from '../../theme';
import { HEADER_MENU_SIZE } from '../../commons/constants';
import AppContext from '../AppContext';
import useMenuVisibility from '../../hooks/useMenuVisibility';

const navigateToOutsideNewTab = route => () => {
  window.open(route, '_blank');
};

const commonRoutes = [
  {
    id: 'help',
    title: 'Help',
    link: '/help',
    new_tab: true,
    onClick: navigateToOutsideNewTab(`${process.env.REACT_APP_WEB_URL}/help`)
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    link: '/privacy-policy',
    new_tab: true,
    onClick: navigateToOutsideNewTab(`${theme.resources}/privacy-policy.pdf`)
  },
  {
    id: 'terms',
    title: 'Terms and Conditions',
    link: '/terms',
    new_tab: true,
    onClick: navigateToOutsideNewTab(`${theme.resources}/toc.pdf`)
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
    history,
    store: {
      user: {
        details: { accounttype_id }
      },
      auth: {
        login: { logged: isLogged }
      },
      config: { menu }
    }
  }: any = useContext(AppContext);
  const { visibleMenu } = useMenuVisibility();

  const toRoute = () => {
    showMenu(false);
  };

  const toGetStarted = () => {
    onSetGetStarted();
    showMenu(false);
  };

  const toCreateLoan = route => () => {
    history.push(route);
    showMenu(false);
  };

  const toMyActivity = () => {
    if (history.location.pathname !== '/') {
      history.push('/');
      scroll.scrollToTop();
    }
    showMenu(false);
  };

  const Menus = {
    1: [
      {
        id: 'borrower-my-activity',
        title: 'My activity',
        link: 'myActivity',
        onClick: toMyActivity
      },
      {
        id: 'borrower-create-loan',
        title: 'Create a loan',
        link: '/create-loan',
        onClick: toCreateLoan('/create-loan')
      }
    ],
    2: [
      {
        id: 'lender-get-started',
        title: 'Get started',
        link: 'toGetStarted',
        onClick: toGetStarted
      },
      {
        id: 'lender-my-activity',
        title: 'My activity',
        link: 'myActivity',
        onClick: toMyActivity
      }
    ]
  };

  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`;

  const getMenu = useCallback(
    links =>
      !links || !links.length
        ? []
        : links.map(item => (
            <li key={item.id} className={pathname === item.link ? 'active' : 'non-active'}>
              <Link
                to={item.link}
                onClick={item.onClick ? item.onClick : toRoute}
                offset={HEADER_MENU_SIZE.myActivity}
                smooth
              >
                {item.title}
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
      {isLogged && visibleMenu && (
        <>
          <Web3Address />
          <BalanceMobile />
        </>
      )}
      <CloseButton onClick={closeMenu} icon>
        <Icon name="close" size="big" />
      </CloseButton>
      {isLogged && visibleMenu && (
        <>
          <div style={{ flex: 2 }} />
          <MenuList>{getMenu(Menus[accounttype_id])}</MenuList>
          <div style={{ flex: 2 }} />
          <MenuSubList>{getMenu(commonRoutes)}</MenuSubList>
        </>
      )}
      <MenuLogout />
    </RaiseMenu>
  );
};

export default Menu;
