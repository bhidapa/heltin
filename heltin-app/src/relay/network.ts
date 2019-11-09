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

interface Sink<T> {
  next(value: T): void;
  error(error: Error, isUncaughtThrownError?: boolean): void;
  complete(): void;
  readonly closed: boolean;
}

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });

let timeMutated = 0;
const queryMap: { [query: string]: number } = {};

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
      if (!forceFetch && queryMap[query] >= timeMutated) {
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
      let message = '';
      const text = await response.text();
      try {
        // unmarshal data
        const data = JSON.parse(text);
        // check for errors
        if (data.errors) {
          const messages: string[] = data.errors.map(({ message }: { message: string }) => message);
          message = messages.join(', ');
        }
      } catch (err) {}
      throw new Error(message || text);
    }

    // unmarshal data
    const data = await response.json();

    // check for errors
    if (data.errors) {
      const messages: string[] = data.errors.map(({ message }: { message: string }) => message);
      throw new Error(messages.join(', '));
    }

    // update cache on queries
    if (isQuery) {
      // eslint-disable-next-line require-atomic-updates
      queryMap[query] = timestamp;
      cache.set(query, variables, data);
    }

    if (isMutation) {
      // eslint-disable-next-line require-atomic-updates
      timeMutated = timestamp;
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
