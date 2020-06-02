/**
 *
 * DeleteCaseStudyTreatmentMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseStudyTreatmentMutation,
  DeleteCaseStudyTreatmentMutationVariables,
  DeleteCaseStudyTreatmentMutationResponse,
} from 'relay/artifacts/DeleteCaseStudyTreatmentMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseStudyTreatmentMutation($input: DeleteCaseStudyTreatmentInput!) {
    deleteCaseStudyTreatment(input: $input) {
      clientMutationId
    }
  }
`;

export type { DeleteCaseStudyTreatmentMutation };

export const deleteCaseStudyTreatmentMutation = (
  variables: DeleteCaseStudyTreatmentMutationVariables,
): Promise<DeleteCaseStudyTreatmentMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseStudyTreatmentMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
