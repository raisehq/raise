import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { device } from '../../utils/breakpoints';

interface IMenu {
  display: boolean;
}

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
  margin-top: 99px;
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
  justify-content: space-around;
  @media screen and ${device.laptop} {
    justify-content: flex-start;
  }
`;
export const FooterCopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #ecedee;
  width: 100%;
  min-height: 77px;
  padding-top: 52px;
  padding-bottom: 55px;
  @media screen and ${device.laptop} {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const FooterCopyRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap; wrap;
  justify-content: space-around;
  align-items: center;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.div``;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 24px;
  flex-wrap: wrap;
  color: #8a8e97;
  margin: 20px;
  align-items: center;
  @media screen and ${device.laptop} {
    text-align: left;
    margin: 0px;
    margin-left: 81px;

    align-items: flex-start;
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
  margin-top: 41px;
  margin-bottom: 47px;
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
  padding-bottom: 30px;
  @media screen and ${device.laptop} {
    padding-bottom: 0px;
  }
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
  margin-bottom: 30px;
  :hover {
    color: #eb3f93;
  }
  @media screen and ${device.laptop} {
    text-align: left;
    margin-left: 81px;
    margin-bottom: 0px;
  }
`;

export const PdfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ${device.laptop} {
    flex-direction: row;
  }
`;

export const SubMenuTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #3c4251;
  margin-bottom: 13px;
`;

/* menu mobile */

export const FooterMenuMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const MobileLogoWrapper = styled.div`
  border-bottom: 1px solid #d8d9dc;
  width: 100%;
  justify-content: center;
  display: flex;
  height: 99px;
  align-items: center;
`;

export const DropDownMenuTitle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const MenuMobileTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #3c4251;
  margin-bottom: 20px;
  margin-top: 20px;
  margin: auto;
  padding-left: 10px;
`;

export const DropdownMenu = styled.div<IMenu>`
  display: ${({ display }) => (display ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`;

export const SubMenuContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 56px;
  flex-direction: column;
  border-bottom: 1px solid #d8d9dc;
  justify-content: center;
  align-items: center;
`;

export const TriangleDown = styled.div`
  width: 10px;
  height: 10px;
`;

export const Triangle = styled.div`
  margin: auto;
  width: 13px;
  height: 13px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  border-right: 3px solid #b1b3b9;
  border-bottom: 3px solid #b1b3b9;
`;
