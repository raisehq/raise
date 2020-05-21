import React from 'react';
import { Button } from '@raisehq/components';
import { LinkReactButton } from './UsersMenu.styles';
import { useRootContext } from '../../contexts/RootContext';
import MyAccountButton from '../DesktopHeader/MyAccountButton';
import { Balance as HeaderBalance } from '../HeaderBalance';

const UsersMenu = ({ disabled = false }: { disabled?: boolean }) => {
  const {
    store: {
      user: {
        details: { accounttype_id }
      }
    },
    actions: {
      auth: { onSignout }
    }
  }: any = useRootContext();

  const CreateLoanButton = accounttype_id === 1 && (
    <LinkReactButton to="/create-loan" title="Create loan" />
  );

  return (
    <>
      {CreateLoanButton}
      {!disabled && (
        <>
          <HeaderBalance />
          <MyAccountButton />
        </>
      )}
      <Button size="standard" type="tertiary" onClick={onSignout} text="Log out" />
    </>
  );
};

export default UsersMenu;
