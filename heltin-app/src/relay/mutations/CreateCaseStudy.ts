/**
 *
 * CreateCaseStudyMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseStudyMutation,
  CreateCaseStudyMutationVariables,
  CreateCaseStudyMutationResponse,
} from 'relay/artifacts/CreateCaseStudyMutation.graphql';

const mutation = graphql`
  mutation CreateCaseStudyMutation($input: CreateCaseStudyInput!) {
    createCaseStudy(input: $input) {
      caseStudy {
        rowId
      }
      clientByClientRowId {
        caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            ...CaseStudiesTable_caseStudies @relay(mask: false)
          }
        }
      }
    }
  }
`;

export { CreateCaseStudyMutation };

export const createCaseStudyMutation = (
  variables: CreateCaseStudyMutationVariables,
): Promise<CreateCaseStudyMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseStudyMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
