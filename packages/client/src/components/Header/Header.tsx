import React from 'react';
import styled from 'styled-components';
import { Header as RawHeader } from '@raisehq/components';
import routes from '../../routes';
import { useRootContext } from '../../contexts/RootContext';
import useMenuVisibility from '../../hooks/useMenuVisibility';

// Not logged menu
import VisitorsMenu from './VisitorsMenu';
// Logged users menu
import UsersMenu from './UsersMenu';

const FlexDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled(RawHeader)`
  max-width: 1172px;
  width: 100%;
`;

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
