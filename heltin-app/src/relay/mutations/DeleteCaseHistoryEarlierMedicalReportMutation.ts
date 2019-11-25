/**
 *
 * DeleteCaseHistoryEarlierMedicalReportMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  DeleteCaseHistoryEarlierMedicalReportMutation,
  DeleteCaseHistoryEarlierMedicalReportMutationVariables,
  DeleteCaseHistoryEarlierMedicalReportMutationResponse,
} from 'relay/artifacts/DeleteCaseHistoryEarlierMedicalReportMutation.graphql';

const mutation = graphql`
  mutation DeleteCaseHistoryEarlierMedicalReportMutation(
    $input: DeleteCaseHistoryEarlierMedicalReportInput!
  ) {
    deleteCaseHistoryEarlierMedicalReport(input: $input) {
      caseHistoryByCaseHistoryRowId {
        caseHistoryEarlierMedicalReportsByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            ...CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports
          }
        }
      }
    }
  }
`;

export { DeleteCaseHistoryEarlierMedicalReportMutation };

export const deleteCaseHistoryEarlierMedicalReportMutation = (
  variables: DeleteCaseHistoryEarlierMedicalReportMutationVariables,
): Promise<DeleteCaseHistoryEarlierMedicalReportMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<DeleteCaseHistoryEarlierMedicalReportMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
