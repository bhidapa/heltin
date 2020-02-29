/**
 *
 * relay/network
 *
 * Reference: https://relay.dev/docs/en/network-layer
 *
 */

import {
  Network,
  RequestParameters,
  Variables,
  CacheConfig,
  Observable,
  QueryResponseCache,
  GraphQLResponse,
} from 'relay-runtime';
import { lookupSession } from './client/session';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { environment } from './environment';

interface Sink<T = any> {
  next(value: T): void;
  error(error: Error, isUncaughtThrownError?: boolean): void;
  complete(): void;
  readonly closed: boolean;
}

function handleGraphqlError(data: any): Error | null {
  if (typeof data !== 'object') {
    throw new Error('Malformed data argument passed to `handleGraphqlError`');
  }
  if (data.errors) {
    const message = data.errors.map(({ message }: { message: string }) => message).join(', ');
    return new Error(message);
  }
  if (Object.keys(data).length === 1 && data.message) {
    return new Error(data.message);
  }
  return null;
}

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });

const queryMap: { [key: string]: number } = {};
function makeQueryMapKey(query: string, variables: Variables) {
  return query + JSON.stringify(variables);
}

let timeMutated = 0;
export function remoteDatabaseMutated(timestamp: number = Date.now()) {
  timeMutated = timestamp;
  environment.commitUpdate((store) => (store as any).invalidateStore()); // not typed yet
}

async function fetchQuery(
  operation: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
  sink: Sink<GraphQLResponse>,
) {
  try {
    const isMutation = operation.operationKind === 'mutation';
    const isQuery = operation.operationKind === 'query';
    const query = operation.text;
    if (!query) {
      throw new Error('query is not defined');
    }

    const timestamp = Date.now();

    // try to get data from cache on queries if not flagged for force fetching
    const fromCache = cache.get(query, variables);
    if (isQuery && fromCache !== null) {
      sink.next(fromCache);

      const forceFetch = cacheConfig && cacheConfig.force;
      if (!forceFetch && queryMap[makeQueryMapKey(query, variables)] >= timeMutated) {
        sink.complete();
        return;
      }
    }

    // prepare headers
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    // get token and set header if the token exists
    const session = lookupSession();
    if (session) {
      headers.set('Authorization', `Bearer ${session.token}`);
    }

    // otherwise, fetch data from server
    const response = await fetch(
      // Here we include the `operation.operationKind` and `operation.name` only
      // because its easier to navigate through the GraphQL requests in the DevTools.
      // For example: `query TestQuery {...}` URL would end like this: `GRAPHQL_ENDPOINT?query=TestQuery`.
      `/api/graphql?${operation.operationKind}=${operation.name}`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          // `operation.text` holds properly formatted GraphQL query.
          query,
          // Variables used alongside the query/mutation.
          variables,
        }),
      },
    );

    if (response.status < 200 || response.status >= 300) {
      let err: Error | null = null;
      const text = await response.text();
      try {
        err = handleGraphqlError(JSON.parse(text));
        // eslint-disable-next-line no-empty
      } catch (err) {}
      throw err || new Error(text);
    }

    // unmarshal data
    const data = await response.json();

    // check for errors
    const err = handleGraphqlError(data);
    if (err) {
      throw err;
    }

    // update cache on queries
    if (isQuery) {
      // eslint-disable-next-line require-atomic-updates
      queryMap[makeQueryMapKey(query, variables)] = timestamp;
      cache.set(query, variables, data);
    }

    if (isMutation) {
      timeMutated = timestamp;
    }

    sink.next(data);
    sink.complete();
  } catch (err) {
    sink.error(err);
  }
}

// the websocket close reason is omitted in the CloseEvent error. this function maps codes to reasons
function webSocketCloseEventToReason(event: CloseEvent) {
  switch (event.code) {
    case 1000:
      return 'The connection to the server has closed gracefully';
    case 1001:
      return 'The connection to the server is terminated because the server is going down or the browser is navigating away from the page';
    case 1002:
      return 'The connection to the server is terminated due to a protocol error';
    case 1003:
      return 'The connection to the server is terminated because it has received a type of data it cannot accept';
    case 1004:
      // reserved. might be defined in the future
      break;
    case 1005:
      return 'The connection to the server is terminated without a reason';
    case 1006:
      return 'The connection to the server has closed abnormally';
    case 1007:
      return 'The connection to the server is terminated because it received data within a message that was not consistent with the type of the message';
    case 1008:
      return 'The connection to the server is terminated because it has received a message that violates its policy';
    case 1009:
      return 'The connection to the server is terminated because it has received a message that is too big for it to process';
    case 1010:
      // NOTE: that this status code is not used by the server, because it can fail the WebSocket handshake instead.
      return (
        "An server (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. Specifically, the extensions that are needed are: " +
        event.reason
      );
    case 1011:
      return 'The connection to the server is terminated because it encountered an unexpected condition that prevented it from fulfilling the request';
    case 1015:
      return "The connection to the server has closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).";
    default:
      return 'The connection to the server has closed';
  }
}

let subscriptionClient: SubscriptionClient | null = null;
const subscribeSinks: Sink[] = [];
function subscribe(
  operation: RequestParameters,
  variables: Variables,
  _0: CacheConfig, // cacheConfig
  sink: Sink,
) {
  subscribeSinks.push(sink);

  // create or reuse websocket client singleton
  if (!subscriptionClient) {
    const connectionParams: { [key: string]: string } = {};

    // get token and set connection params if the token exists
    const session = lookupSession();
    if (session) {
      connectionParams['Authorization'] = `Bearer ${session.token}`;
    }

    subscriptionClient = new SubscriptionClient(GQL_WEBSOCKET_ENPOINT, {
      // lazy: false, NOTE: lazy websocket usage is implemented here, don't use it from the library
      connectionParams,
    });
  }

  // underlying websocket close listener. we use it because we can get the
  // close event with the code to display a nice error message to the user
  function closeListener(event: CloseEvent) {
    if (event.wasClean) {
      sink.complete();
    } else {
      sink.error(new Error(webSocketCloseEventToReason(event)));
    }
  }
  (subscriptionClient.client as WebSocket).addEventListener('close', closeListener);

  // request subscription
  const subscription = subscriptionClient
    .request({
      query: operation.text || undefined,
      variables,
      operationName: operation.name,
    })
    .subscribe({
      next: (data) => {
        const err = handleGraphqlError(data);
        if (err) {
          return sink.error(err);
        }
        sink.next(data);
      },
      error: (dataOrErr) => {
        if (dataOrErr instanceof Error) {
          sink.error(dataOrErr);
        } else {
          sink.error(
            handleGraphqlError(dataOrErr) || new Error('Unknown server connection request error'),
          );
        }
      },
      complete: sink.complete,
    });

  // disposal
  return () => {
    subscribeSinks.splice(subscribeSinks.indexOf(sink), 1);

    if (subscriptionClient) {
      if (subscriptionClient.status === WebSocket.OPEN) {
        subscription.unsubscribe();
        (subscriptionClient.client as WebSocket).removeEventListener('close', closeListener);
        if (subscribeSinks.length === 0) {
          subscriptionClient.close();
          subscriptionClient = null;
        }
      } else if (subscriptionClient.status !== WebSocket.CONNECTING) {
        subscriptionClient = null;
      }
    }
  };
}

// provides methods for fetching query data from and executing mutations against an external data source
export const network = Network.create(
  (operation, variables, cacheConfig) => {
    return Observable.create((sink) => {
      fetchQuery(operation, variables, cacheConfig, sink);
    });
  },
  (operation, variables, cacheConfig) => {
    return Observable.create((sink) => {
      return subscribe(operation, variables, cacheConfig, sink);
    });
  },
);
