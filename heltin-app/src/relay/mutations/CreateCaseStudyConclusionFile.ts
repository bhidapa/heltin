/**
 *
 * CreateCaseStudyConclusionFileMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseStudyConclusionFileMutation,
  CreateCaseStudyConclusionFileMutationVariables,
  CreateCaseStudyConclusionFileMutationResponse,
} from 'relay/artifacts/CreateCaseStudyConclusionFileMutation.graphql';

const mutation = graphql`
  mutation CreateCaseStudyConclusionFileMutation($input: CreateCaseStudyConclusionFileInput!) {
    createCaseStudyConclusionFile(input: $input) {
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

export { CreateCaseStudyConclusionFileMutation };

export const createCaseStudyConclusionFileMutation = (
  variables: CreateCaseStudyConclusionFileMutationVariables,
): Promise<CreateCaseStudyConclusionFileMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseStudyConclusionFileMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
