// @ts-ignore-file
const SUBS = {};
const DATA = {};
const TAG = "[WEBSOCKET_MOCK]";
class UseWebsocket {
  public constructor(url: string, protocol: string, options: object = {}) {
    // subscribe to events
    console.log(TAG, ' Start ....');
  }

  public subscribe = (query, variables, subscriptionName, callback) => {
    console.log(TAG, ' SUBSCRITE ', subscriptionName);
    SUBS[subscriptionName] = callback;
    if (DATA[subscriptionName]) {
      console.log(TAG, 'DATA STORED : ', DATA[subscriptionName]);
      callback(null, DATA[subscriptionName]);
    }
  };

  public static trigger(subscriptionName, data) {
    DATA[subscriptionName] = data;
    if (SUBS[subscriptionName]) {
      console.log(TAG, 'TRIGGER DATA ', subscriptionName, SUBS[subscriptionName]);
      SUBS[subscriptionName](null, DATA[subscriptionName]);
    } else {
      console.error(TAG, ' NO DATA ', SUBS[subscriptionName]);
    }
  }

  public shutdown = () => {
    console.log(TAG, '[WEBSOCKET] SHUTDOWN ');
  };
}
// @ts-ignore
window.UseWebsocket = UseWebsocket;
// @ts-ignore
export default window.Cypress ? UseWebsocket : false;
