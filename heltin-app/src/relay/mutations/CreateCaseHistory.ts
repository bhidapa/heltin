/**
 *
 * CreateCaseHistoryMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseHistoryMutation,
  CreateCaseHistoryMutationVariables,
  CreateCaseHistoryMutationResponse,
} from 'relay/artifacts/CreateCaseHistoryMutation.graphql';

const mutation = graphql`
  mutation CreateCaseHistoryMutation($input: CreateCaseHistoryInput!) {
    createCaseHistory(input: $input) {
      caseHistory {
        ...CaseHistoryEdit_caseHistory @relay(mask: false)
      }
    }
  }
`;

export { CreateCaseHistoryMutation };

export const createCaseHistoryMutation = (
  variables: CreateCaseHistoryMutationVariables,
): Promise<CreateCaseHistoryMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseHistoryMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
