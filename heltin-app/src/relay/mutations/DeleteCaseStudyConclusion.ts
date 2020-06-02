/**
 *
 * DeleteCaseStudyConclusionMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseStudyConclusionMutation,
  DeleteCaseStudyConclusionMutationVariables,
  DeleteCaseStudyConclusionMutationResponse,
} from 'relay/artifacts/DeleteCaseStudyConclusionMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseStudyConclusionMutation($input: DeleteCaseStudyConclusionInput!) {
    deleteCaseStudyConclusion(input: $input) {
      clientMutationId
    }
  }
`;

export type { DeleteCaseStudyConclusionMutation };

export const deleteCaseStudyConclusionMutation = (
  variables: DeleteCaseStudyConclusionMutationVariables,
): Promise<DeleteCaseStudyConclusionMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseStudyConclusionMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
