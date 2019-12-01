/**
 *
 * CreateCaseStudyTreatmentMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseStudyTreatmentMutation,
  CreateCaseStudyTreatmentMutationVariables,
  CreateCaseStudyTreatmentMutationResponse,
} from 'relay/artifacts/CreateCaseStudyTreatmentMutation.graphql';

const mutation = graphql`
  mutation CreateCaseStudyTreatmentMutation($input: CreateCaseStudyTreatmentInput!) {
    createCaseStudyTreatment(input: $input) {
      caseStudyTreatment {
        rowId
      }
    }
  }
`;

export { CreateCaseStudyTreatmentMutation };

export const createCaseStudyTreatmentMutation = (
  variables: CreateCaseStudyTreatmentMutationVariables,
): Promise<CreateCaseStudyTreatmentMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseStudyTreatmentMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
