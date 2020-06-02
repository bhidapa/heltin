/**
 *
 * DeleteCaseStudyMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseStudyMutation,
  DeleteCaseStudyMutationVariables,
  DeleteCaseStudyMutationResponse,
} from 'relay/artifacts/DeleteCaseStudyMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseStudyMutation($input: DeleteCaseStudyInput!) {
    deleteCaseStudy(input: $input) {
      clientByClientRowId {
        rowId
        caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            id
          }
        }
      }
    }
  }
`;

export type { DeleteCaseStudyMutation };

export const deleteCaseStudyMutation = (
  variables: DeleteCaseStudyMutationVariables,
): Promise<DeleteCaseStudyMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseStudyMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
