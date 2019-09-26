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
import theme from '../../theme';

const FooterCmp = () => (
  <Footer>
    <FooterWrapper>
      <FooterFirst>
        <FooterMenu>
          <FooterList>
            <FooterItem>
              <a href="https://raise.it/about" target="_blank">
                About us
              </a>
            </FooterItem>
            <FooterItem>
              <a href="https://raise.it/help" target="_blank">
                Help
              </a>
            </FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>
              <a href={`${theme.resources}/privacy-policy.pdf`} target="_blank">
                Privacy policy
              </a>
            </FooterItem>
            <FooterItem>
              <a href={`${theme.resources}/toc.pdf`} target="_blank">
                Terms and conditions
              </a>
            </FooterItem>
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
      <p>
        Raise Labs OÜ. Registered office address: Maakri 19-1, 10145 Tallinn, Estonia. Reg. code:
        14802358 · Copyright ©2019 · All rights reserved
      </p>
    </FooterDisclaimer>
  </Footer>
);

export default FooterCmp;
