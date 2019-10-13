/**
 *
 * UpdateClientMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  UpdateClientMutation,
  UpdateClientMutationVariables,
  UpdateClientMutationResponse,
} from 'relay/artifacts/UpdateClientMutation.graphql';

const mutation = graphql`
  mutation UpdateClientMutation($input: UpdateClientInput!) {
    updateClient(input: $input) {
      client {
        ...ClientEdit_client @relay(mask: false)
      }
    }
  }
`;

export { UpdateClientMutation };

export const updateClientMutation = (
  variables: UpdateClientMutationVariables,
): Promise<UpdateClientMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<UpdateClientMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
