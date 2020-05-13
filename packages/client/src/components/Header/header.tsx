import React from 'react';
import styled from 'styled-components';
import { Header as RawHeader } from '@raisehq/components';
import { BasicLink, ReactLink } from '../Links';
import routes from '../../routes';
import { useRootContext } from '../../contexts/RootContext';
import Web3Address from '../Web3Address/Web3Address';
import MyAccountButton from '../DesktopHeader/MyAccountButton';
import { Balance as HeaderBalance } from '../HeaderBalance';

const { REACT_APP_HOST_URL } = process.env;

const FlexDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkReactButton = styled(ReactLink)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 12px 16px;
  border: 1px solid #b1b3b9;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 16px;
  color: #3c4251;
  font-weight: bold;
`;

const LinkButton = styled(BasicLink)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 12px 16px;
  border: 1px solid #b1b3b9;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 16px;
  color: #3c4251;
  font-weight: bold;
`;

const AppButton = styled(LinkButton)`
  background: #00da9e;
  border: 0;
  border: 1px solid #00da9e;
  color: white;
  font-weight: bold;
  margin-left: 16px;
`;

const LoggedMenu = () => {
  const {
    store: {
      user: {
        details: { accounttype_id }
      }
    }
  }: any = useRootContext();

  const CreateLoanButton = accounttype_id === 1 && (
    <LinkReactButton to="/create-loan" title="Create loan" />
  );
  return (
    <>
      {CreateLoanButton}
      <Web3Address border={false} />
      <HeaderBalance />
      <MyAccountButton />
    </>
  );
};

const VisitorsMenu = () => (
  <>
    <LinkButton to={`${REACT_APP_HOST_URL}/login`} title="Login" />
    <AppButton to={`${REACT_APP_HOST_URL}/join`} title="Sign Up" />
  </>
);

const Header = () => {
  const {
    store: {
      auth: {
        login: { logged }
      }
    }
  }: any = useRootContext();
  const MenuItems = logged ? LoggedMenu : VisitorsMenu;

  return (
    <RawHeader {...routes}>
      <FlexDiv>{MenuItems}</FlexDiv>
    </RawHeader>
  );
};

export default Header;
