import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { device } from '../../utils/breakpoints';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ecedee;
  width: 100%;
`;

export const FooterInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 96px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    justify-content: space-between;
  }
`;

export const FooterCopyRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
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
  margin: 0 10px 0 10px;
  width: 120px;
  font-size: 16px;
  line-height: 24px;
  flex-wrap: wrap;
  color: #8a8e97;
  @media screen and ${device.laptop} {
    text-align: left;
  }
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
