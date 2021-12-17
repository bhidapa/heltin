/**
 *
 * CaseHistoryFilesManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { toBase64 } from 'lib/file';
import { makeLink } from 'lib/makeLink';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { CaseHistoryFilesManage_caseHistoryFiles$key } from 'relay/artifacts/CaseHistoryFilesManage_caseHistoryFiles.graphql';
import { CaseHistoryFilesManageCreateMutation } from 'relay/artifacts/CaseHistoryFilesManageCreateMutation.graphql';
import { CaseHistoryFilesManageDeleteMutation } from 'relay/artifacts/CaseHistoryFilesManageDeleteMutation.graphql';

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
import { usePromiseMutation } from 'relay/hooks';

export interface CaseHistoryFilesManageProps {
  caseHistoryRowId: UUID;
  caseHistoryFiles: CaseHistoryFilesManage_caseHistoryFiles$key;
}

const CaseHistoryFilesManage: React.FC<CaseHistoryFilesManageProps & Decorate> = (props) => {
  const { classes, caseHistoryFiles: caseHistoryFilesKey, caseHistoryRowId } = props;

  const caseHistoryFiles = useFragment(
    graphql`
      fragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile @relay(plural: true) {
        id
        rowId
        file: fileByFileRowId {
          rowId
          name
          protected
        }
      }
    `,
    caseHistoryFilesKey,
  );

  const createCaseHistoryFile = usePromiseMutation<CaseHistoryFilesManageCreateMutation>(
    graphql`
      mutation CaseHistoryFilesManageCreateMutation($input: CreateCaseHistoryFileInput!) {
        createCaseHistoryFile(input: $input) {
          caseHistoryByCaseHistoryRowId {
            caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
              nodes {
                ...CaseHistoryFilesManage_caseHistoryFiles
              }
            }
          }
        }
      }
    `,
    {
      updater: (store) => {
        store.invalidateStore();
      },
    },
  );

  const deleteCaseHistoryFile = usePromiseMutation<CaseHistoryFilesManageDeleteMutation>(
    graphql`
      mutation CaseHistoryFilesManageDeleteMutation($input: DeleteCaseHistoryFileInput!) {
        deleteCaseHistoryFile(input: $input) {
          caseHistoryByCaseHistoryRowId {
            caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
              nodes {
                id
              }
            }
          }
        }
      }
    `,
    {
      updater: (store) => {
        store.invalidateStore();
      },
    },
  );

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
              params={{ variables: { input: { rowId } } }}
              promise={deleteCaseHistoryFile}
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
                      <Button
                        variant="link"
                        color="secondary"
                        component={makeLink({
                          native: true,
                          to: `/api/file/${file.rowId}`,
                        })}
                      >
                        <FormattedMessage id="DOWNLOAD" />
                      </Button>
                      {!file.protected && (
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
                      )}
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
            return createCaseHistoryFile({
              variables: {
                input: {
                  caseHistoryRowId,
                  fileName: file.name,
                  fileData: await toBase64(file),
                },
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

const ComposedCaseHistoryFilesManage = decorate(CaseHistoryFilesManage);
export { ComposedCaseHistoryFilesManage as CaseHistoryFilesManage };
