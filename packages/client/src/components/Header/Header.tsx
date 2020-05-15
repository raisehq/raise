import React from 'react';
import { StyledHeader, FlexDiv } from './Header.styles';
import routes from '../../routes';
import { useRootContext } from '../../contexts/RootContext';
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
  const MenuItems = logged ? UsersMenu : VisitorsMenu;
  const { visible } = useMenuVisibility();
  if (!visible) {
    return null;
  }
  return (
    <StyledHeader {...routes}>
      <FlexDiv>
        <MenuItems />
      </FlexDiv>
    </StyledHeader>
  );
};

export default Header;
