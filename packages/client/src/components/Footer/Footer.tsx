import React from 'react';
import {
  Footer,
  FooterLogo,
  FooterWrapper,
  FooterMenu,
  FooterImage,
  FooterDisclaimer,
  FooterList,
  FooterItem
} from './Footer.styles';

const FooterCmp = () => (
  <Footer>
    <FooterWrapper>
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
      <FooterLogo>
        <img src="https://static.herodev.es/images/logo.svg" />
      </FooterLogo>
      <FooterImage>dsd</FooterImage>
    </FooterWrapper>
    <FooterDisclaimer>
      <p>Version : Release 2.0.0.38</p>
      <p>Hero Fintech Technologies S.L. · Copyright ©2019 · All rights reserved</p>
    </FooterDisclaimer>
  </Footer>
);

export default FooterCmp;
