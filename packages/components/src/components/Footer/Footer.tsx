import React from 'react';

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
  PdfMenuLink
} from './styles';

const Footer = () => (
  <FooterWrapper>
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
          <MenuLink href="https://app.raise.it/investing" rel="noopener noreferrer" target="_blank">
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
            href="https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%2218946872%22%5D"
            rel="noopener noreferrer"
            target="_blank"
          >
            The team
          </MenuLink>
        </SubMenu>
        <SubMenu>
          <SubMenuTitle>Reach us</SubMenuTitle>
          <MenuLink href="mailto:hello@raise.it" rel="noopener noreferrer" target="_blank">
            Email
          </MenuLink>
          <MenuLink href="#" rel="noopener noreferrer" target="_blank">
            Chat
          </MenuLink>
        </SubMenu>
      </FooterMenu>
    </FooterInformationContainer>
    <FooterCopyRightWrapper>
      <FooterCopyRightContainer>
        <FooterCopyRight>Copyright ©2020 · All rights reserved</FooterCopyRight>
        <PdfContainer>
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
      </FooterCopyRightContainer>
    </FooterCopyRightWrapper>
  </FooterWrapper>
);

export default Footer;
