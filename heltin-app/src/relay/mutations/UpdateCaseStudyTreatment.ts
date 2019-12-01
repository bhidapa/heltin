/**
 *
 * UpdateCaseStudyTreatmentMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  UpdateCaseStudyTreatmentMutation,
  UpdateCaseStudyTreatmentMutationVariables,
  UpdateCaseStudyTreatmentMutationResponse,
} from 'relay/artifacts/UpdateCaseStudyTreatmentMutation.graphql';

const mutation = graphql`
  mutation UpdateCaseStudyTreatmentMutation($input: UpdateCaseStudyTreatmentInput!) {
    updateCaseStudyTreatment(input: $input) {
      caseStudyTreatment {
        ...CaseStudyTreatmentManage_caseStudyTreatment @relay(mask: false)
      }
    }
  }
`;

export { UpdateCaseStudyTreatmentMutation };

export const updateCaseStudyTreatmentMutation = (
  variables: UpdateCaseStudyTreatmentMutationVariables,
): Promise<UpdateCaseStudyTreatmentMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<UpdateCaseStudyTreatmentMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
