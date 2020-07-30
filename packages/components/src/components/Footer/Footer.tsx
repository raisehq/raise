/* eslint-disable no-script-url */
import React, { useState } from 'react';

import {
  FooterWrapper,
  FooterInformationContainer,
  FooterCopyRightContainer,
  FooterLogo,
  FooterMenu,
  FooterSocial,
  SocialLink,
  SocialIcon,
  PdfContainer,
  SocialContainer,
  FooterCopyRight,
  MenuLink,
  SubMenu,
  SubMenuTitle,
  FooterCopyRightWrapper,
  PdfMenuLink,
  FooterMenuMobile,
  DropDownMenuTitle,
  DropdownMenu,
  SubMenuContainer,
  MobileLogoWrapper,
  TriangleDown,
  Triangle,
  MenuMobileTitle
} from './styles';

const Footer = ({ isMobile }) => {
  const [dropdown, setDropdown] = useState({
    raising: false,
    resources: false,
    weareraise: false,
    reachus: false
  });

  const onDropdown = (id) => {
    setDropdown({ ...dropdown, ...{ [id]: !dropdown[id] } });
  };

  return (
    <FooterWrapper>
      {!isMobile ? (
        <FooterInformationContainer>
          <SocialContainer>
            <FooterLogo>
              <img src={`${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`} alt="Raise.it" />
            </FooterLogo>
            <FooterSocial>
              {/* <SocialLink href="mailto:help@raise.it">
            <SocialIcon name="mail outline" />
          </SocialLink> */}
              <SocialLink href="https://www.facebook.com/raisehq/">
                <SocialIcon name="facebook" link size="big" />
              </SocialLink>
              <SocialLink href="https://github.com/raisehq">
                <SocialIcon name="github" link size="big" />
              </SocialLink>
              <SocialLink href="https://medium.com/@raiseHQ">
                <SocialIcon name="medium" link size="big" />
              </SocialLink>
              <SocialLink href="https://twitter.com/raise_hq">
                <SocialIcon name="twitter" link size="big" />
              </SocialLink>
            </FooterSocial>
          </SocialContainer>
          <FooterMenu>
            <SubMenu>
              <SubMenuTitle>Raising</SubMenuTitle>
              <MenuLink
                href="https://app.raise.it/investing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Invest with Raise
              </MenuLink>
              <MenuLink
                href="https://app.raise.it/investmentopportunity"
                rel="noopener noreferrer"
                target="_blank"
              >
                Investment opportunities
              </MenuLink>
              <MenuLink href="https://borrow.raise.it" rel="noopener noreferrer" target="_blank">
                Become a borrower
              </MenuLink>
            </SubMenu>
            <SubMenu>
              <SubMenuTitle>Resources</SubMenuTitle>
              <MenuLink
                href="https://raise.it/blog/kyc-guide"
                rel="noopener noreferrer"
                target="_blank"
              >
                How to verify my account
              </MenuLink>
              <MenuLink
                href="https://raise.it/blog/how-to-install-and-use-metamask-with-raise"
                rel="noopener noreferrer"
                target="_blank"
              >
                How to connect a wallet
              </MenuLink>
              <MenuLink
                href="https://raise.it/blog/top5exchanges"
                rel="noopener noreferrer"
                target="_blank"
              >
                How to buy crypto
              </MenuLink>
              <MenuLink href="https://raise.it/help" rel="noopener noreferrer" target="_blank">
                Help
              </MenuLink>
            </SubMenu>
            <SubMenu>
              <SubMenuTitle>We are Raise</SubMenuTitle>
              <MenuLink href="https://raise.it/blog" rel="noopener noreferrer" target="_blank">
                Blog
              </MenuLink>
              <MenuLink href="https://raise.it/about" rel="noopener noreferrer" target="_blank">
                About
              </MenuLink>
              <MenuLink
                href="https://raise.it/blog/the-raise-token-present-and-future"
                rel="noopener noreferrer"
                target="_blank"
              >
                Token
              </MenuLink>
            </SubMenu>
            <SubMenu>
              <SubMenuTitle>Reach us</SubMenuTitle>
              <MenuLink href="mailto:hello@raise.it" rel="noopener noreferrer" target="_blank">
                Email
              </MenuLink>
              <MenuLink href="https://t.me/raisehq" rel="noopener noreferrer" target="_blank">
                Telegram
              </MenuLink>
              {/* <MenuLink
                href="javascript:$zopim.livechat.window.show();"
                rel="noopener noreferrer"
                target="_blank"
              >
                Chat
              </MenuLink> */}
            </SubMenu>
          </FooterMenu>
        </FooterInformationContainer>
      ) : (
        <FooterMenuMobile>
          <MobileLogoWrapper>
            <FooterLogo>
              <img src={`${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`} alt="Raise.it" />
            </FooterLogo>
          </MobileLogoWrapper>
          <SubMenuContainer>
            <DropDownMenuTitle onClick={() => onDropdown('raising')}>
              <MenuMobileTitle>Raising</MenuMobileTitle>
              <TriangleDown>
                <Triangle />
              </TriangleDown>
            </DropDownMenuTitle>
            <DropdownMenu display={dropdown.raising}>
              <MenuLink
                href="https://app.raise.it/investing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Invest with Raise
              </MenuLink>
              <MenuLink
                href="https://app.raise.it/investmentopportunity"
                rel="noopener noreferrer"
                target="_blank"
              >
                Investment opportunities
              </MenuLink>
              <MenuLink href="https://borrow.raise.it" rel="noopener noreferrer" target="_blank">
                Become a borrower
              </MenuLink>
            </DropdownMenu>
          </SubMenuContainer>
          <SubMenuContainer>
            <DropDownMenuTitle onClick={() => onDropdown('resources')}>
              <MenuMobileTitle>Resources</MenuMobileTitle>
              <TriangleDown>
                <Triangle />
              </TriangleDown>
            </DropDownMenuTitle>
            <DropdownMenu display={dropdown.resources}>
              <MenuLink
                href="https://raise.it/blog/kyc-quide"
                rel="noopener noreferrer"
                target="_blank"
              >
                How to verify my account
              </MenuLink>
              <MenuLink
                href="https://raise.it/blog/how-to-install-and-use-metamask-with-raise"
                rel="noopener noreferrer"
                target="_blank"
              >
                How to connect a wallet
              </MenuLink>
              <MenuLink
                href="https://raise.it/blog/top5exchanges"
                rel="noopener noreferrer"
                target="_blank"
              >
                How to buy crypto
              </MenuLink>
              <MenuLink href="https://raise.it/help" rel="noopener noreferrer" target="_blank">
                Help
              </MenuLink>
            </DropdownMenu>
          </SubMenuContainer>
          <SubMenuContainer>
            <DropDownMenuTitle onClick={() => onDropdown('weareraise')}>
              <MenuMobileTitle>We are Raise</MenuMobileTitle>
              <TriangleDown>
                <Triangle />
              </TriangleDown>
            </DropDownMenuTitle>
            <DropdownMenu display={dropdown.weareraise}>
              <MenuLink href="https://raise.it/blog" rel="noopener noreferrer" target="_blank">
                Blog
              </MenuLink>
              <MenuLink href="https://raise.it/about" rel="noopener noreferrer" target="_blank">
                About
              </MenuLink>
            </DropdownMenu>
          </SubMenuContainer>
          <SubMenuContainer>
            <DropDownMenuTitle onClick={() => onDropdown('reachus')}>
              <MenuMobileTitle>Reach us</MenuMobileTitle>
              <TriangleDown>
                <Triangle />
              </TriangleDown>
            </DropDownMenuTitle>
            <DropdownMenu display={dropdown.reachus}>
              <MenuLink href="mailto:hello@raise.it" rel="noopener noreferrer" target="_blank">
                Email
              </MenuLink>
              <MenuLink href="https://t.me/raisehq" rel="noopener noreferrer" target="_blank">
                Telegram
              </MenuLink>
              {/* <MenuLink
                href="javascript:$zopim.livechat.window.show();"
                rel="noopener noreferrer"
                target="_blank"
              >
                Chat
              </MenuLink> */}
            </DropdownMenu>
          </SubMenuContainer>
          <FooterSocial>
            {/* <SocialLink href="mailto:help@raise.it">
            <SocialIcon name="mail outline" />
          </SocialLink> */}
            <SocialLink href="https://www.facebook.com/raisehq/">
              <SocialIcon name="facebook" link size="big" />
            </SocialLink>
            <SocialLink href="https://github.com/raisehq">
              <SocialIcon name="github" link size="big" />
            </SocialLink>
            <SocialLink href="https://medium.com/@raiseHQ">
              <SocialIcon name="medium" link size="big" />
            </SocialLink>
            <SocialLink href="https://twitter.com/raise_hq">
              <SocialIcon name="twitter" link size="big" />
            </SocialLink>
          </FooterSocial>
        </FooterMenuMobile>
      )}
      <FooterCopyRightWrapper>
        <FooterCopyRightContainer>
          <PdfContainer>
            <FooterCopyRight>Copyright ©2020 · All rights reserved</FooterCopyRight>
            <PdfMenuLink
              href={`${process.env.REACT_APP_HOST_IMAGES}/privacy-policy.pdf`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy policy
            </PdfMenuLink>
            <PdfMenuLink
              href={`${process.env.REACT_APP_HOST_IMAGES}/toc.pdf`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Terms of Service
            </PdfMenuLink>
          </PdfContainer>
          <FooterCopyRight>Raise Labs OÜ 14802358</FooterCopyRight>
        </FooterCopyRightContainer>
      </FooterCopyRightWrapper>
    </FooterWrapper>
  );
};

export default Footer;
