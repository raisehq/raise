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
  FooterOffices,
  FooterCopyRight,
  MenuLink,
  SubMenu
} from './styles';

const Footer = () => (
  <FooterWrapper>
    <FooterInformationContainer>
      <FooterLogo>
        <img src={`${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`} alt="Raise.it" />
      </FooterLogo>
      <FooterMenu>
        <SubMenu>
          <MenuLink
            href="https://app.raise.it/loan-of-the-month"
            rel="noopener noreferrer"
            target="_blank"
          >
            Loan of the month
          </MenuLink>
          <MenuLink href="https://app.raise.it/investing" rel="noopener noreferrer" target="_blank">
            Invest
          </MenuLink>
          <MenuLink href="https://raise.it/help" rel="noopener noreferrer" target="_blank">
            Help
          </MenuLink>
          <MenuLink href="https://raise.it/blog" rel="noopener noreferrer" target="_blank">
            Blog
          </MenuLink>
        </SubMenu>
        <SubMenu>
          <MenuLink href="https://raise.it/about" rel="noopener noreferrer" target="_blank">
            About
          </MenuLink>
          <MenuLink
            href={`${process.env.REACT_APP_HOST_IMAGES}/privacy-policy.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy policy
          </MenuLink>
          <MenuLink
            href={`${process.env.REACT_APP_HOST_IMAGES}/toc.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms of Service
          </MenuLink>
        </SubMenu>
      </FooterMenu>
      <FooterSocial>
        <SocialLink href="mailto:help@raise.it">
          <SocialIcon name="mail outline" />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/raisehq/">
          <SocialIcon name="facebook" size="big" />
        </SocialLink>
        <SocialLink href="https://github.com/raisehq">
          <SocialIcon name="github" size="big" />
        </SocialLink>
        <SocialLink href="https://medium.com/@raiseHQ">
          <SocialIcon name="medium" size="big" />
        </SocialLink>
        <SocialLink href="https://twitter.com/raise_hq">
          <SocialIcon name="twitter" size="big" />
        </SocialLink>
      </FooterSocial>
    </FooterInformationContainer>
    <FooterCopyRightContainer>
      <FooterOffices>
        Raise was born and is being developed with passion from the Barcelona headquarters of Raise
        Labs OÜ. Registered office address: Maakri 19-1, 10145 Tallinn, Estonia. Reg. code: 14802358
      </FooterOffices>
      <FooterCopyRight>Copyright ©2020 · All rights reserved</FooterCopyRight>
    </FooterCopyRightContainer>
  </FooterWrapper>
);

export default Footer;
