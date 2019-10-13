/**
 *
 * DeleteClientMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteClientMutation,
  DeleteClientMutationVariables,
  DeleteClientMutationResponse,
} from 'relay/artifacts/DeleteClientMutation.graphql';

const mutation = graphql`
  mutation DeleteClientMutation($input: DeleteClientInput!) {
    deleteClient(input: $input) {
      client {
        id
      }
    }
  }
`;

export { DeleteClientMutation };

export const deleteClientMutation = (
  variables: DeleteClientMutationVariables,
): Promise<DeleteClientMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteClientMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
