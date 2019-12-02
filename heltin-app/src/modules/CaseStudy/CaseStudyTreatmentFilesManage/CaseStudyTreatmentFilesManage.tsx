/**
 *
 * CaseStudyTreatmentFilesManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { toBase64 } from 'lib/file';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles } from 'relay/artifacts/CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles.graphql';
import { createCaseStudyTreatmentFileMutation } from 'relay/mutations/CreateCaseStudyTreatmentFile';
import { deleteCaseStudyTreatmentFileMutation } from 'relay/mutations/DeleteCaseStudyTreatmentFile';

// ui
import { Flex, Button, Text } from '@domonda/ui';
import { TrashIcon } from 'lib/icons';
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
import { FileDownloadButton } from 'modules/File/FileDownloadButton';

export interface CaseStudyTreatmentFilesManageProps {
  caseStudyTreatmentRowId: UUID;
  caseStudyTreatmentFiles: CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles;
}

const CaseStudyTreatmentFilesManage: React.FC<CaseStudyTreatmentFilesManageProps & Decorate> = (
  props,
) => {
  const { classes, caseStudyTreatmentFiles, caseStudyTreatmentRowId } = props;

  return (
    <Flex container direction="column" spacing="small">
      <Flex item>
        <Text size="medium" weight="medium">
          <FormattedMessage id="FILES" />
        </Text>
      </Flex>
      <Flex item>
        {caseStudyTreatmentFiles.length > 0 ? (
          caseStudyTreatmentFiles.map(({ rowId, file }) => (
            <ResolveOnTrigger
              key={rowId}
              params={{ input: { rowId } }}
              promise={deleteCaseStudyTreatmentFileMutation}
            >
              {({ trigger, loading, error, clearError }) =>
                error ? (
                  <DismissableAlert message={error} onDismiss={clearError} />
                ) : (
                  <div className={classes.file}>
                    <Flex container spacing="tiny" align="center">
                      <Flex item flex={1}>
                        <Text>{file.name}</Text>
                      </Flex>
                      <Flex item>
                        <FileDownloadButton
                          fileRowId={file.rowId}
                          variant="link"
                          color="secondary"
                        />
                      </Flex>
                      <Flex item>
                        <Button
                          color="danger"
                          variant="text"
                          onClick={trigger}
                          disabled={loading}
                          style={{ display: 'flex' }}
                        >
                          <TrashIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  </div>
                )
              }
            </ResolveOnTrigger>
          ))
        ) : (
          <Text color="warning">
            <FormattedMessage id="NO_ENTRIES" />
          </Text>
        )}
      </Flex>
      <Flex item>
        <Form
          resetOnSuccessfulSubmit
          defaultValues={{ file: null as File | null }}
          onSubmit={async ({ file }) => {
            if (!file) {
              throw new Error('File is required!');
            }
            return createCaseStudyTreatmentFileMutation({
              input: {
                caseStudyTreatmentRowId,
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
                      {({ inputProps }) => <input {...inputProps} />}
                    </FormFileField>
                  </Flex>
                  <Flex item>
                    <FormSubmittingState>
                      {(submitting) => (
                        <Button type="submit" variant="primary" size="tiny" disabled={submitting}>
                          <FormattedMessage id="ADD" />
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
  );
};

const ComposedCaseStudyTreatmentFilesManage = createFragmentContainer(
  decorate(CaseStudyTreatmentFilesManage),
  {
    caseStudyTreatmentFiles: graphql`
      fragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile
        @relay(plural: true) {
        id
        rowId
        file: fileByFileRowId {
          rowId
          name
        }
      }
    `,
  },
);
export { ComposedCaseStudyTreatmentFilesManage as CaseStudyTreatmentFilesManage };
