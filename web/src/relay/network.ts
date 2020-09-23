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
  GraphQLResponse,
} from 'relay-runtime';

interface Sink<T = unknown> {
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

async function fetchQuery(
  operation: RequestParameters,
  variables: Variables,
  _0: CacheConfig,
  sink: Sink<GraphQLResponse>,
) {
  try {
    const query = operation.text;
    if (!query) {
      throw new Error('query is not defined');
    }

    // otherwise, fetch data from server
    const response = await fetch(
      // Here we include the `operation.operationKind` and `operation.name` only
      // because its easier to navigate through the GraphQL requests in the DevTools.
      // For example: `query TestQuery {...}` URL would end like this: `GRAPHQL_ENDPOINT?query=TestQuery`.
      `/api/graphql?${operation.operationKind}=${operation.name}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

    sink.next(data);
    sink.complete();
  } catch (err) {
    sink.error(err);
  }
}

// provides methods for fetching query data from and executing mutations against an external data source
export const network = Network.create((operation, variables, cacheConfig) => {
  return Observable.create((sink) => {
    fetchQuery(operation, variables, cacheConfig, sink);
  });
});
