/**
 *
 * CreateClientMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateClientMutation,
  CreateClientMutationVariables,
  CreateClientMutationResponse,
} from 'relay/artifacts/CreateClientMutation.graphql';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation CreateClientMutation($input: CreateClientInput!) {
    createClient(input: $input) {
      client {
        rowId
      }
      clientEdge {
        node {
          rowId
          ...ClientsTableRow_item
        }
      }
    }
  }
`;

export { CreateClientMutation };

export const createClientMutation = (
  variables: CreateClientMutationVariables,
): Promise<CreateClientMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateClientMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
      updater: (store) => {
        const filterClientsConn = ConnectionHandler.getConnection(
          store.getRoot(),
          'ClientsTable_filterClients',
        );
        if (filterClientsConn) {
          const clientEdge = store.getRootField('createClient').getLinkedRecord('clientEdge');
          ConnectionHandler.insertEdgeBefore(filterClientsConn, clientEdge);
        }
      },
    }),
  );
