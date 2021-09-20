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
            ...CaseStudyView_caseStudy @relay(mask: false)
          }
        }
      }
    }
  }
`;

export type { CreateCaseStudyMutation };

export const createCaseStudyMutation = (
  variables: CreateCaseStudyMutationVariables,
): Promise<CreateCaseStudyMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseStudyMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        store.invalidateStore();
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
