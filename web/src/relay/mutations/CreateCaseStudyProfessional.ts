/**
 *
 * CreateCaseStudyProfessionalMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseStudyProfessionalMutation,
  CreateCaseStudyProfessionalMutationVariables,
  CreateCaseStudyProfessionalMutationResponse,
} from 'relay/artifacts/CreateCaseStudyProfessionalMutation.graphql';

const mutation = graphql`
  mutation CreateCaseStudyProfessionalMutation(
    $input: CreateCaseStudyMentalHealthProfessionalInput!
  ) {
    createCaseStudyMentalHealthProfessional(input: $input) {
      caseStudyByCaseStudyRowId {
        caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            id
            rowId
            professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {
              rowId
              type
              fullName
            }
            primary
          }
        }
      }
    }
  }
`;

export type { CreateCaseStudyProfessionalMutation };

export const createCaseStudyProfessionalMutation = (
  variables: CreateCaseStudyProfessionalMutationVariables,
): Promise<CreateCaseStudyProfessionalMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseStudyProfessionalMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
