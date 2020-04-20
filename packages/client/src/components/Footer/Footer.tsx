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
              <a href="https://raise.it/about" rel="noopener noreferrer" target="_blank">
                About us
              </a>
            </FooterItem>
            <FooterItem>
              <a href="https://raise.it/help" rel="noopener noreferrer" target="_blank">
                Help
              </a>
            </FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>
              <a
                href={`${theme.resources}/privacy-policy.pdf`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy policy
              </a>
            </FooterItem>
            <FooterItem>
              <a href={`${theme.resources}/toc.pdf`} rel="noopener noreferrer" target="_blank">
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
            <Icon name="facebook" />
          </a>
          <a href="https://github.com/raisehq">
            <Icon name="github" />
          </a>
          <a href="https://medium.com/@raiseHQ">
            <Icon name="medium" />
          </a>
          <a href="https://twitter.com/raise_hq">
            <Icon name="twitter" />
          </a>
        </FooterIcons>
      </FooterFirst>
      <FooterLogo>
        <img src="https://static.raise.it/images/logo.svg" alt="Raise.it" />
      </FooterLogo>
      <FooterImage />
    </FooterWrapper>
    <FooterDisclaimer>
      <p>
        Raise was born and is being developed with passion from the Barcelona headquarters of Raise
        <br />
        Labs OÜ. Registered office address: Maakri 19-1, 10145 Tallinn, Estonia. Reg. code: 14802358
        <br />
        Copyright ©2020 · All rights reserved
      </p>
    </FooterDisclaimer>
  </Footer>
);

export default FooterCmp;
