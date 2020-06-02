/**
 *
 * DeleteCaseStudyConclusionFileMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseStudyConclusionFileMutation,
  DeleteCaseStudyConclusionFileMutationVariables,
  DeleteCaseStudyConclusionFileMutationResponse,
} from 'relay/artifacts/DeleteCaseStudyConclusionFileMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseStudyConclusionFileMutation($input: DeleteCaseStudyConclusionFileInput!) {
    deleteCaseStudyConclusionFile(input: $input) {
      caseStudyConclusionByCaseStudyConclusionRowId {
        caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
          }
        }
      }
    }
  }
`;

export type { DeleteCaseStudyConclusionFileMutation };

export const deleteCaseStudyConclusionFileMutation = (
  variables: DeleteCaseStudyConclusionFileMutationVariables,
): Promise<DeleteCaseStudyConclusionFileMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseStudyConclusionFileMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
