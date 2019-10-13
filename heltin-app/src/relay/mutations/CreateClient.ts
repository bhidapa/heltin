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

const mutation = graphql`
  mutation CreateClientMutation($input: CreateClientInput!) {
    createClient(input: $input) {
      client {
        rowId
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
    }),
  );
