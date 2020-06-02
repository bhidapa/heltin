/**
 *
 * CreateCaseHistoryFileMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseHistoryFileMutation,
  CreateCaseHistoryFileMutationVariables,
  CreateCaseHistoryFileMutationResponse,
} from 'relay/artifacts/CreateCaseHistoryFileMutation.graphql';

const mutation = graphql`
  mutation CreateCaseHistoryFileMutation($input: CreateCaseHistoryFileInput!) {
    createCaseHistoryFile(input: $input) {
      caseHistoryByCaseHistoryRowId {
        caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            ...CaseHistoryFilesManage_caseHistoryFiles
          }
        }
      }
    }
  }
`;

export type { CreateCaseHistoryFileMutation };

export const createCaseHistoryFileMutation = (
  variables: CreateCaseHistoryFileMutationVariables,
): Promise<CreateCaseHistoryFileMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseHistoryFileMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
