import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { device } from '../../utils/breakpoints';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(236, 237, 238, 0.5);
  width: 100%;
`;

export const FooterInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 99px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    margin-top: 99px;
    justify-content: space-between;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and ${device.laptop} {
    margin-right: 125px;
  }
`;
export const FooterCopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #ecedee;
  width: 100%;
  min-height: 77px;
`;

export const FooterCopyRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 52px;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 24px;
  flex-wrap: wrap;
  color: #8a8e97;
  @media screen and ${device.laptop} {
    text-align: left;
    margin-left: 81px;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
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
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  text-align: center;
  justify-content: center;
  display: flex;
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
  color: #8a8e97;
  :hover {
    color: #eb3f93;
  }
`;

export const PdfMenuLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  border: none;
  background: none;
  color: #8a8e97;
  :hover {
    color: #eb3f93;
  }
  @media screen and ${device.laptop} {
    text-align: left;
    margin-left: 81px;
  }
`;

export const PdfContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubMenuTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #3c4251;
  margin-bottom: 13px;
`;
