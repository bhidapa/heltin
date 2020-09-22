/**
 *
 * CreateProfessionalMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateProfessionalMutation,
  CreateProfessionalMutationVariables,
  CreateProfessionalMutationResponse,
} from 'relay/artifacts/CreateProfessionalMutation.graphql';

const mutation = graphql`
  mutation CreateProfessionalMutation($input: CreateMentalHealthProfessionalInput!) {
    createMentalHealthProfessional(input: $input) {
      mentalHealthProfessional {
        rowId
      }
    }
  }
`;

export type { CreateProfessionalMutation };

export const createProfessionalMutation = (
  variables: CreateProfessionalMutationVariables,
): Promise<CreateProfessionalMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateProfessionalMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
