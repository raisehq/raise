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
          <Icon name="mail outline"></Icon>
          <Icon name="facebook"></Icon>
          <Icon name="github"></Icon>
          <Icon name="medium"></Icon>
          <Icon name="twitter"></Icon>
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
