/**
 *
 * DeleteCaseStudyTreatmentFileMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseStudyTreatmentFileMutation,
  DeleteCaseStudyTreatmentFileMutationVariables,
  DeleteCaseStudyTreatmentFileMutationResponse,
} from 'relay/artifacts/DeleteCaseStudyTreatmentFileMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseStudyTreatmentFileMutation($input: DeleteCaseStudyTreatmentFileInput!) {
    deleteCaseStudyTreatmentFile(input: $input) {
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

export type { DeleteCaseStudyTreatmentFileMutation };

export const deleteCaseStudyTreatmentFileMutation = (
  variables: DeleteCaseStudyTreatmentFileMutationVariables,
): Promise<DeleteCaseStudyTreatmentFileMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseStudyTreatmentFileMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        store.invalidateStore();
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
