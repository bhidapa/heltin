/**
 *
 * DeleteProfessionalMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteProfessionalMutation,
  DeleteProfessionalMutationVariables,
  DeleteProfessionalMutationResponse,
} from 'relay/artifacts/DeleteProfessionalMutation.graphql';

const mutation = graphql`
  mutation DeleteProfessionalMutation($input: DeleteMentalHealthProfessionalInput!) {
    deleteMentalHealthProfessional(input: $input) {
      mentalHealthProfessional {
        id
      }
    }
  }
`;

export { DeleteProfessionalMutation };

export const deleteProfessionalMutation = (
  variables: DeleteProfessionalMutationVariables,
): Promise<DeleteProfessionalMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteProfessionalMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
