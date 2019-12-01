/**
 *
 * UpdateCaseStudyMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  UpdateCaseStudyMutation,
  UpdateCaseStudyMutationVariables,
  UpdateCaseStudyMutationResponse,
} from 'relay/artifacts/UpdateCaseStudyMutation.graphql';

const mutation = graphql`
  mutation UpdateCaseStudyMutation($input: UpdateCaseStudyInput!) {
    updateCaseStudy(input: $input) {
      caseStudy {
        ...CaseStudyManage_caseStudy @relay(mask: false)
      }
    }
  }
`;

export { UpdateCaseStudyMutation };

export const updateCaseStudyMutation = (
  variables: UpdateCaseStudyMutationVariables,
): Promise<UpdateCaseStudyMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<UpdateCaseStudyMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
