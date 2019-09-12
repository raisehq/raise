// @ts-ignore-file
const SUBS = {};
const DATA = {};
class UseWebsocket {
  public constructor(url: string, protocol: string, options: object = {}) {
    // subscribe to events
    console.log('[WEBSOCKET] MOCK ');
  }

  public subscribe = (query, variables, subscriptionName, callback) => {
    console.log('[WEBSOCKET] SUBSCRITE ', subscriptionName);
    SUBS[subscriptionName] = callback;
    if (DATA[subscriptionName]) callback(null, DATA[subscriptionName]);
  };

  public static trigger(subscriptionName, data) {
    DATA[subscriptionName] = data;
    if (SUBS[subscriptionName]) {
      console.log('TRIGGER DATA ', subscriptionName, SUBS[subscriptionName]);
      SUBS[subscriptionName](null, DATA[subscriptionName]);
    } else {
      console.error('NO DATA ', SUBS[subscriptionName]);
    }
  }

  public shutdown = () => {
    console.log('[WEBSOCKET] SHUTDOWN ');
  };
}
// @ts-ignore
window.UseWebsocket = UseWebsocket;
// @ts-ignore
export default window.Cypress ? UseWebsocket : false;
