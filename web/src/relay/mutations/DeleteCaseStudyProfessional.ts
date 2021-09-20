/**
 *
 * DeleteCaseStudyProfessionalMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseStudyProfessionalMutation,
  DeleteCaseStudyProfessionalMutationVariables,
  DeleteCaseStudyProfessionalMutationResponse,
} from 'relay/artifacts/DeleteCaseStudyProfessionalMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseStudyProfessionalMutation(
    $input: DeleteCaseStudyMentalHealthProfessionalInput!
  ) {
    deleteCaseStudyMentalHealthProfessional(input: $input) {
      caseStudyByCaseStudyRowId {
        caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            id
          }
        }
      }
    }
  }
`;

export type { DeleteCaseStudyProfessionalMutation };

export const deleteCaseStudyProfessionalMutation = (
  variables: DeleteCaseStudyProfessionalMutationVariables,
): Promise<DeleteCaseStudyProfessionalMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseStudyProfessionalMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        store.invalidateStore();
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
