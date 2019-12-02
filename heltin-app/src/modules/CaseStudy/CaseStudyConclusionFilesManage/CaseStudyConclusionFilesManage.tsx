/**
 *
 * CaseStudyConclusionFilesManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { toBase64 } from 'lib/file';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyConclusionFilesManage_caseStudyConclusionFiles } from 'relay/artifacts/CaseStudyConclusionFilesManage_caseStudyConclusionFiles.graphql';
import { createCaseStudyConclusionFileMutation } from 'relay/mutations/CreateCaseStudyConclusionFile';
import { deleteCaseStudyConclusionFileMutation } from 'relay/mutations/DeleteCaseStudyConclusionFile';

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

export interface CaseStudyConclusionFilesManageProps {
  caseStudyConclusionRowId: UUID;
  caseStudyConclusionFiles: CaseStudyConclusionFilesManage_caseStudyConclusionFiles;
}

const CaseStudyConclusionFilesManage: React.FC<CaseStudyConclusionFilesManageProps & Decorate> = (
  props,
) => {
  const { classes, caseStudyConclusionFiles, caseStudyConclusionRowId } = props;

  return (
    <Flex container direction="column" spacing="small">
      <Flex item>
        <Text size="large" weight="medium">
          <FormattedMessage id="FILES" />
        </Text>
      </Flex>
      <Flex item>
        {caseStudyConclusionFiles.length > 0 ? (
          caseStudyConclusionFiles.map(({ rowId, file }) => (
            <ResolveOnTrigger
              key={rowId}
              params={{ input: { rowId } }}
              promise={deleteCaseStudyConclusionFileMutation}
            >
              {({ trigger, loading, error, clearError }) =>
                error ? (
                  <DismissableAlert message={error} onDismiss={clearError} />
                ) : (
                  <div className={classes.medicalReport}>
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
            return createCaseStudyConclusionFileMutation({
              input: {
                caseStudyConclusionRowId,
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

const ComposedCaseStudyConclusionFilesManage = createFragmentContainer(
  decorate(CaseStudyConclusionFilesManage),
  {
    caseStudyConclusionFiles: graphql`
      fragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile
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
export { ComposedCaseStudyConclusionFilesManage as CaseStudyConclusionFilesManage };
