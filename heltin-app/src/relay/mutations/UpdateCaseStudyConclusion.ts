/**
 *
 * UpdateCaseStudyConclusionMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  UpdateCaseStudyConclusionMutation,
  UpdateCaseStudyConclusionMutationVariables,
  UpdateCaseStudyConclusionMutationResponse,
} from 'relay/artifacts/UpdateCaseStudyConclusionMutation.graphql';

const mutation = graphql`
  mutation UpdateCaseStudyConclusionMutation($input: UpdateCaseStudyConclusionInput!) {
    updateCaseStudyConclusion(input: $input) {
      caseStudyConclusion {
        ...CaseStudyConclusionManage_caseStudyConclusion @relay(mask: false)
      }
    }
  }
`;

export type { UpdateCaseStudyConclusionMutation };

export const updateCaseStudyConclusionMutation = (
  variables: UpdateCaseStudyConclusionMutationVariables,
): Promise<UpdateCaseStudyConclusionMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<UpdateCaseStudyConclusionMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
