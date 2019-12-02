/**
 *
 * CaseHistoryFilesManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { toBase64 } from 'lib/file';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseHistoryFilesManage_caseHistoryFiles } from 'relay/artifacts/CaseHistoryFilesManage_caseHistoryFiles.graphql';
import { createCaseHistoryFileMutation } from 'relay/mutations/CreateCaseHistoryFile';
import { deleteCaseHistoryFileMutation } from 'relay/mutations/DeleteCaseHistoryFile';

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

export interface CaseHistoryFilesManageProps {
  caseHistoryRowId: UUID;
  caseHistoryFiles: CaseHistoryFilesManage_caseHistoryFiles;
}

const CaseHistoryFilesManage: React.FC<CaseHistoryFilesManageProps & Decorate> = (props) => {
  const { classes, caseHistoryFiles, caseHistoryRowId } = props;

  return (
    <Flex container direction="column" spacing="small">
      <Flex item>
        <Text size="medium" weight="medium">
          <FormattedMessage id="FILES" />
        </Text>
      </Flex>
      <Flex item>
        {caseHistoryFiles.length > 0 ? (
          caseHistoryFiles.map(({ rowId, file }) => (
            <ResolveOnTrigger
              key={rowId}
              params={{ input: { rowId } }}
              promise={deleteCaseHistoryFileMutation}
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
            return createCaseHistoryFileMutation({
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

const ComposedCaseHistoryFilesManage = createFragmentContainer(decorate(CaseHistoryFilesManage), {
  caseHistoryFiles: graphql`
    fragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile @relay(plural: true) {
      id
      rowId
      file: fileByFileRowId {
        rowId
        name
      }
    }
  `,
});
export { ComposedCaseHistoryFilesManage as CaseHistoryFilesManage };
