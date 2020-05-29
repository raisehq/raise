import React from 'react';
import { Header as RaiseHeader } from '@raisehq/components';
import { FlexDiv } from './Header.styles';
import routes from '../../routes';
import { useRootContext } from '../../contexts/RootContext';

import { useAppContext } from '../../contexts/AppContext';
import useMenuVisibility from '../../hooks/useMenuVisibility';

// Not logged menu
import VisitorsMenu from './VisitorsMenu';
// Logged users menu
import UsersMenu from './UsersMenu';

const Header = () => {
  const {
    store: {
      auth: {
        login: { logged }
      }
    }
  }: any = useRootContext();
  const { web3Status }: any = useAppContext();

  const MenuItems = logged ? UsersMenu : VisitorsMenu;
  const { visible } = useMenuVisibility();
  if (!visible) {
    return null;
  }
  const disabled = !(web3Status.unlocked && web3Status.accountMatches);
  return (
    <RaiseHeader disabled={logged && disabled} logged={logged} {...routes}>
      <FlexDiv>
        <MenuItems disabled={logged && disabled} />
      </FlexDiv>
    </RaiseHeader>
  );
};

export default Header;
