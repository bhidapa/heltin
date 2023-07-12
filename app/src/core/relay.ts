/**
 *
 * relay
 *
 */
import { Environment, Network, Observable, RecordSource, Store } from 'relay-runtime';

import { buildHeaders, checkResponse } from 'lib/request';

export const environment = new Environment({
  store: new Store(new RecordSource()),
  network: Network.create((operation, variables) => {
    return Observable.create((sink) => {
      const ctrl = new AbortController();

      (async () => {
        const response = await fetch(
          // Here we include the `operation.operationKind` and `operation.name` only
          // because its easier to navigate through the GraphQL requests in the DevTools.
          // For example: `query TestQuery {...}` URL would end like this: `GRAPHQL_ENDPOINT?query=TestQuery`.
          `/api/graphql?${operation.operationKind}=${operation.name}`,
          {
            signal: ctrl.signal,
            method: 'POST',
            headers: buildHeaders({ contentType: 'json' }),
            body: JSON.stringify({
              operationName: operation.name,
              // `operation.text` holds properly formatted GraphQL query.
              query: operation.text || '',
              // Variables used alongside the query/mutation.
              variables,
              // Add persisted query hash id if present
              ...(operation.id
                ? { extensions: { persistedQuery: { sha256Hash: operation.id } } }
                : {}),
            }),
          },
        ).then(checkResponse);

        const data = await response.json();

        // Check GraphQL errors
        if (data.errors) {
          const message: string = data.errors
            .map(({ message }: { message: string }) => message)
            .join(', ');
          throw new Error(message);
        }
        if (Object.keys(data).length === 1 && data.message) {
          throw new Error(data.message);
        }

        return data;
      })()
        .then(sink.next)
        .then(sink.complete)
        .catch(sink.error);

      return () => {
        ctrl.abort();
      };
    });
  }),
});

if (import.meta.env.DEV) {
  // @ts-expect-error: For debugging purposes
  window.relayEnvironment = environment;
}
