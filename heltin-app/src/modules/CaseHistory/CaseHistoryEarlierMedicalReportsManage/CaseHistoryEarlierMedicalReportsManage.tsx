/**
 *
 * CaseHistoryEarlierMedicalReportsManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { toBase64 } from 'lib/file';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports } from 'relay/artifacts/CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports.graphql';
import { createCaseHistoryEarlierMedicalReportMutation } from 'relay/mutations/CreateCaseHistoryEarlierMedicalReport';
import { deleteCaseHistoryEarlierMedicalReportMutation } from 'relay/mutations/DeleteCaseHistoryEarlierMedicalReportMutation';

// ui
import { Flex, Label, Button, Text } from '@domonda/ui';
import { PlusIcon, TrashIcon } from 'lib/icons';
import { DismissableAlert } from 'lib/DismissableAlert';

// form
import {
  FormFileField,
  Form,
  FormSubmittingState,
  FormSubmitErrorState,
} from '@domonda/react-form';

// decorate
import { decorate, Decorate } from './decorate';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';

export interface CaseHistoryEarlierMedicalReportsManageProps {
  caseHistoryRowId: UUID;
  caseHistoryEarlierMedicalReports: CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports;
}

const CaseHistoryEarlierMedicalReportsManage: React.FC<CaseHistoryEarlierMedicalReportsManageProps &
  Decorate> = (props) => {
  const { classes, caseHistoryEarlierMedicalReports, caseHistoryRowId } = props;

  return (
    <Flex container direction="column" spacing="small">
      <Flex item>
        <Text size="large" weight="medium">
          <FormattedMessage id="MEDICAL_REPORTS" />
        </Text>
      </Flex>
      <Flex item container direction="column" spacing="tiny">
        {caseHistoryEarlierMedicalReports.length > 0 ? (
          caseHistoryEarlierMedicalReports.map(({ rowId, file }) => (
            <Flex key={rowId} item>
              <ResolveOnTrigger
                params={{ input: { rowId } }}
                promise={deleteCaseHistoryEarlierMedicalReportMutation}
              >
                {({ trigger, loading, error, clearError }) =>
                  error ? (
                    <DismissableAlert message={error} onDismiss={clearError} />
                  ) : (
                    <div className={classes.medicalReport}>
                      <Flex container spacing="tiny" align="center">
                        <Flex item flex={1} style={{ display: 'flex' }}>
                          <Button
                            variant="link"
                            component={({ children, ...rest }) => (
                              <a
                                {...rest}
                                href={`data:application/octet-stream;base64,${file.data}`}
                                download={file.name}
                              >
                                {children}
                              </a>
                            )}
                          >
                            {file.name}
                          </Button>
                        </Flex>
                        <Flex item>
                          <Button
                            color="danger"
                            variant="text"
                            onClick={trigger}
                            disabled={loading}
                          >
                            <TrashIcon />
                          </Button>
                        </Flex>
                      </Flex>
                    </div>
                  )
                }
              </ResolveOnTrigger>
            </Flex>
          ))
        ) : (
          <Flex item>
            <Text color="warning">
              <FormattedMessage id="NO_EARLIER_MEDICAL_REPORTS" />
            </Text>
          </Flex>
        )}
        <Flex item>
          <Form
            resetOnSuccessfulSubmit
            defaultValues={{ file: null as File | null }}
            onSubmit={async ({ file }) => {
              if (!file) {
                throw new Error('File is required!');
              }
              return createCaseHistoryEarlierMedicalReportMutation({
                input: {
                  caseHistoryRowId,
                  fileName: file.name,
                  fileData: await toBase64(file),
                },
              });
            }}
          >
            <FormSubmitErrorState>
              {(error, { resetSubmitError }) =>
                error ? (
                  <DismissableAlert message={error} onDismiss={resetSubmitError} />
                ) : (
                  <Flex container spacing="tiny" align="center">
                    <Flex item flex={1}>
                      <FormFileField path="file" required>
                        {({ inputProps }) => (
                          <>
                            <Label>
                              <FormattedMessage id="MEDICAL_REPORT" />
                            </Label>
                            <input {...inputProps} />
                          </>
                        )}
                      </FormFileField>
                    </Flex>
                    <Flex item>
                      <FormSubmittingState>
                        {(submitting) => (
                          <Button
                            type="submit"
                            variant="secondary"
                            color="success"
                            size="tiny"
                            disabled={submitting}
                          >
                            <PlusIcon />
                            <FormattedMessage tagName="span" id="ADD" />
                          </Button>
                        )}
                      </FormSubmittingState>
                    </Flex>
                  </Flex>
                )
              }
            </FormSubmitErrorState>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ComposedCaseHistoryEarlierMedicalReportsManage = createFragmentContainer(
  decorate(CaseHistoryEarlierMedicalReportsManage),
  {
    caseHistoryEarlierMedicalReports: graphql`
      fragment CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports on CaseHistoryEarlierMedicalReport
        @relay(plural: true) {
        id
        rowId
        file: fileByFileRowId {
          rowId
          name
          data
        }
      }
    `,
  },
);
export { ComposedCaseHistoryEarlierMedicalReportsManage as CaseHistoryEarlierMedicalReportsManage };
