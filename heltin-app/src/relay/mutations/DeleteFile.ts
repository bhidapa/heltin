/**
 *
 * DeleteFileMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteFileMutation,
  DeleteFileMutationVariables,
  DeleteFileMutationResponse,
} from 'relay/artifacts/DeleteFileMutation.graphql';

const mutation = graphql`
  mutation DeleteFileMutation($input: DeleteFileInput!) {
    deleteFile(input: $input) {
      clientMutationId
    }
  }
`;

export { DeleteFileMutation };

export const deleteFileMutation = (
  variables: DeleteFileMutationVariables,
): Promise<DeleteFileMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteFileMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
