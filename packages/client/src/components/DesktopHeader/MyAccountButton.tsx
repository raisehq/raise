import React from 'react';
import { Icon } from 'semantic-ui-react';
import { LinkContent, ButtonMyAccount } from './DesktopHeader.styles';
import useRouter from '../../hooks/useRouter';

const MyAccountButton = () => {
  const { history }: any = useRouter();

  const navigateToMyAccount = (e) => {
    e.stopPropagation();
    history.push('/account');
  };

  return (
    <LinkContent>
      <ButtonMyAccount onClick={navigateToMyAccount} basic icon>
        <Icon name="user" />
      </ButtonMyAccount>
    </LinkContent>
  );
};

export default MyAccountButton;
