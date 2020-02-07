import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { MobileMenu, Logo } from './Menu.styles';
import useMenuVisibility from '../../hooks/useMenuVisibility';
import KycTopBanner from '../TopBanner/KycTopBanner';
import Burger from './Burger';
import { isMobile } from 'react-device-detect';

const TopMobileMenu = () => {
  const {
    history,
    store: {
      config: { menu },
      user: {
        details: { accounttype_id, kyc_status }
      },
      auth: {
        login: { logged: isLogged }
      }
    },
    actions: {
      config: { showMenu }
    }
  }: any = useContext(AppContext);
  const { visible, visibleMenu } = useMenuVisibility();
  const onKYC = () => history.push('/kyc');
  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`;
  const enableKyc = visibleMenu && accounttype_id === 2;

  const onClick = () => {
    showMenu(!menu);
  };

  return visible ? (
    // If there is a parent here it will break the sticky css rule and menu will not get fixed once scroll
    <>
      {isLogged && (
        <KycTopBanner
          kycStatus={kyc_status}
          enabled={enableKyc}
          kycAction={onKYC}
          isMobile={isMobile}
        />
      )}
      <MobileMenu>
        <Burger onClick={onClick} />
        <Logo src={logoPath} />
      </MobileMenu>
    </>
  ) : null;
};

export default TopMobileMenu;
