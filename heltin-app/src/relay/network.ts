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

// provides methods for fetching query data from and executing mutations against an external data source
export const network = Network.create(
  (operation, variables, cacheConfig) => {
    return Observable.create((sink) => {
      fetchQuery(operation, variables, cacheConfig, sink);
    });
  },
);
