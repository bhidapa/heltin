/**
 *
 * Example
 *
 */

import React, { useEffect } from 'react';

// relay
import { createOperationDescriptor, getRequest } from 'relay-runtime';
import { graphql, useLazyLoadQuery, useRelayEnvironment } from 'react-relay/hooks';
import { ExampleQuery } from 'relay/artifacts/ExampleQuery.graphql';

export interface ExampleProps {}

export const Example: React.FC<ExampleProps> = () => {
  const environment = useRelayEnvironment();

  const { client } = useLazyLoadQuery<ExampleQuery>(
    graphql`
      query ExampleQuery($rowId: UUID!) {
        client: clientByRowId(rowId: $rowId) {
          id
          fullName
        }
      }
    `,
    { rowId: '88bc02bf-000d-4120-8143-c0a095bb9192' },
  );

  useEffect(() => {
    if (!client) return;

    // will NOT throw
    const data = environment.getStore().getSource().get(client.id);
    if (!data?.fullName) {
      throw new Error('Missing data through store.get()');
    }

    // will NOT throw
    let snapshot = environment.lookup(
      {
        dataID: client.id,
        node: {
          selections: [
            {
              kind: 'ScalarField',
              name: 'fullName',
            },
          ],
        },
      } as any /* is indeed valid partial reader selector*/,
    );
    if (!(snapshot.data as any)?.fullName) {
      throw new Error('Missing data in lookup using custom selector');
    }

    // will NOT throw because of the missing fields handler and the .check method
    const operation = createOperationDescriptor(
      getRequest(graphql`
        query ExampleLookupQuery($id: ID!) {
          node(id: $id) {
            ... on Client {
              fullName
            }
          }
          client(id: $id) {
            fullName
          }
        }
      `),
      { id: client.id },
    );
    environment.check(operation); // triggers `missingFieldHandlers` and updates the store accordingly
    snapshot = environment.lookup(operation.fragment);
    if (!(snapshot.data as any).node) {
      throw new Error('Missing whole node in lookup using node(id: ID!) query');
    }
    if (!(snapshot.data as any).node?.fullName) {
      throw new Error('Missing node data in lookup using node(id: ID!) query');
    }
    if (!(snapshot.data as any).client) {
      throw new Error('Missing whole client in lookup using client(id: ID!) query');
    }
    if (!(snapshot.data as any).client?.fullName) {
      throw new Error('Missing client data in lookup using client(id: ID!) query');
    }
  }, [client]);

  return null;
};
