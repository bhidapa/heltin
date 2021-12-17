/**
 *
 * CaseStudyConclusionFilesManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { toBase64 } from 'lib/file';
import { makeLink } from 'lib/makeLink';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { usePromiseMutation } from 'relay/hooks';
import { CaseStudyConclusionFilesManage_caseStudyConclusionFiles$key } from 'relay/artifacts/CaseStudyConclusionFilesManage_caseStudyConclusionFiles.graphql';
import { CaseStudyConclusionFilesManageCreateMutation } from 'relay/artifacts/CaseStudyConclusionFilesManageCreateMutation.graphql';
import { CaseStudyConclusionFilesManageDeleteMutation } from 'relay/artifacts/CaseStudyConclusionFilesManageDeleteMutation.graphql';

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

export interface CaseStudyConclusionFilesManageProps {
  caseStudyConclusionRowId: UUID;
  caseStudyConclusionFiles: CaseStudyConclusionFilesManage_caseStudyConclusionFiles$key;
}

const CaseStudyConclusionFilesManage: React.FC<CaseStudyConclusionFilesManageProps & Decorate> = (
  props,
) => {
  const {
    classes,
    caseStudyConclusionRowId,
    caseStudyConclusionFiles: caseStudyConclusionFilesKey,
  } = props;

  const caseStudyConclusionFiles = useFragment(
    graphql`
      fragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile
      @relay(plural: true) {
        id
        rowId
        file: fileByFileRowId {
          rowId
          name
          protected
        }
      }
    `,
    caseStudyConclusionFilesKey,
  );

  const createCaseStudyConclusionFile =
    usePromiseMutation<CaseStudyConclusionFilesManageCreateMutation>(
      graphql`
        mutation CaseStudyConclusionFilesManageCreateMutation(
          $input: CreateCaseStudyConclusionFileInput!
        ) {
          createCaseStudyConclusionFile(input: $input) {
            caseStudyConclusionByCaseStudyConclusionRowId {
              caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {
                nodes {
                  ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
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

  const deleteCaseStudyConclusionFile =
    usePromiseMutation<CaseStudyConclusionFilesManageDeleteMutation>(
      graphql`
        mutation CaseStudyConclusionFilesManageDeleteMutation(
          $input: DeleteCaseStudyConclusionFileInput!
        ) {
          deleteCaseStudyConclusionFile(input: $input) {
            caseStudyConclusionByCaseStudyConclusionRowId {
              caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {
                nodes {
                  ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
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
        {caseStudyConclusionFiles.length > 0 ? (
          caseStudyConclusionFiles.map(({ rowId, file }) => (
            <ResolveOnTrigger
              key={rowId}
              params={{ variables: { input: { rowId } } }}
              promise={deleteCaseStudyConclusionFile}
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
                      </Flex>
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
            return createCaseStudyConclusionFile({
              variables: {
                input: {
                  caseStudyConclusionRowId,
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

const ComposedCaseStudyConclusionFilesManage = decorate(CaseStudyConclusionFilesManage);
export { ComposedCaseStudyConclusionFilesManage as CaseStudyConclusionFilesManage };
