/**
 *
 * DeleteCaseHistoryFileMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseHistoryFileMutation,
  DeleteCaseHistoryFileMutationVariables,
  DeleteCaseHistoryFileMutationResponse,
} from 'relay/artifacts/DeleteCaseHistoryFileMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseHistoryFileMutation($input: DeleteCaseHistoryFileInput!) {
    deleteCaseHistoryFile(input: $input) {
      caseHistoryByCaseHistoryRowId {
        caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            id
          }
        }
      }
    }
  }
`;

export { DeleteCaseHistoryFileMutation };

export const deleteCaseHistoryFileMutation = (
  variables: DeleteCaseHistoryFileMutationVariables,
): Promise<DeleteCaseHistoryFileMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseHistoryFileMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
