import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AppContext from '../../AppContext';

import KycTopBanner, { KycTopBannerProps } from '../KycTopBanner';

describe('<KycTopBanner />', () => {
  let container: any = null;
  let kycProps: KycTopBannerProps;

  const contextProps = {
    store: {},
    actions: {},
    history: { location: { pathname: '/' } },
    modalRefs: {},
    webSocket: {},
    daiWebSocket: {},
    match: {},
    onSetGetStarted: {},
    getStarted: false,
    web3Status: {},
    followTx: {}
  };
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
        // const history = {location: {pathname: '/'}};
        render(
          <AppContext.Provider value={contextProps}>
            <KycTopBanner {...kycProps} />
          </AppContext.Provider>,
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
        // const history = {location: {pathname: '/'}};
        render(
          <AppContext.Provider value={contextProps}>
            <KycTopBanner {...kycProps} />
          </AppContext.Provider>,
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
        // const history = {location: {pathname: '/'}};
        rendered = (
          <AppContext.Provider value={contextProps}>
            <KycTopBanner {...kycProps} />
          </AppContext.Provider>
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
      act(() => {
        // const history = {location: {pathname: '/'}};
        rendered = (
          <AppContext.Provider value={contextProps}>
            <KycTopBanner {...kycProps} />
          </AppContext.Provider>
        );
        render(rendered, container);
      });
      expect(container).toBe('The blockchain is catching up 🍆');
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
      act(() => {
        // const history = {location: {pathname: '/'}};
        rendered = (
          <AppContext.Provider value={contextProps}>
            <KycTopBanner {...kycProps} />
          </AppContext.Provider>
        );
        render(rendered, container);
      });
      expect(container).toBe(null);
    });
  });
});
