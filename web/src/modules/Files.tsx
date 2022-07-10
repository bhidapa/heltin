/**
 *
 * Files
 *
 */
import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage, FormattedRelativeTime } from 'react-intl';
import { commitLocalUpdate, graphql, useFragment, useRelayEnvironment } from 'react-relay';

import { Link } from '@tanstack/react-location';

import { Tooltip } from 'lib/Tooltip';
import { usePromiseMutation } from 'lib/relay';
import { buildHeaders, checkResponse } from 'lib/request';
import { REQUEST_ID_HEADER_KEY } from 'lib/request';
import { deleteToast, fileUploadToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';
import { usePendingFileUploadsPrompt } from 'lib/usePrompt';
import { genUUID } from 'lib/uuid';

import { relativeTime } from 'intl/relativeTime';

import { FilesUploadFileRowGetAfterUploadMutation } from './__generated__/FilesUploadFileRowGetAfterUploadMutation.graphql';
import { Files_files$key } from './__generated__/Files_files.graphql';

export interface FilesProps {
  filesConnectionId: string;
  files: Files_files$key;
  treatmentRowId?: UUID;
  conclusionRowId?: UUID;
  formResponseRowId?: UUID;
}

export const Files: React.FC<FilesProps> = (props) => {
  const environment = useRelayEnvironment();

  const relRowId = props.treatmentRowId || props.conclusionRowId || props.formResponseRowId;
  if (!relRowId) {
    throw new Error('Files must be related to something');
  }

  const { confirmDelete } = useConfirm();

  const files = useFragment(
    graphql`
      fragment Files_files on File @relay(plural: true) {
        id
        rowId
        link
        name
        protected
        createdAt
        createdBy: userByCreatedBy @required(action: THROW) {
          rowId
          fullName
          isTherapist
        }
      }
    `,
    props.files,
  );

  const [uploads, setUploads] = useState<{ id: string; file: File }[]>([]);

  usePendingFileUploadsPrompt(uploads.length > 0);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    useFsAccessApi: false, // just unnecessary
    onDrop: (acceptedFiles) => {
      setUploads((files) => [...files, ...acceptedFiles.map((file) => ({ id: genUUID(), file }))]);
    },
    minSize: 1, // has to be something
    maxSize: 128 * 1024 * 1024, // 128MB
  });

  const totalCount = uploads.length + files.length;

  return (
    <div className="content">
      <h4 className="content-title">
        <FormattedMessage id="FILES" />
      </h4>

      <table className="table table-striped mb-20">
        <thead>
          <tr>
            <th>
              <FormattedMessage id="FILE_NAME" />
            </th>
            <th>
              {/* TODO: is it always sorted like this? */}
              <i className="fa-solid fa-arrow-down text-muted"></i>
              &nbsp;
              <FormattedMessage id="ADDED_BY" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {uploads.map(({ id, file }) => (
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            <FilesUploadFileRow
              key={id}
              file={file}
              filesConnectionId={props.filesConnectionId}
              preferredRowId={id}
              relRowId={relRowId}
              onError={() => {
                // TODO: maybe display error information instead of removing?
                setUploads((uploads) => uploads.filter((upload) => upload.id !== id));
              }}
              onComplete={() => {
                // remove this file from upload list
                setUploads((uploads) => uploads.filter((upload) => upload.id !== id));
              }}
            />
          ))}

          {files.map((file) => (
            <tr key={file.id}>
              <td>
                <a href={file.link}>
                  <i className="fa-solid fa-download"></i>&nbsp;{file.name}
                </a>
              </td>
              <td>
                {!file.createdBy.isTherapist ? (
                  file.createdBy.fullName
                ) : (
                  <Link to={`/therapists/${file.createdBy.rowId}`} search>
                    {file.createdBy.fullName}
                  </Link>
                )}
                &nbsp;
                <FormattedRelativeTime {...relativeTime(file.createdAt)} style="long" />
              </td>
              <td className="text-right">
                <Tooltip
                  disabled={!file.protected}
                  content={<FormattedMessage id="FILE_IS_PROTECTED" />}
                >
                  <span>
                    <button
                      type="button"
                      disabled={file.protected}
                      aria-disabled={file.protected}
                      className="btn btn-link text-danger"
                      onClick={() => {
                        if (confirmDelete()) {
                          deleteToast(
                            (async () => {
                              await fetch('/api/file/' + file.rowId, {
                                method: 'DELETE',
                                headers: buildHeaders(),
                              }).then(checkResponse);

                              commitLocalUpdate(environment, (store) => {
                                const deletedFileId = file.id;

                                const connection = store.get(props.filesConnectionId);
                                if (!connection) {
                                  throw new Error('Files connection does not exist');
                                }

                                const connectionType = connection.getType();
                                switch (connectionType) {
                                  case 'CaseStudyTreatmentFilesConnection': {
                                    connection.setLinkedRecords(
                                      connection.getLinkedRecords('nodes')?.filter(
                                        (node) =>
                                          // see ClientsCaseStudiesTreatmentsDetailsPage
                                          node.getLinkedRecord('fileByFileRowId')?.getDataID() !==
                                          deletedFileId,
                                      ),
                                      'nodes',
                                    );
                                    return;
                                  }
                                  case 'CaseStudyConclusionFilesConnection': {
                                    connection.setLinkedRecords(
                                      connection.getLinkedRecords('nodes')?.filter(
                                        (node) =>
                                          // see ClientsCaseStudiesConclusionDetailsPage
                                          node.getLinkedRecord('fileByFileRowId')?.getDataID() !==
                                          deletedFileId,
                                      ),
                                      'nodes',
                                    );
                                    return;
                                  }
                                  case 'FormResponseFilesConnection': {
                                    connection.setLinkedRecords(
                                      connection.getLinkedRecords('nodes')?.filter(
                                        (node) =>
                                          // see ClientsCaseStudiesFormsResponsePage
                                          node.getLinkedRecord('fileByFileRowId')?.getDataID() !==
                                          deletedFileId,
                                      ),
                                      'nodes',
                                    );
                                    return;
                                  }
                                  default:
                                    throw new Error(
                                      `Unsupported files connection type ${connectionType}`,
                                    );
                                }
                              });
                            })(),
                          );
                        }
                      }}
                    >
                      <i className="fa-solid fa-ban"></i>
                      &nbsp;
                      <FormattedMessage id="DELETE" />
                    </button>
                  </span>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
        {totalCount === 0 && (
          <tfoot>
            <tr>
              <th className="text-muted">
                <FormattedMessage id="NO_ENTRIES" />
              </th>
              <th></th>
            </tr>
          </tfoot>
        )}
      </table>

      <div {...getRootProps()} className={'Files__dropzone p-20' + (isDragAccept ? ' accept' : '')}>
        <input {...getInputProps()} />
        <p className="text-center">
          <i className="fa-solid fa-cloud-arrow-up"></i>
          &nbsp;
          <FormattedMessage id="CLICK_OR_DROP_FILES" />
        </p>
      </div>
    </div>
  );
};

const FilesUploadFileRow: React.FC<{
  file: File;
  filesConnectionId: string;
  /** The row ID you'd like this File to have. */
  preferredRowId?: UUID;
  /** The row ID of the related item. */
  relRowId: UUID;
  onError: (err: Error) => void;
  /**
   * The upload was successful or canceled by the user, in
   * either cases, it has been completed.
   *
   * When the `fileRowId` argument is undefined, the user
   * canceled the upload.
   */
  onComplete: (fileRowId?: UUID) => void;
}> = (props) => {
  const { file, filesConnectionId, preferredRowId, relRowId, onError, onComplete } = props;

  const [getFileAfterUpload] = usePromiseMutation<FilesUploadFileRowGetAfterUploadMutation>(graphql`
    mutation FilesUploadFileRowGetAfterUploadMutation($input: GetFileAfterUploadInput!) {
      getFileAfterUpload(input: $input) {
        file {
          caseStudyTreatmentFile {
            id
            fileByFileRowId {
              ...Files_files
            }
          }
          caseStudyConclusionFile {
            id
            fileByFileRowId {
              ...Files_files
            }
          }
          formResponseFile {
            id
            fileByFileRowId {
              ...Files_files
            }
          }
        }
      }
    }
  `);

  const reqRef = useRef<XMLHttpRequest | null>(null);
  const animFrameRef = useRef(0);
  const [state, setState] = useState({
    fileRowId: '',
    progress: 0,
    error: null as Error | null,
  });
  function upload() {
    return new Promise<void>((resolve, reject) => {
      setState({ fileRowId: '', progress: 0, error: null });
      reqRef.current?.abort();
      reqRef.current = null;

      const formData = new FormData();
      if (preferredRowId) {
        formData.append('preferredRowId', preferredRowId);
      }
      formData.append('relRowId', relRowId);
      formData.append('file', file, file.name);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/file/upload');
      xhr.setRequestHeader(REQUEST_ID_HEADER_KEY, genUUID());

      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable && state.progress !== 100) {
          cancelAnimationFrame(animFrameRef.current);
          animFrameRef.current = requestAnimationFrame(() => {
            setState((state) => ({
              ...state,
              progress: Math.round((event.loaded / event.total) * 100) - 1, // when request completes is 100%
            }));
          });
        }
      });
      xhr.addEventListener('error', (err) => {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(() => {
          setState((state) => ({
            ...state,
            error: new Error('Browser error occured!'),
          }));
        });
        reject(err);
      });
      xhr.addEventListener('loadend', () => {
        if (!xhr.status) {
          reject(new Error('Canceled'));
          return;
        }

        if (xhr.status !== 200) {
          cancelAnimationFrame(animFrameRef.current);
          animFrameRef.current = requestAnimationFrame(() => {
            setState((state) => ({
              ...state,
              error: new Error('Browser error occured!'),
            }));
          });
          reject(new Error(`${xhr.status}: ${xhr.responseText || xhr.statusText}`));
          return;
        }

        const fileRowId = xhr.responseText;
        cancelAnimationFrame(animFrameRef.current);
        requestAnimationFrame(() => {
          setState((state) => ({
            ...state,
            progress: 100,
            fileRowId,
          }));

          getFileAfterUpload({
            variables: {
              input: {
                rowId: fileRowId,
              },
            },
            updater: (store) => {
              const file = store.getRootField('getFileAfterUpload').getLinkedRecord('file');
              if (!file) {
                throw new Error('Forbidden');
              }

              const connection = store.get(filesConnectionId);
              if (!connection) {
                throw new Error('Files connection does not exist');
              }

              const connectionType = connection.getType();
              switch (connectionType) {
                case 'CaseStudyTreatmentFilesConnection': {
                  const treatmentFile = file.getLinkedRecord('caseStudyTreatmentFile');
                  if (!treatmentFile) {
                    throw new Error('Forbidden');
                  }

                  connection.setLinkedRecords(
                    [treatmentFile, ...(connection.getLinkedRecords('nodes') ?? [])],
                    'nodes',
                  );

                  return;
                }
                case 'CaseStudyConclusionFilesConnection': {
                  const caseStudyConclusionFile = file.getLinkedRecord('caseStudyConclusionFile');
                  if (!caseStudyConclusionFile) {
                    throw new Error('Forbidden');
                  }

                  connection.setLinkedRecords(
                    [caseStudyConclusionFile, ...(connection.getLinkedRecords('nodes') ?? [])],
                    'nodes',
                  );

                  return;
                }
                case 'FormResponseFilesConnection': {
                  const formResponseFile = file.getLinkedRecord('formResponseFile');
                  if (!formResponseFile) {
                    throw new Error('Forbidden');
                  }

                  connection.setLinkedRecords(
                    [formResponseFile, ...(connection.getLinkedRecords('nodes') ?? [])],
                    'nodes',
                  );

                  return;
                }
                default:
                  throw new Error(`Unsupported files connection type ${connectionType}`);
              }
            },
          })
            .then(() => {
              onComplete(fileRowId);
              resolve();
            })
            .catch((err) => {
              cancelAnimationFrame(animFrameRef.current);
              requestAnimationFrame(() => {
                setState((state) => ({
                  ...state,
                  error: err,
                }));
              });
              reject(err);
            });
        });
      });

      xhr.send(formData);

      reqRef.current = xhr;
    });
  }

  useEffect(() => {
    if (!reqRef.current) {
      fileUploadToast(
        upload().catch((err) => {
          onError(err);
          throw err; // we want the toast to fail too
        }),
      );
    }
  }, []);

  const working = !state.fileRowId && !state.error;

  return (
    <tr>
      <td className="text-muted">
        <i className="fa-solid fa-upload"></i>
        &nbsp;{file.name}
      </td>

      <td></td>

      <td>
        <div className="row align-items-center">
          <div className="col">
            <div className="progress">
              <div
                className={
                  'progress-bar' +
                  (state.fileRowId ? ' bg-success' : '') +
                  (state.error ? ' bg-danger' : '') +
                  (working ? ' progress-bar-animated' : '')
                }
                role="progressbar"
                style={{ width: state.progress + '%' }}
                aria-valuenow={state.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          {working && (
            <div className="col-auto ml-20">
              <button
                type="button"
                className="btn btn-link text-danger"
                onClick={() => {
                  reqRef.current?.abort();
                  reqRef.current = null;
                  onComplete();
                }}
              >
                <i className="fa-solid fa-xmark"></i>
                &nbsp;
                <FormattedMessage id="CANCEL" />
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};
