/**
 *
 * UpdateCaseHistoryMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  UpdateCaseHistoryMutation,
  UpdateCaseHistoryMutationVariables,
  UpdateCaseHistoryMutationResponse,
} from 'relay/artifacts/UpdateCaseHistoryMutation.graphql';

const mutation = graphql`
  mutation UpdateCaseHistoryMutation($input: UpdateCaseHistoryInput!) {
    updateCaseHistory(input: $input) {
      caseHistory {
        ...CaseHistoryManage_caseHistory @relay(mask: false)
      }
    }
  }
`;

export type { UpdateCaseHistoryMutation };

export const updateCaseHistoryMutation = (
  variables: UpdateCaseHistoryMutationVariables,
): Promise<UpdateCaseHistoryMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<UpdateCaseHistoryMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
