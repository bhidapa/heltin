/**
 *
 * UpdateProfessionalMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  UpdateProfessionalMutation,
  UpdateProfessionalMutationVariables,
  UpdateProfessionalMutationResponse,
} from 'relay/artifacts/UpdateProfessionalMutation.graphql';

const mutation = graphql`
  mutation UpdateProfessionalMutation($input: UpdateMentalHealthProfessionalInput!) {
    updateMentalHealthProfessional(input: $input) {
      mentalHealthProfessional {
        ...ProfessionalEdit_professional @relay(mask: false)
      }
    }
  }
`;

export { UpdateProfessionalMutation };

export const updateProfessionalMutation = (
  variables: UpdateProfessionalMutationVariables,
): Promise<UpdateProfessionalMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<UpdateProfessionalMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
