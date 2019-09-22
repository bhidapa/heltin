/**
 *
 * AuthenticateMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'lib/relay/environment';
import {
  AuthenticateMutation,
  AuthenticateMutationVariables,
  AuthenticateMutationResponse,
} from 'lib/relay/artifacts/AuthenticateMutation.graphql';

const mutation = graphql`
  mutation AuthenticateMutation($input: AuthenticateInput!) {
    authenticate(input: $input) {
      jwtToken
    }
  }
`;

export { AuthenticateMutation };

export const authenticateMutation = (
  variables: AuthenticateMutationVariables,
): Promise<AuthenticateMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<AuthenticateMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
