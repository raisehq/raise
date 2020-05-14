import React from 'react';
import styled from 'styled-components';
import { SubHeader, SubPageHeader, TopHeader } from '@raisehq/components';
import RawHeader from './RawHeader';
import { device } from '../../commons/breakpoints';
import routes from '../../routes';
import { useRootContext } from '../../contexts/RootContext';
import useMenuVisibility from '../../hooks/useMenuVisibility';

// Not logged menu
import VisitorsMenu from './VisitorsMenu';
// Logged users menu
import UsersMenu from './UsersMenu';

const FlexDiv = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and ${device.tablet} {
    justify-content: flex-end;
  }
`;

const StyledHeader = styled(RawHeader)`
  & ${TopHeader}, & ${SubHeader} > *:first-child,
  & ${SubPageHeader} > *:first-child {
    max-width: 1172px;
    width: 100%;
    margin: 0 auto;
  }
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
