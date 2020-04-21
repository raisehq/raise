/* eslint-disable */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { AppContext } from '../../../contexts/AppContext';
import { RootContext } from '../../../contexts/RootContext';
import KycTopBanner, { KycTopBannerProps } from '../KycTopBanner';

describe('<KycTopBanner />', () => {
  let container: any = null;
  let kycProps: KycTopBannerProps;

  const rootContextProps = {
    store: {},
    actions: {},
    followTx: {}
  };
  const appContextProps = {
    modalRefs: {},
    webSocket: {},
    daiWebSocket: {},
    onSetGetStarted: {},
    getStarted: false,
    web3Status: {}
  };

  const Providers = ({ children }: any) => (
    <RootContext.Provider value={rootContextProps}>
      <AppContext.Provider value={appContextProps}>{children}</AppContext.Provider>
    </RootContext.Provider>
  );

  describe('when KYC_STATUS is Pending (2) ', () => {
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement('div');
      document.body.appendChild(container);
      kycProps = {
        enabled: true,
        isMobile: false,
        kycBCStatus: false,
        kycStatus: 2,
        kycAction: () => {}
      };
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should show message : "Your application is under review"', () => {
      act(() => {
        render(
          <Providers>
            <KycTopBanner {...kycProps} />
          </Providers>,
          container
        );
      });
      expect(container.textContent).toBe('Your application is under review');
    });
  });
  describe('when KYC_STATUS is Pending Registry (4) ', () => {
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement('div');
      document.body.appendChild(container);
      kycProps = {
        enabled: true,
        isMobile: false,
        kycBCStatus: false,
        kycStatus: 4,
        kycAction: () => {}
      };
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should show message : "The blockchain is catching up 🍆"', () => {
      act(() => {
        render(
          <Providers>
            <KycTopBanner {...kycProps} />
          </Providers>,
          container
        );
      });
      expect(container.textContent).toBe('The blockchain is catching up 🍆');
    });
  });
  describe('when KYC_STATUS is Error (1) ', () => {
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement('div');
      document.body.appendChild(container);
      kycProps = {
        enabled: true,
        isMobile: false,
        kycBCStatus: false,
        kycStatus: 1,
        kycAction: () => {}
      };
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should show button with the text : "Verify Account"', () => {
      let rendered;
      act(() => {
        rendered = (
          <Providers>
            <KycTopBanner {...kycProps} />
          </Providers>
        );
        render(rendered, container);
      });
      const button = container.getElementsByTagName('button')[0];
      expect(button.textContent).toBe('Verify Account');
    });
  });
  describe('when KYC_STATUS is Success (3) and kyc status in blockchain is false ', () => {
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement('div');
      document.body.appendChild(container);
      kycProps = {
        enabled: true,
        isMobile: false,
        kycBCStatus: false,
        kycStatus: 3,
        kycAction: () => {}
      };
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should show button with the text : "The blockchain is catching up 🍆"', () => {
      let rendered;
      const emptyContainer = document.createElement('div');
      act(() => {
        rendered = (
          <Providers>
            <KycTopBanner {...kycProps} />
          </Providers>
        );
        render(rendered, container);
      });
      expect(container).toStrictEqual(emptyContainer);
    });
  });
  describe('when KYC_STATUS is Success (3) and kyc status in blockchain is true ', () => {
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement('div');
      document.body.appendChild(container);
      kycProps = {
        enabled: true,
        isMobile: false,
        kycBCStatus: true,
        kycStatus: 3,
        kycAction: () => {}
      };
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should not render the top bar', () => {
      let rendered;
      let emptyContainer = document.createElement('div');
      act(() => {
        rendered = (
          <Providers>
            <KycTopBanner {...kycProps} />
          </Providers>
        );
        render(rendered, container);
      });
      expect(container).toStrictEqual(emptyContainer);
    });
  });
});

/* eslint-enable */
