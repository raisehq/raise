import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { CardDescription, HelpMessage } from './Web3Check.styles';
import { Href } from '../Layout/Layout.styles';

const NeedHelp = ({ href }: any) => (
  <HelpMessage>
    <Href target="_blank" href={href}>
      Need help?
    </Href>
  </HelpMessage>
);

const SupportedBrowser = () => (
  <CardDescription>
    <BrowserView>
      <p>
        To access Raise you will need a browser that supports CryptoWallets:
        <span>
          <a href="https://www.mozilla.org/firefox"> Firefox</a>
          <span>, </span>
          <a href="https://www.google.com/chrome">Chrome</a>
          <span> and </span>
          <a href="https://brave.com/">Brave</a>.
        </span>
      </p>
    </BrowserView>
    <MobileView>
      <p>
        To access Raise on mobile please download
        <a href="https://mobile.metamask.io/Metamask">Metamask Mobile</a>.
      </p>
    </MobileView>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);
export default SupportedBrowser;
