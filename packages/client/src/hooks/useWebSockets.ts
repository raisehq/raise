import WebSocketMock from '../__mocks__/webSocketMocks';

const GQL = {
  CONNECTION_INIT: 'connection_init',
  CONNECTION_ACK: 'connection_ack',
  CONNECTION_ERROR: 'connection_error',
  CONNECTION_KEEP_ALIVE: 'ka',
  START: 'start',
  STOP: 'stop',
  CONNECTION_TERMINATE: 'connection_terminate',
  DATA: 'data',
  ERROR: 'error',
  COMPLETE: 'complete'
};

class UseWebsocket {
  private url: string;

  private options: object;

  private client: any;

  private protocol: string;

  private subscriptions: Map<string, Function>;

  public constructor(url: string, protocol: string, options: object = {}) {
    this.url = url;
    this.options = options;
    this.protocol = protocol;
    this.subscriptions = new Map();
    // subscribe to events
    this.client = new WebSocket(this.url, this.protocol);

    this.client.onopen = () => {
      this.client.send(
        JSON.stringify({
          type: GQL.CONNECTION_INIT,
          payload: this.options
        })
      );
    };

    this.client.onclose = event => {
      // The code 1000 (Normal Closure) is special, and results in no error or payload.
      const error = event.code === 1000 ? null : new Error(event);
      // Notify the subscriber.
      // Notify the subscriptions.
      const callbacks = Array.from(this.subscriptions.values());
      this.subscriptions.clear();

      callbacks.map(callback => callback(error, null));
    };

    this.client.onmessage = this.onMessage.bind(this);
  }

  public subscribe = (query, variables, subscriptionName, callback) => {
    if (this.client.readyState === 1 && this.subscriptions.get(subscriptionName) === undefined) {
      this.subscriptions.set(subscriptionName, callback);
      this.client.send(
        JSON.stringify({
          type: GQL.START,
          id: subscriptionName,
          payload: {
            query,
            variables,
            operationName: subscriptionName
          }
        })
      );
    } else if (this.client.readyState === 0) {
      setTimeout(() => {
        this.subscribe(query, variables, subscriptionName, callback);
      }, 1000);
    }
  };

  public shutdown = () => {
    this.client.send(
      JSON.stringify({
        type: GQL.CONNECTION_TERMINATE
      })
    );
    this.client.close();
  };

  private onMessage(event) {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case GQL.CONNECTION_ACK: {
        // This is the successful response to GQL.CONNECTION_INIT
        break;
      }
      case GQL.CONNECTION_ERROR: {
        // This may occur:
        // 1. In response to GQL.CONNECTION_INIT
        // 2. In case of parsing errors in the client which will not disconnect.
        break;
      }
      case GQL.CONNECTION_KEEP_ALIVE: {
        // This may occur:
        // 1. After GQL.CONNECTION_ACK,
        // 2. Periodically to keep the connection alive.
        break;
      }
      case GQL.DATA: {
        // This message is sent after GQL.START to transfer the result of the GraphQL subscription.
        const callback = this.subscriptions.get(data.id);
        if (callback) {
          const error = data.payload.errors ? new Error(data.payload.errors) : null;
          callback(error, data.payload.data);
        }
        break;
      }
      case GQL.ERROR: {
        // This method is sent when a subscription fails. This is usually dues to validation errors
        // as resolver errors are returned in GQL.DATA messages.
        const callback = this.subscriptions.get(data.id);
        if (callback) {
          callback(new Error(data.payload), null);
        }
        break;
      }
      case GQL.COMPLETE: {
        // This is sent when the operation is done and no more dta will be sent.
        const callback = this.subscriptions.get(data.id);
        if (callback) {
          this.subscriptions.delete(data.id);
          // Return a null error and payload to indicate the subscription is closed.
          callback(null, null);
        }
        break;
      }
      case GQL.CONNECTION_TERMINATE: {
        break;
      }
      default:
        break;
    }
  }
}

export default WebSocketMock || UseWebsocket;
