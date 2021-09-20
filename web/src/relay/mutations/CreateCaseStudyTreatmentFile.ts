/**
 *
 * CreateCaseStudyTreatmentFileMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseStudyTreatmentFileMutation,
  CreateCaseStudyTreatmentFileMutationVariables,
  CreateCaseStudyTreatmentFileMutationResponse,
} from 'relay/artifacts/CreateCaseStudyTreatmentFileMutation.graphql';

const mutation = graphql`
  mutation CreateCaseStudyTreatmentFileMutation($input: CreateCaseStudyTreatmentFileInput!) {
    createCaseStudyTreatmentFile(input: $input) {
      caseStudyTreatmentByCaseStudyTreatmentRowId {
        caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles
          }
        }
      }
    }
  }
`;

export type { CreateCaseStudyTreatmentFileMutation };

export const createCaseStudyTreatmentFileMutation = (
  variables: CreateCaseStudyTreatmentFileMutationVariables,
): Promise<CreateCaseStudyTreatmentFileMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseStudyTreatmentFileMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        store.invalidateStore();
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
