// @ts-ignore-file
class UseWebsocket {
  public constructor(url: string, protocol: string, options: object = {}) {
    // subscribe to events
    console.log('[WEBSOCKET] MOCK ');
  }

  public subscribe = (query, variables, subscriptionName, callback) => {
    console.log('[WEBSOCKET] SUBSCRITE ');
  };

  public shutdown = () => {
    console.log('[WEBSOCKET] SHUTDOWN ');
  };
}

// @ts-ignore
export default window.Cypress ? UseWebsocket : false;
