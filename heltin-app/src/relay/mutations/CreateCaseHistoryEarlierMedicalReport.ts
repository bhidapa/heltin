/**
 *
 * CreateCaseHistoryEarlierMedicalReportMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { environment } from 'relay/environment';
import {
  CreateCaseHistoryEarlierMedicalReportMutation,
  CreateCaseHistoryEarlierMedicalReportMutationVariables,
  CreateCaseHistoryEarlierMedicalReportMutationResponse,
} from 'relay/artifacts/CreateCaseHistoryEarlierMedicalReportMutation.graphql';

const mutation = graphql`
  mutation CreateCaseHistoryEarlierMedicalReportMutation(
    $input: CreateCaseHistoryEarlierMedicalReportInput!
  ) {
    createCaseHistoryEarlierMedicalReport(input: $input) {
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

export { CreateCaseHistoryEarlierMedicalReportMutation };

export const createCaseHistoryEarlierMedicalReportMutation = (
  variables: CreateCaseHistoryEarlierMedicalReportMutationVariables,
): Promise<CreateCaseHistoryEarlierMedicalReportMutationResponse> =>
  new Promise((resolve, reject) =>
    commitMutation<CreateCaseHistoryEarlierMedicalReportMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
