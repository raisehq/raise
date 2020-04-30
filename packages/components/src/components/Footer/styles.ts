import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #ecedee;
`;

export const FooterInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 46px;
  flex-wrap: wrap;
`;

export const FooterCopyRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 44px;
`;

export const FooterLogo = styled.div`
  margin: 40px;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px;
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 10px 0 10px;
  width: 120px;
  font-size: 16px;
  line-height: 24px;
  flex-wrap: wrap;
  color: #8a8e97;
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 40px;
  color: #8a8e97;
`;

export const SocialLink = styled.a`
  margin-right: 15px;
`;

export const FooterOffices = styled.div`
  max-width: 552px;
  font-size: 10px;
  text-align: center;
  align-self: center;
`;

export const FooterCopyRight = styled.div`
  width: 100%;
  font-size: 10px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const SocialIcon = styled(Icon)`
  font-size: 25px !important;
  background: #b1b3b9;
  text-decoration: none;
  border: none;
  background: none;
  color: #8a8e97 !important;
`;

export const MenuLink = styled.a`
  font-size: 16px;
  margin-bottom: 20px;
  text-decoration: none;
  border: none;
  background: none;
  color: #8a8e97 !important;
`;
