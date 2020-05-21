import React from 'react';
import { Button, MobileButtonLink } from '@raisehq/components';
import { MobileView, BrowserView } from 'react-device-detect';
import useRouter from '../../hooks/useRouter';
import { useRootContext } from '../../contexts/RootContext';
import MyAccountButton from '../DesktopHeader/MyAccountButton';
import { Balance as HeaderBalance } from '../HeaderBalance';
import { HeaderButton } from './UsersMenu.styles';

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
  const { push } = useRouter();

  const toCreateLoan = () => {
    push('/create-loan');
  };

  const CreateLoan = accounttype_id === 1 && (
    <HeaderButton
      size="standard"
      type="secondary"
      minWidth
      onClick={toCreateLoan}
      text="Create loan"
    />
  );

  return (
    <>
      {!disabled && (
        <>
          <HeaderBalance />
          <MyAccountButton />
        </>
      )}
      <MobileView renderWithFragment>
        <MobileButtonLink onClick={onSignout} text="Log out" />
      </MobileView>
      <BrowserView renderWithFragment>
        {CreateLoan}
        <Button size="standard" type="tertiary" onClick={onSignout} text="Log out" />
      </BrowserView>
    </>
  );
};

export default UsersMenu;
