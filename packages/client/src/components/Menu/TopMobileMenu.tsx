import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { MobileMenu, Logo } from './Menu.styles';
import useMenuVisibility from '../../hooks/useMenuVisibility';
import TopBanner from '../TopBanner';
import Burger from './Burger';

const TopMobileMenu = () => {
  const {
    history,
    store: {
      config: { menu },
      user: { details: {
        accounttype_id, kyc_status
      } }
    },
    actions: {
      config: { showMenu }
    }
  }: any = useContext(AppContext);
  const enableKyc = accounttype_id === 2;
  const onKYC = () => history.push('/kyc');
  const logoPath = `${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`;
  const {visible} = useMenuVisibility();

  const onClick = () => {
    showMenu(!menu);
  };

  return visible ? (
    // If there is a parent here it will break the sticky css rule and menu will not get fixed once scroll
    <>
      <TopBanner kycStatus={kyc_status} enabled={enableKyc} action={onKYC} mobile />
      <MobileMenu>
        <Burger onClick={onClick} />
        <Logo src={logoPath} />
      </MobileMenu>
    </>
  ) : null;
};

export default TopMobileMenu;
