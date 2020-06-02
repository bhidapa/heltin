/**
 *
 * CreateCaseStudyConclusionMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseStudyConclusionMutation,
  CreateCaseStudyConclusionMutationVariables,
  CreateCaseStudyConclusionMutationResponse,
} from 'relay/artifacts/CreateCaseStudyConclusionMutation.graphql';

const mutation = graphql`
  mutation CreateCaseStudyConclusionMutation($input: CreateCaseStudyConclusionInput!) {
    createCaseStudyConclusion(input: $input) {
      caseStudyConclusion {
        rowId
      }
    }
  }
`;

export type { CreateCaseStudyConclusionMutation };

export const createCaseStudyConclusionMutation = (
  variables: CreateCaseStudyConclusionMutationVariables,
): Promise<CreateCaseStudyConclusionMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseStudyConclusionMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
