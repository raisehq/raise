import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { MobileMenu, Logo } from './Menu.styles';
import useMenuVisibility from '../../hooks/useMenuVisibility';
import KycTopBanner from '../TopBanner/KycTopBanner';
import Burger from './Burger';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';

const TopMobileMenu = () => {
  const {
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
  }: any = useRootContext();
  const { history }: any = useRouter();
  const [kycBCStatus, setKycBCStatus] = useState(false);

  useEffect(() => {
    if (kyc_status === 3) {
      setKycBCStatus(true);
    }
  }, [kyc_status]);

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
          kycBCStatus={kycBCStatus}
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
