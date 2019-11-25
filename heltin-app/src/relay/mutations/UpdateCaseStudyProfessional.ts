/**
 *
 * UpdateCaseStudyProfessionalMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  UpdateCaseStudyProfessionalMutation,
  UpdateCaseStudyProfessionalMutationVariables,
  UpdateCaseStudyProfessionalMutationResponse,
} from 'relay/artifacts/UpdateCaseStudyProfessionalMutation.graphql';

const mutation = graphql`
  mutation UpdateCaseStudyProfessionalMutation(
    $input: UpdateCaseStudyMentalHealthProfessionalInput!
  ) {
    updateCaseStudyMentalHealthProfessional(input: $input) {
      caseStudyMentalHealthProfessional {
        id
        rowId
        primary
      }
    }
  }
`;

export { UpdateCaseStudyProfessionalMutation };

export const updateCaseStudyProfessionalMutation = (
  variables: UpdateCaseStudyProfessionalMutationVariables,
): Promise<UpdateCaseStudyProfessionalMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<UpdateCaseStudyProfessionalMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
