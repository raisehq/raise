import React from 'react';
import { Icon } from 'semantic-ui-react';
import {
  Footer,
  FooterLogo,
  FooterWrapper,
  FooterMenu,
  FooterImage,
  FooterDisclaimer,
  FooterList,
  FooterItem,
  FooterIcons,
  FooterFirst
} from './Footer.styles';

const FooterCmp = () => (
  <Footer>
    <FooterWrapper>
      <FooterFirst>
        <FooterMenu>
          <FooterList>
            <FooterItem>About us</FooterItem>
            <FooterItem>Help</FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>Privacy policy</FooterItem>
            <FooterItem>Terms and conditions</FooterItem>
          </FooterList>
        </FooterMenu>
        <FooterIcons>
          <a href="mailto:help@raise.it">
            <Icon name="mail outline" />
          </a>
          <a href="https://www.facebook.com/raisehq/">
            <Icon name="facebook"></Icon>
          </a>
          <a href="https://github.com/raisehq">
            <Icon name="github"></Icon>
          </a>
          <a href="https://medium.com/@raiseHQ">
            <Icon name="medium"></Icon>
          </a>
          <a href="https://twitter.com/raise_hq">
            <Icon name="twitter"></Icon>
          </a>
        </FooterIcons>
      </FooterFirst>
      <FooterLogo>
        <img src="https://static.herodev.es/images/logo.svg" />
      </FooterLogo>
      <FooterImage />
    </FooterWrapper>
    <FooterDisclaimer>
      <p>Version : Release 2.0.0.38</p>
      <p>Hero Fintech Technologies S.L. · Copyright ©2019 · All rights reserved</p>
    </FooterDisclaimer>
  </Footer>
);

export default FooterCmp;
